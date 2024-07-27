import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import * as dayjs from 'dayjs';
import { IApiPayload } from 'src/shared/models/api-payload/api-payload';

@Injectable()
export class ResponseInterceptor<T>
  implements NestInterceptor<T, IApiPayload<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<IApiPayload<T>> {
    return next.handle().pipe(
      map((res: unknown) => this.responseHandler(res, context)),
      catchError((err: HttpException) =>
        throwError(() => this.errorHandler(err, context)),
      ),
    );
  }

  errorHandler(exception: HttpException, context: ExecutionContext) {
    const ctx = context.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    const message = exception.message || 'Internal server error';
    const payload = process.env.DEBUG ? exception : {};
    response.status(status).json({
      success: false,
      statusCode: status,
      message,
      payload,
      path: request.url,
      timestamp: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    } as IApiPayload<T>);
  }

  responseHandler(res: any, context: ExecutionContext) {
    const ctx = context.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const statusCode = response.statusCode;

    return {
      success: true,
      path: request.url,
      message: 'Request successful',
      statusCode,
      payload: res,
      timestamp: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    } as IApiPayload<T>;
  }
}

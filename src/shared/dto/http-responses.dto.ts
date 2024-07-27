import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  GoneException,
  HttpStatus,
  MethodNotAllowedException,
  NotFoundException,
  PayloadTooLargeException,
  UnauthorizedException,
} from '@nestjs/common';
import { ApiPayload } from '../models/api-payload/api-payload';

export class OkResponseDto<T> extends ApiPayload<T> {
  success = true;
  message = 'Request Successful';
  statusCode = HttpStatus.OK;
}

export class CreatedResponseDto<T> extends ApiPayload<T> {
  success = true;
  message = 'Request Successful';
  statusCode = HttpStatus.CREATED;
}

export class NotFoundResponseDto extends ApiPayload<NotFoundException> {
  success = false;
  statusCode = HttpStatus.NOT_FOUND;
  payload = new NotFoundException();
}

export class BadRequestResponseDto extends ApiPayload<BadRequestException> {
  success = false;
  statusCode = HttpStatus.BAD_REQUEST;
  payload = new BadRequestException();
}

export class InternalServerErrorResponseDto extends ApiPayload<Error> {
  success = false;
  statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
  payload = new Error();
}

export class ForbiddenResponseDto extends ApiPayload<ForbiddenException> {
  success = false;
  statusCode = HttpStatus.FORBIDDEN;
  payload: ForbiddenException = new ForbiddenException();
}

export class UnauthorizedResponseDto extends ApiPayload<UnauthorizedException> {
  success = false;
  statusCode = HttpStatus.UNAUTHORIZED;
  payload: UnauthorizedException = new UnauthorizedException();
}

export class ConflictResponseDto extends ApiPayload<ConflictException> {
  success = false;
  statusCode = HttpStatus.CONFLICT;
  payload: ConflictException = new ConflictException();
}

export class MethodNotAllowedResponseDto extends ApiPayload<MethodNotAllowedException> {
  success = false;
  statusCode = HttpStatus.METHOD_NOT_ALLOWED;
  payload = new MethodNotAllowedException();
}

export class GoneResponseDto extends ApiPayload<GoneException> {
  success = false;
  statusCode = HttpStatus.GONE;
  payload = new GoneException();
}

export class PayloadTooLargeResponseDto extends ApiPayload<PayloadTooLargeException> {
  success = false;
  statusCode = HttpStatus.PAYLOAD_TOO_LARGE;
  payload = new PayloadTooLargeException();
}

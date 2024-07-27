import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export class ApiPayload<T> implements IApiPayload<T> {
  constructor(private Base: T) {}
  @ApiProperty()
  success: boolean;
  @ApiProperty()
  statusCode: HttpStatus;
  @ApiProperty()
  message: string;
  @ApiProperty()
  payload: T = this.Base;
  @ApiProperty()
  path: string;
  @ApiProperty()
  timestamp: string;
}

export interface IApiPayload<T> {
  success: boolean;
  statusCode: number;
  message: string;
  payload: T;
  path: string;
  timestamp: string;
}

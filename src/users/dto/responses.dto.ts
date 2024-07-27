import { ApiProperty } from '@nestjs/swagger';
import { User } from '../entities/user.entity';
import {
  CreatedResponseDto,
  OkResponseDto,
} from 'src/shared/dto/http-responses.dto';

export class UserCreatedResponseDto extends CreatedResponseDto<User> {
  @ApiProperty({ type: User })
  payload: User;
}

export class UserOkResponseDto extends OkResponseDto<User> {
  @ApiProperty({ type: User })
  payload: User;
}

export class ListUsersOkResponseDto extends OkResponseDto<User[]> {
  @ApiProperty({ type: [User] })
  payload: User[];
}

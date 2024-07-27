import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Transform } from 'class-transformer';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import {
  ListUsersOkResponseDto,
  UserCreatedResponseDto,
  UserOkResponseDto,
} from './dto/responses.dto';
import {
  BadRequestResponseDto,
  InternalServerErrorResponseDto,
  NotFoundResponseDto,
} from 'src/shared/dto/http-responses.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiCreatedResponse({ type: UserCreatedResponseDto })
  @ApiBadRequestResponse({ type: BadRequestResponseDto })
  @ApiInternalServerErrorResponse({ type: InternalServerErrorResponseDto })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOkResponse({ type: ListUsersOkResponseDto })
  @ApiBadRequestResponse({ type: BadRequestResponseDto })
  @ApiNotFoundResponse({ type: NotFoundResponseDto })
  @ApiInternalServerErrorResponse({ type: InternalServerErrorResponseDto })
  findAll() {
    return this.usersService.findAll();
  }

  /**
   *
   * @param id
   * @returns {Promise<IApiResponse<T>>}
   */
  @Get(':id')
  @ApiParam({ name: 'id', type: String })
  @ApiBadRequestResponse({ type: BadRequestResponseDto })
  @ApiNotFoundResponse({ type: NotFoundResponseDto })
  @ApiInternalServerErrorResponse({ type: InternalServerErrorResponseDto })
  @ApiOkResponse({ type: UserOkResponseDto })
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Put(':id')
  @ApiOkResponse({ type: UserOkResponseDto })
  @ApiBadRequestResponse({ type: BadRequestResponseDto })
  @ApiNotFoundResponse({ type: NotFoundResponseDto })
  @ApiInternalServerErrorResponse({ type: InternalServerErrorResponseDto })
  @ApiOkResponse({ type: UserOkResponseDto })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: UserOkResponseDto })
  @ApiBadRequestResponse({ type: BadRequestResponseDto })
  @ApiNotFoundResponse({ type: NotFoundResponseDto })
  @ApiInternalServerErrorResponse({ type: InternalServerErrorResponseDto })
  @ApiOkResponse({ type: UserOkResponseDto })
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}

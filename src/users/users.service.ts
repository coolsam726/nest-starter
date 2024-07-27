import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './entities/user.entity';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly model: Model<UserDocument>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const user = new this.model({
      ...createUserDto,
    });
    try {
      return await user.save();
    } catch (error) {
      if (error instanceof HttpException) throw error;
      throw new HttpException(
        error?.message || 'Unknown server error',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findAll() {
    return await this.model.find().exec();
  }

  async findOne(id: string) {
    const res = await this.model.findById(id).exec();
    if (!res) throw new NotFoundException('User not found');
    return res;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    await this.model.findByIdAndUpdate(id, updateUserDto);
    return (await this.model.findById(id)).id;
  }

  async remove(id: string) {
    const res = await this.model.findByIdAndDelete(id);
    if (!res) throw new NotFoundException('User not found');
    return res;
  }
}

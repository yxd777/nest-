/*
 * @Author: yxd
 * @Date: 2023-03-03 12:57:48
 * @LastEditors: yxd777 792164257@qq.com
 * @LastEditTime: 2023-03-03 17:17:22
 * @Description:
 */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ConfigService } from '@nestjs/config';
import { ConfigEnum } from '../enum/config.enum';
import { User } from './entities/user.entity';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private configService: ConfigService,
  ) {}

  @Post()
  create() {
    const user = {
      username: 'hhh',
      password: '123456',
    } as User;
    return this.userService.create(user);
  }

  @Get('/profile')
  getProfile() {
    return this.userService.findPorfile(1);
  }

  @Get('/logs')
  getLogs() {
    return this.userService.findUserLogs(1);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}

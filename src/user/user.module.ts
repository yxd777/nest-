/*
 * @Author: yxd
 * @Date: 2023-03-03 12:57:48
 * @LastEditors: yxd777 792164257@qq.com
 * @LastEditTime: 2023-03-03 17:16:39
 * @Description:
 */
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Logs } from 'src/logs/entities/logs.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Logs])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}

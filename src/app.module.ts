/*
 * @Author: yxd
 * @Date: 2023-03-03 12:33:50
 * @LastEditors: yxd777 792164257@qq.com
 * @LastEditTime: 2023-03-03 15:26:44
 * @Description:
 */
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

import { ConfigEnum } from './enum/config.enum';

import { Profile } from './user/entities/profile.entity';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';
import { Logs } from './logs/entities/logs.entity';
import { Roles } from './roles/entities/roles.entity';

const envFilePath = `.env.${process.env.NODE_ENV || `development`}`;
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath,
      load: [() => dotenv.config({ path: '.env' })],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        ({
          type: 'mysql',
          host: configService.get(ConfigEnum.DB_HOST),
          port: configService.get(ConfigEnum.DB_PORT),
          username: configService.get(ConfigEnum.DB_USERNAME),
          password: configService.get(ConfigEnum.DB_PASSWORD),
          database: configService.get(ConfigEnum.DB_DATABASE),
          entities: [User, Profile, Roles, Logs],
          synchronize: configService.get(ConfigEnum.DB_SYNC),
          logging: ['error'],
        } as TypeOrmModuleOptions),
    }),
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: 'example',
    //   database: 'testdb',
    //   entities: [],
    // 同步本地的schema与数据库 =>初始化的时候去使用
    //   synchronize: true,
    //   logging: ['error'],
    // }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

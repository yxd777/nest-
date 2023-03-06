/*
 * @Author: yxd
 * @Date: 2023-03-03 12:33:50
 * @LastEditors: yxd777 792164257@qq.com
 * @LastEditTime: 2023-03-06 15:02:41
 * @Description:
 */
import { Global, Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

import { UserModule } from './user/user.module';
import { LogsModule } from './logs/logs.module';
import ormconfig from '../ormconfig';

const envFilePath = `.env.${process.env.NODE_ENV || `development`}`;
@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath,
      load: [() => dotenv.config({ path: '.env' })],
    }),
    TypeOrmModule.forRoot(ormconfig),
    UserModule,
    LogsModule,
  ],
  controllers: [],
  providers: [Logger],
  exports: [Logger],
})
export class AppModule {}

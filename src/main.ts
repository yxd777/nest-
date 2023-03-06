/*
 * @Author: yxd
 * @Date: 2023-03-03 12:33:50
 * @LastEditors: yxd777 792164257@qq.com
 * @LastEditTime: 2023-03-06 12:14:44
 * @Description:
 */
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule, {
    // logger: false,
    // logger: ['error', 'warn'],
  });
  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));
  app.setGlobalPrefix('api/v1');
  const port = 3000;
  await app.listen(port);
  logger.warn(`app 运行在${port}`);
}
bootstrap();

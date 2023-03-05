/*
 * @Author: yxd
 * @Date: 2023-03-03 12:33:50
 * @LastEditors: yxd777 792164257@qq.com
 * @LastEditTime: 2023-03-03 13:00:46
 * @Description:
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  await app.listen(3000);
}
bootstrap();

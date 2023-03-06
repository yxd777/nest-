/*
 * @Author: yxd
 * @Date: 2023-03-06 14:54:03
 * @LastEditors: yxd777 792164257@qq.com
 * @LastEditTime: 2023-03-06 15:01:39
 * @Description:
 */
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Logs } from './src/logs/entities/logs.entity';
import { Roles } from './src/roles/entities/roles.entity';
import { Profile } from './src/user/entities/profile.entity';
import { User } from './src/user/entities/user.entity';

export default {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: 'example',
  database: 'testdb',
  entities: [User, Profile, Roles, Logs],
  synchronize: true,
  logging: ['error'],
} as TypeOrmModuleOptions;

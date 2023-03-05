/*
 * @Author: yxd
 * @Date: 2023-03-03 12:57:48
 * @LastEditors: yxd777 792164257@qq.com
 * @LastEditTime: 2023-03-03 17:05:08
 * @Description:
 */
import { profile } from 'console';
import { Logs } from 'src/logs/entities/logs.entity';
import { Roles } from 'src/roles/entities/roles.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Profile } from './profile.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToMany(() => Logs, (logs) => logs.user)
  logs: Logs[];

  @ManyToMany(() => Roles, (roles) => roles.users)
  @JoinTable({ name: 'users_roles' })
  roles: Roles[];

  @OneToOne(() => Profile, (profile) => profile.user)
  profile: Profile;
}

/*
 * @Author: yxd
 * @Date: 2023-03-03 12:57:48
 * @LastEditors: yxd777 792164257@qq.com
 * @LastEditTime: 2023-03-03 15:25:39
 * @Description:
 */
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Roles {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => User, (users) => users.roles)
  users: User[];
}

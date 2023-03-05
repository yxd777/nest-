/*
 * @Author: yxd
 * @Date: 2023-03-03 12:57:48
 * @LastEditors: yxd777 792164257@qq.com
 * @LastEditTime: 2023-03-03 17:18:12
 * @Description:
 */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Logs } from 'src/logs/entities/logs.entity';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Logs) private readonly logsRepository: Repository<Logs>,
  ) {}

  async create(user: User) {
    const userTemp = await this.userRepository.create(user);
    return this.userRepository.save(userTemp);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  findPorfile(id: number) {
    return this.userRepository.findOne({
      where: { id },
      relations: { profile: true },
    });
  }

  async findUserLogs(uid: number) {
    const user = await this.findOne(uid);
    return this.logsRepository.find({
      where: {
        user,
      },
      relations: { user: true },
    });
  }
}

import {
  Column,
  Entity,
} from 'typeorm';
import { CommonEntity } from 'src/db/base';

import { RoleType } from 'src/constants';

@Entity()
export class BlogUser extends CommonEntity {

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ default: '' })
  nick_name: string;

  @Column({ default: '' })
  avatar: string;

  @Column({ default: '' })
  email: string;

  @Column({ default: '' })
  phone: string;

  @Column({ nullable: true })
  gender: number;

  @Column({ nullable: true })
  birth: Date;

  @Column({ nullable: true })
  status: number;

  @Column({ type: 'enum', enum: RoleType, default: RoleType.USER })
  role: RoleType;

}

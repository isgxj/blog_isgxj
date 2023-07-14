import {
  Column,
  Entity,
} from 'typeorm';
import { CommonEntity } from 'src/db/base';

@Entity()
export class BlogCategory extends CommonEntity {

  @Column({ default: '' })
  name: string;

  @Column({ default: '' })
  description: string;

  @Column({ default: '' })
  image: string;

  @Column({ nullable: true })
  parent_id: number;

  @Column({ default: true })
  is_active: boolean;

  @Column({ default: 0 })
  order: number;
}

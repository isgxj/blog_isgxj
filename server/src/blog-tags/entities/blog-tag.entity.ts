import {
  Column,
  Entity,
} from 'typeorm';
import { CommonEntity } from 'src/db/base';

@Entity()
export class BlogTag extends CommonEntity {

  @Column({ default: '' })
  name: string;

  @Column({ default: '' })
  description: string;

  @Column({ default: '' })
  image: string;

  @Column({ default: true })
  is_active: boolean;

  @Column({ default: 0 })
  order: number;
}

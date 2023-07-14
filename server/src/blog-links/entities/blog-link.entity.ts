import {
  Column,
  Entity,
} from 'typeorm';
import { CommonEntity } from 'src/db/base';

@Entity()
export class BlogLink extends CommonEntity {

  @Column({ default: '' })
  name: string;

  @Column({ default: '' })
  url: string;

  @Column({ default: '' })
  description: string;

  @Column({ default: '' })
  logo: string;
  
  @Column({ default: true })
  is_active: boolean;
  
}

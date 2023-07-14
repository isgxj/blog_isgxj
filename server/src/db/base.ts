import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export abstract class CommonEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @PrimaryGeneratedColumn('uuid')
  uid: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  delete_at: Date;

}
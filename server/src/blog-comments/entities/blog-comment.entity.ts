import {
  Column,
  Entity,
  ManyToOne,
} from 'typeorm';
import { CommonEntity } from 'src/db/base';
import { BlogUser } from 'src/blog-users/entities/blog-user.entity';
import { BlogPost } from 'src/blog-posts/entities/blog-post.entity';

@Entity()
export class BlogComment extends CommonEntity {

  @ManyToOne(() => BlogUser)
  user: BlogUser;

  @ManyToOne(() => BlogPost)
  post: BlogPost;

  @ManyToOne(() => BlogComment)
  parent: BlogComment;

  @Column({ default: '' })
  content: string;

  @Column({ default: 0 })
  likes: number;

  @Column({ default: 0 })
  dislikes: number;

  @Column({ default: true })
  is_approved: boolean;

  @Column({ default: false })
  is_flagged: boolean;

  @Column({ default: '' })
  flag_reason: string;

  @Column({ default: '' })
  ip: string;

  @Column({ default: '' })
  user_agent: string;

}

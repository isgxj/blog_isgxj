import {
  Column,
  Entity,
  ManyToOne,
} from 'typeorm';
import { CommonEntity } from 'src/db/base';
import { BlogUser } from 'src/blog-users/entities/blog-user.entity';
import { BlogPost } from 'src/blog-posts/entities/blog-post.entity';
import { BlogComment } from 'src/blog-comments/entities/blog-comment.entity';

@Entity()
export class BlogLike extends CommonEntity {

  @ManyToOne(() => BlogUser)
  user: BlogUser;

  @ManyToOne(() => BlogPost)
  post: BlogPost;

  @ManyToOne(() => BlogComment)
  comment: BlogComment;

  @Column({ default: true })
  is_active: boolean;
  
}

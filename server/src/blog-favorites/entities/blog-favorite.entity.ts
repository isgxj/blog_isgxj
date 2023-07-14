import {
  Column,
  Entity,
  ManyToOne,
} from 'typeorm';
import { CommonEntity } from 'src/db/base';
import { BlogUser } from 'src/blog-users/entities/blog-user.entity';
import { BlogPost } from 'src/blog-posts/entities/blog-post.entity';

@Entity()
export class BlogFavorite extends CommonEntity {

  @ManyToOne(() => BlogUser)
  user: BlogUser;

  @ManyToOne(() => BlogPost)
  post: BlogPost;

  @Column({ default: true })
  is_active: boolean;
  
}

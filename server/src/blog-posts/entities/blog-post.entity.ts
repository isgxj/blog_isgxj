import {
  Column,
  Entity,
  ManyToOne,
} from 'typeorm';
import { CommonEntity } from 'src/db/base';
import { PostType } from 'src/constants';
import { BlogUser } from 'src/blog-users/entities/blog-user.entity';
import { BlogCategory } from 'src/blog-categorys/entities/blog-category.entity';
import { BlogTag } from 'src/blog-tags/entities/blog-tag.entity';

@Entity()
export class BlogPost extends CommonEntity {

  @ManyToOne(() => BlogUser)
  user: BlogUser;

  @Column({ default: '' })
  title: string;

  @Column({ default: '' })
  content: string;

  @Column({ default: 0 })
  likes: number;

  @Column({ default: 0 })
  dislikes: number;

  @Column({ default: 0 })
  views: number;

  @Column({ default: 0 })
  shares: number;

  @ManyToOne(() => BlogCategory)
  category: BlogCategory;

  @ManyToOne(() => BlogTag)
  tags: BlogTag;

  @Column({ type: 'simple-array', default: [] })
  related_posts: number[];

  @Column({ type: 'enum', enum: PostType, default: `" ${PostType.DRAFT} "` })
  status: PostType;

  @Column({ default: '' })
  image: string;

  @Column({ default: '' })
  excerpt: string;

  @Column({ default: false })
  is_featured: boolean;
}

import { Injectable } from '@nestjs/common';
import { CreateBlogPostDto } from './dto/create-blog-post.dto';
import { UpdateBlogPostDto } from './dto/update-blog-post.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BlogPost } from './entities/blog-post.entity';

@Injectable()
export class BlogPostsService {
  constructor(
    @InjectRepository(BlogPost)
    private blogPostRepository: Repository<BlogPost>,
  ) {}

  create(createBlogPostDto: CreateBlogPostDto) {
    return this.blogPostRepository.insert(createBlogPostDto);
  }

  findAll() {
    return this.blogPostRepository.find()
  }

  findOne(id: number) {
    return this.blogPostRepository.findOneBy({ id })
  }

  update(id: number, updateBlogPostDto: UpdateBlogPostDto) {
    return this.blogPostRepository.update(id, updateBlogPostDto)
  }

  remove(id: number) {
    return this.blogPostRepository.softDelete(id)
  }
}

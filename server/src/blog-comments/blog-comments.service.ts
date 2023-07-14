import { Injectable } from '@nestjs/common';
import { CreateBlogCommentDto } from './dto/create-blog-comment.dto';
import { UpdateBlogCommentDto } from './dto/update-blog-comment.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BlogComment } from './entities/blog-comment.entity';

@Injectable()
export class BlogCommentsService {
  constructor(
    @InjectRepository(BlogComment)
    private blogCommentRepository: Repository<BlogComment>,
  ) {}

  create(createBlogCommentDto: CreateBlogCommentDto) {
    return this.blogCommentRepository.insert(createBlogCommentDto);
  }

  findAll() {
    return this.blogCommentRepository.find()
  }

  findOne(id: number) {
    return this.blogCommentRepository.findOneBy({ id })
  }

  update(id: number, updateBlogCommentDto: UpdateBlogCommentDto) {
    return this.blogCommentRepository.update(id, updateBlogCommentDto)
  }

  remove(id: number) {
    return this.blogCommentRepository.softDelete(id)
  }
}

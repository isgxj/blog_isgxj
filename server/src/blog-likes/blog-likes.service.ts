import { Injectable } from '@nestjs/common';
import { CreateBlogLikeDto } from './dto/create-blog-like.dto';
import { UpdateBlogLikeDto } from './dto/update-blog-like.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BlogLike } from './entities/blog-like.entity';

@Injectable()
export class BlogLikesService {
  constructor(
    @InjectRepository(BlogLike)
    private blogLikeRepository: Repository<BlogLike>,
  ) {}

  create(createBlogLikeDto: CreateBlogLikeDto) {
    return this.blogLikeRepository.insert(createBlogLikeDto);
  }

  findAll() {
    return this.blogLikeRepository.find()
  }

  findOne(id: number) {
    return this.blogLikeRepository.findOneBy({ id })
  }

  update(id: number, updateBlogLikeDto: UpdateBlogLikeDto) {
    return this.blogLikeRepository.update(id, updateBlogLikeDto)
  }

  remove(id: number) {
    return this.blogLikeRepository.softDelete(id)
  }
}

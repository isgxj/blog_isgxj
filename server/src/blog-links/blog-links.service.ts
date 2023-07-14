import { Injectable } from '@nestjs/common';
import { CreateBlogLinkDto } from './dto/create-blog-link.dto';
import { UpdateBlogLinkDto } from './dto/update-blog-link.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BlogLink } from './entities/blog-link.entity';

@Injectable()
export class BlogLinksService {
  constructor(
    @InjectRepository(BlogLink)
    private blogLinkRepository: Repository<BlogLink>,
  ) {}

  create(createBlogLinkDto: CreateBlogLinkDto) {
    return this.blogLinkRepository.insert(createBlogLinkDto);
  }

  findAll() {
    return this.blogLinkRepository.find()
  }

  findOne(id: number) {
    return this.blogLinkRepository.findOneBy({ id })
  }

  update(id: number, updateBlogLinkDto: UpdateBlogLinkDto) {
    return this.blogLinkRepository.update(id, updateBlogLinkDto)
  }

  remove(id: number) {
    return this.blogLinkRepository.softDelete(id)
  }
}

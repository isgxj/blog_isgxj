import { Injectable } from '@nestjs/common';
import { CreateBlogUserDto } from './dto/create-blog-user.dto';
import { UpdateBlogUserDto } from './dto/update-blog-user.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BlogUser } from './entities/blog-user.entity';

@Injectable()
export class BlogUsersService  {
  constructor(
    @InjectRepository(BlogUser)
    private blogUserRepository: Repository<BlogUser>,
  ) {}

  create(createBlogUserDto: CreateBlogUserDto) {
    return this.blogUserRepository.insert(createBlogUserDto);
  }

  findAll() {
    return this.blogUserRepository.find()
  }

  findOne(id: number) {
    return this.blogUserRepository.findOneBy({ id })
  }

  update(id: number, updateBlogUserDto: UpdateBlogUserDto) {
    return this.blogUserRepository.update(id, updateBlogUserDto)
  }

  remove(id: number) {
    return this.blogUserRepository.softDelete(id)
  }
}

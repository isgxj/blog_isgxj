import { Injectable } from '@nestjs/common';
import { CreateBlogCategoryDto } from './dto/create-blog-category.dto';
import { UpdateBlogCategoryDto } from './dto/update-blog-category.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BlogCategory } from './entities/blog-category.entity';

@Injectable()
export class BlogCategorysService {
  constructor(
    @InjectRepository(BlogCategory)
    private blogCategoryRepository: Repository<BlogCategory>,
  ) {}

  create(createBlogCategoryDto: CreateBlogCategoryDto) {
    return this.blogCategoryRepository.insert(createBlogCategoryDto);
  }

  findAll() {
    return this.blogCategoryRepository.find()
  }

  findOne(id: number) {
    return this.blogCategoryRepository.findOneBy({ id })
  }

  update(id: number, updateBlogCategoryDto: UpdateBlogCategoryDto) {
    return this.blogCategoryRepository.update(id, updateBlogCategoryDto)
  }

  remove(id: number) {
    return this.blogCategoryRepository.softDelete(id)
  }
}

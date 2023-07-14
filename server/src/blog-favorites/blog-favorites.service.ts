import { Injectable } from '@nestjs/common';
import { CreateBlogFavoriteDto } from './dto/create-blog-favorite.dto';
import { UpdateBlogFavoriteDto } from './dto/update-blog-favorite.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BlogFavorite } from './entities/blog-favorite.entity';

@Injectable()
export class BlogFavoritesService {
  constructor(
    @InjectRepository(BlogFavorite)
    private blogFavoriteRepository: Repository<BlogFavorite>,
  ) {}

  create(createBlogFavoriteDto: CreateBlogFavoriteDto) {
    return this.blogFavoriteRepository.insert(createBlogFavoriteDto);
  }

  findAll() {
    return this.blogFavoriteRepository.find()
  }

  findOne(id: number) {
    return this.blogFavoriteRepository.findOneBy({ id })
  }

  update(id: number, updateBlogFavoriteDto: UpdateBlogFavoriteDto) {
    return this.blogFavoriteRepository.update(id, updateBlogFavoriteDto)
  }

  remove(id: number) {
    return this.blogFavoriteRepository.softDelete(id)
  }
}

import { Injectable } from '@nestjs/common';
import { CreateBlogSettingDto } from './dto/create-blog-setting.dto';
import { UpdateBlogSettingDto } from './dto/update-blog-setting.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BlogSetting } from './entities/blog-setting.entity';

@Injectable()
export class BlogSettingsService {
  constructor(
    @InjectRepository(BlogSetting)
    private blogSettingRepository: Repository<BlogSetting>,
  ) {}

  create(createBlogSettingDto: CreateBlogSettingDto) {
    return this.blogSettingRepository.insert(createBlogSettingDto);
  }

  findAll() {
    return this.blogSettingRepository.find()
  }

  findOne(id: number) {
    return this.blogSettingRepository.findOneBy({ id })
  }

  update(id: number, updateBlogSettingDto: UpdateBlogSettingDto) {
    return this.blogSettingRepository.update(id, updateBlogSettingDto)
  }

  remove(id: number) {
    return this.blogSettingRepository.softDelete(id)
  }
}

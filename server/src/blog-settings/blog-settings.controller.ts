import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BlogSettingsService } from './blog-settings.service';
import { CreateBlogSettingDto } from './dto/create-blog-setting.dto';
import { UpdateBlogSettingDto } from './dto/update-blog-setting.dto';

@Controller('blog-settings')
export class BlogSettingsController {
  constructor(private readonly blogSettingsService: BlogSettingsService) {}

  @Post()
  create(@Body() createBlogSettingDto: CreateBlogSettingDto) {
    return this.blogSettingsService.create(createBlogSettingDto);
  }

  @Get()
  findAll() {
    return this.blogSettingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blogSettingsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBlogSettingDto: UpdateBlogSettingDto) {
    return this.blogSettingsService.update(+id, updateBlogSettingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blogSettingsService.remove(+id);
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BlogTagsService } from './blog-tags.service';
import { CreateBlogTagDto } from './dto/create-blog-tag.dto';
import { UpdateBlogTagDto } from './dto/update-blog-tag.dto';

@Controller('blog-tags')
export class BlogTagsController {
  constructor(private readonly blogTagsService: BlogTagsService) {}

  @Post()
  create(@Body() createBlogTagDto: CreateBlogTagDto) {
    return this.blogTagsService.create(createBlogTagDto);
  }

  @Get()
  findAll() {
    return this.blogTagsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blogTagsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBlogTagDto: UpdateBlogTagDto) {
    return this.blogTagsService.update(+id, updateBlogTagDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blogTagsService.remove(+id);
  }
}

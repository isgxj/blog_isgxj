import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BlogCategorysService } from './blog-categorys.service';
import { CreateBlogCategoryDto } from './dto/create-blog-category.dto';
import { UpdateBlogCategoryDto } from './dto/update-blog-category.dto';

@Controller('blog-categorys')
export class BlogCategorysController {
  constructor(private readonly blogCategorysService: BlogCategorysService) {}

  @Post()
  create(@Body() createBlogCategoryDto: CreateBlogCategoryDto) {
    return this.blogCategorysService.create(createBlogCategoryDto);
  }

  @Get()
  findAll() {
    return this.blogCategorysService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blogCategorysService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBlogCategoryDto: UpdateBlogCategoryDto) {
    return this.blogCategorysService.update(+id, updateBlogCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blogCategorysService.remove(+id);
  }
}

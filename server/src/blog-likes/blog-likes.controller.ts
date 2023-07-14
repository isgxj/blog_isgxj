import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BlogLikesService } from './blog-likes.service';
import { CreateBlogLikeDto } from './dto/create-blog-like.dto';
import { UpdateBlogLikeDto } from './dto/update-blog-like.dto';

@Controller('blog-likes')
export class BlogLikesController {
  constructor(private readonly blogLikesService: BlogLikesService) {}

  @Post()
  create(@Body() createBlogLikeDto: CreateBlogLikeDto) {
    return this.blogLikesService.create(createBlogLikeDto);
  }

  @Get()
  findAll() {
    return this.blogLikesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blogLikesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBlogLikeDto: UpdateBlogLikeDto) {
    return this.blogLikesService.update(+id, updateBlogLikeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blogLikesService.remove(+id);
  }
}

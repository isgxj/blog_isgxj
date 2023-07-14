import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BlogLinksService } from './blog-links.service';
import { CreateBlogLinkDto } from './dto/create-blog-link.dto';
import { UpdateBlogLinkDto } from './dto/update-blog-link.dto';

@Controller('blog-links')
export class BlogLinksController {
  constructor(private readonly blogLinksService: BlogLinksService) {}

  @Post()
  create(@Body() createBlogLinkDto: CreateBlogLinkDto) {
    return this.blogLinksService.create(createBlogLinkDto);
  }

  @Get()
  findAll() {
    return this.blogLinksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blogLinksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBlogLinkDto: UpdateBlogLinkDto) {
    return this.blogLinksService.update(+id, updateBlogLinkDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blogLinksService.remove(+id);
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BlogUsersService } from './blog-users.service';
import { CreateBlogUserDto } from './dto/create-blog-user.dto';
import { UpdateBlogUserDto } from './dto/update-blog-user.dto';

@Controller('blog-users')
export class BlogUsersController  {
  constructor(private readonly blogUsersService: BlogUsersService) {}

  @Post()
  create(@Body() createBlogPostDto: CreateBlogUserDto) {
    return this.blogUsersService.create(createBlogPostDto);
  }

  @Get()
  findAll() {
    return this.blogUsersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blogUsersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBlogPostDto: UpdateBlogUserDto) {
    return this.blogUsersService.update(+id, updateBlogPostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blogUsersService.remove(+id);
  }
}

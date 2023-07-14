import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BlogFavoritesService } from './blog-favorites.service';
import { CreateBlogFavoriteDto } from './dto/create-blog-favorite.dto';
import { UpdateBlogFavoriteDto } from './dto/update-blog-favorite.dto';

@Controller('blog-favorites')
export class BlogFavoritesController {
  constructor(private readonly blogFavoritesService: BlogFavoritesService) {}

  @Post()
  create(@Body() createBlogFavoriteDto: CreateBlogFavoriteDto) {
    return this.blogFavoritesService.create(createBlogFavoriteDto);
  }

  @Get()
  findAll() {
    return this.blogFavoritesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blogFavoritesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBlogFavoriteDto: UpdateBlogFavoriteDto) {
    return this.blogFavoritesService.update(+id, updateBlogFavoriteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blogFavoritesService.remove(+id);
  }
}

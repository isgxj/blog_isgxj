import { Module } from '@nestjs/common';
import { BlogFavoritesService } from './blog-favorites.service';
import { BlogFavoritesController } from './blog-favorites.controller';

import { TypeOrmModule } from "@nestjs/typeorm";
import { BlogFavorite } from './entities/blog-favorite.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BlogFavorite])],
  controllers: [BlogFavoritesController],
  providers: [BlogFavoritesService]
})
export class BlogFavoritesModule {}

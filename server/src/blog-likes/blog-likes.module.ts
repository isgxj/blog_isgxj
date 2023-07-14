import { Module } from '@nestjs/common';
import { BlogLikesService } from './blog-likes.service';
import { BlogLikesController } from './blog-likes.controller';

import { TypeOrmModule } from "@nestjs/typeorm";
import { BlogLike } from './entities/blog-like.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BlogLike])],
  controllers: [BlogLikesController],
  providers: [BlogLikesService]
})
export class BlogLikesModule {}

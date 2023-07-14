import { Module } from '@nestjs/common';
import { BlogCommentsService } from './blog-comments.service';
import { BlogCommentsController } from './blog-comments.controller';

import { TypeOrmModule } from "@nestjs/typeorm";
import { BlogComment } from './entities/blog-comment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BlogComment])],
  controllers: [BlogCommentsController],
  providers: [BlogCommentsService]
})
export class BlogCommentsModule {}

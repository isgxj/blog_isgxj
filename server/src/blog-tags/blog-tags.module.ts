import { Module } from '@nestjs/common';
import { BlogTagsService } from './blog-tags.service';
import { BlogTagsController } from './blog-tags.controller';

import { TypeOrmModule } from "@nestjs/typeorm";
import { BlogTag } from './entities/blog-tag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BlogTag])],
  controllers: [BlogTagsController],
  providers: [BlogTagsService]
})
export class BlogTagsModule {}

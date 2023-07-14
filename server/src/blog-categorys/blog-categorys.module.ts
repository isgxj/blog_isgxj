import { Module } from '@nestjs/common';
import { BlogCategorysService } from './blog-categorys.service';
import { BlogCategorysController } from './blog-categorys.controller';

import { TypeOrmModule } from "@nestjs/typeorm";
import { BlogCategory } from './entities/blog-category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BlogCategory])],
  controllers: [BlogCategorysController],
  providers: [BlogCategorysService]
})
export class BlogCategorysModule {}

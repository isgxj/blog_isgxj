import { Module } from '@nestjs/common';
import { BlogLinksService } from './blog-links.service';
import { BlogLinksController } from './blog-links.controller';

import { TypeOrmModule } from "@nestjs/typeorm";
import { BlogLink } from './entities/blog-link.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BlogLink])],
  controllers: [BlogLinksController],
  providers: [BlogLinksService]
})
export class BlogLinksModule {}

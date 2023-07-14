import { Module } from '@nestjs/common';
import { BlogUsersService } from './blog-users.service';
import { BlogUsersController } from './blog-users.controller';

import { TypeOrmModule } from "@nestjs/typeorm";
import { BlogUser } from './entities/blog-user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BlogUser])],
  controllers: [BlogUsersController],
  providers: [BlogUsersService],
})
export class BlogUsersModule {}

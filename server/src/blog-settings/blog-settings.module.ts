import { Module } from '@nestjs/common';
import { BlogSettingsService } from './blog-settings.service';
import { BlogSettingsController } from './blog-settings.controller';

import { TypeOrmModule } from "@nestjs/typeorm";
import { BlogSetting } from './entities/blog-setting.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BlogSetting])],
  controllers: [BlogSettingsController],
  providers: [BlogSettingsService]
})
export class BlogSettingsModule {}

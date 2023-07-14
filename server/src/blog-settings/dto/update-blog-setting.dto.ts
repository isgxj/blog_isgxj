import { PartialType } from '@nestjs/mapped-types';
import { CreateBlogSettingDto } from './create-blog-setting.dto';

export class UpdateBlogSettingDto extends PartialType(CreateBlogSettingDto) {}

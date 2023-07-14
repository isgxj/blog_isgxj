import { PartialType } from '@nestjs/mapped-types';
import { CreateBlogUserDto } from './create-blog-user.dto';

export class UpdateBlogUserDto extends PartialType(CreateBlogUserDto) {}

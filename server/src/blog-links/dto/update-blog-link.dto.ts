import { PartialType } from '@nestjs/mapped-types';
import { CreateBlogLinkDto } from './create-blog-link.dto';

export class UpdateBlogLinkDto extends PartialType(CreateBlogLinkDto) {}

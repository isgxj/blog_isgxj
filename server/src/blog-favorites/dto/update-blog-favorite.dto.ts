import { PartialType } from '@nestjs/mapped-types';
import { CreateBlogFavoriteDto } from './create-blog-favorite.dto';

export class UpdateBlogFavoriteDto extends PartialType(CreateBlogFavoriteDto) {}

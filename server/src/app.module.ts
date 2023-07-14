import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogUsersModule } from './blog-users/blog-users.module';
import { BlogPostsModule } from './blog-posts/blog-posts.module';
import { BlogCategorysModule } from './blog-categorys/blog-categorys.module';
import { BlogTagsModule } from './blog-tags/blog-tags.module';
import { BlogCommentsModule } from './blog-comments/blog-comments.module';
import { BlogLikesModule } from './blog-likes/blog-likes.module';
import { BlogFavoritesModule } from './blog-favorites/blog-favorites.module';
import { BlogLinksModule } from './blog-links/blog-links.module';
import { BlogSettingsModule } from './blog-settings/blog-settings.module';
import dbConfig from './db/config';

@Module({
  imports: [dbConfig, BlogUsersModule, BlogPostsModule, BlogCategorysModule, BlogTagsModule, BlogCommentsModule, BlogLikesModule, BlogFavoritesModule, BlogLinksModule, BlogSettingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

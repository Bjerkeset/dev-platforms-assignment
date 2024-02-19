import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogPostsController } from '../blogPosts/blog.controller';
import { BlogPostsService } from '../blogPosts/blog.service';
import { PrismaService } from '../prisma.service';

@Module({
  imports: [],
  controllers: [AppController, BlogPostsController],
  providers: [AppService, BlogPostsService, PrismaService],
})
export class AppModule {}

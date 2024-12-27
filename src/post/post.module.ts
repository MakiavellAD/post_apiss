import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { CategoryService } from '../category/category.service';

@Module({
  controllers: [PostController],
  providers: [PostService, CategoryService],
})
export class PostModule {}

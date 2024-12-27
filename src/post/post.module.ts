import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [PostController],
  // про prisma service писал уже
  providers: [PostService, PrismaService],
})
export class PostModule {}

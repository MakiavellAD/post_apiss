import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { CategoryModule } from './category/category.module';
import { ReviewModule } from './review/review.module';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [UserModule, PostModule, CategoryModule, ReviewModule],
  providers: [PrismaService],
})
export class AppModule {}

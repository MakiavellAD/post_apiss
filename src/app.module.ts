import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { CategoryModule } from './category/category.module';
import { ReviewModule } from './review/review.module';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [UserModule, PostModule, CategoryModule, ReviewModule, PrismaModule],
  providers: [],
})
export class AppModule {}

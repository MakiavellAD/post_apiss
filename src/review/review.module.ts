import { Module } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { ReviewController } from './review.controller';
import { ReviewService } from './review.service';

@Module({
  controllers: [ReviewController],
  // про prisma service писал уже
  providers: [ReviewService, PrismaService],
})
export class ReviewModule {}

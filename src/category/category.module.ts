import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [CategoryController],
  // про prisma service писал уже
  providers: [CategoryService, PrismaService],
})
export class CategoryModule {}

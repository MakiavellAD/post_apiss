import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreatePostDto } from './dtos/create-post.dto';
import { UpdatePostDto } from './dtos/update-post.dto';
import { QueryDto } from './dtos/query.dto';
import { CategoryService } from '../category/category.service';
import { isEmpty } from 'class-validator';
import { Prisma } from '@prisma/client';

@Injectable()
export class PostService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly categoryService: CategoryService,
  ) {}

  async create(createPostDto: CreatePostDto) {
    return this.prisma.post.create({
      data: createPostDto,
    });
  }

  async findAll(params: QueryDto) {
    const { limit, offset, categoryIds, showForLastWeek } = params;

    const where: Prisma.PostWhereInput = {};

    if (!isEmpty(categoryIds)) {
      const existingCategories =
        await this.categoryService.findByIds(categoryIds);
      if (isEmpty(existingCategories)) {
        return [];
      }
      where.categoryId = { in: categoryIds };
    }

    if (showForLastWeek) {
      where.createdAt = {
        gte: new Date(new Date().setDate(new Date().getDate() - 7)),
      };
    }

    return this.prisma.post.findMany({
      include: { category: true, user: true },
      where,
      skip: offset,
      take: limit,
    });
  }

  async findOne(id: number) {
    const post = await this.prisma.post.findUnique({
      where: { id },
      include: { category: true, user: true },
    });
    if (!post) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
    return post;
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    return this.prisma.post.update({
      where: { id },
      data: updatePostDto,
    });
  }

  async remove(id: number) {
    return this.prisma.post.delete({
      where: { id },
    });
  }
}

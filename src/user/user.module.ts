import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [UserController],
  // про prisma service писал уже
  providers: [UserService, PrismaService],
})
export class UserModule {}

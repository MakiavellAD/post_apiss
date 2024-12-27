import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

// все же PrismaService лучше вынесли в отдельный PrismaModule и не держать тут
// PrismaModule можно сделать глобальным в приложении -- @Global()
// тогда ты делаешь imports: [Prismamodule] в AppModule и PrismaService у тебя будет доступен во всех модулях. а prisma service нужно будет удалить из всех провайдеров(ну кроме prisma module)

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}

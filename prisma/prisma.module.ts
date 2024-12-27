import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
// модуль только в src лежать должен
// и сервис там же
export class PrismaModule {}

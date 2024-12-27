import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * не используеются -- дропается к хуям kiss huis dry yagni ссылка ниже
 * https://habr.com/ru/companies/itelma/articles/546372/
 */

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

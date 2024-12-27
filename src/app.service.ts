import { Injectable } from '@nestjs/common';

/**
 * не используеются -- дропается к хуям kiss huis dry yagni ссылка ниже
 * https://habr.com/ru/companies/itelma/articles/546372/
 */

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

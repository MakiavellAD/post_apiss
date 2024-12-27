import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv'; // XXX: не нужен dotenv напрямую. и из package.json удалить(npm un dotenv). ConfigModule из @nestjs/config;

async function bootstrap() {
  dotenv.config(); // как и вот эта штука

  const app = await NestFactory.create(AppModule);

  /**
   * bootstrap обычно делают не больше 10 строк. тип NestFactory.create, достать порты из env и запустить сервак.
   * на все настройки можно создать отдельный файлик, в который ты app передаешь и он там настраивается. он мутабельный так что не требует переопределения
   */
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Blog API')
    .setDescription('API documentation for the Blog application')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const PORT = process.env.PORT || 1344;
  await app.listen(PORT);
  // а если на ремоуте запускаем, там тоже localhost будет?) это так, чисто доебаться)
  console.log(`Application is running on: http://localhost:${PORT}/api`);
}
bootstrap();

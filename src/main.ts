import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();

  const app = await NestFactory.create(AppModule);

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
  console.log(`Application is running on: http://localhost:${PORT}/api`);
}
bootstrap();

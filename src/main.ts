import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupApp } from './app.setup';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  setupApp(app);

  const port = process.env.PORT || 1344;
  await app.listen(port);
  console.log(`Application is running on: ${port} port`);
}
bootstrap();

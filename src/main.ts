import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { env } from './utils/env';
import { swaggerDocument } from './utils/docs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  swaggerDocument(app);

  await app.listen(env.API_PORT ?? 3000);

  console.log(`>>>>>>>>>> ${env.API_URL} is working <<<<<<<<<<`);
}

bootstrap();

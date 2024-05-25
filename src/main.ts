import { NestFactory } from '@nestjs/core';
import { AppModule} from "./app.module";
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();
  const port = 3000;
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(new ValidationPipe({}));
  app.enableCors({
    origin: [process.env.FRONTEND_URL],
  });

  const config = new DocumentBuilder()
      .setTitle('API Finanzas Personales')
      .setDescription('API Servicio manejo de finanzas')
      .setVersion('1.0')
      .addTag('Finance')
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(port);
  console.log(`API running in http://localhost:${port}/api/v1`);
}

bootstrap();

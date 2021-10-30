import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
// import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const config = new DocumentBuilder()
    .setTitle('Rental API')
    .setDescription('Rental API')
    .setVersion('1.0')
    .build();
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({
      logger: false,
    }),
  );
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // app.useGlobalPipes(new ValidationPipe());

  await app.listen(7000);
}
bootstrap();

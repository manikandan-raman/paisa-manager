import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { HttpExceptionFilter } from './utils/exception.filter';
import { InternalServerExceptionFilter } from './utils/internal-server-error.filter';
import * as morgan from 'morgan';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(`api/v1`);
  app.useGlobalFilters(
    // new HttpExceptionFilter(),
    new InternalServerExceptionFilter(),
  );
  app.useGlobalPipes(
    new ValidationPipe({
      skipMissingProperties: false,
    }),
  );
  app.use(
    morgan(':method :url :status :res[content-length] - :response-time ms'),
  );

  const config = new DocumentBuilder()
    .setTitle('Paisa Manager')
    .setDescription('The list of APIs developed for the paisa manager app')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/v1/docs', app, document);
  await app.listen(5000);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ResponseInterceptor } from './shared/interceptors/api-response/api-response';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: false }));
  app.useGlobalInterceptors(new ResponseInterceptor());
  const docsConf = new DocumentBuilder()
    .setTitle('Nest Starter')
    .setDescription(
      'The Nest Starter, building an ecosystem that can be re-used in other projects.',
    )
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, docsConf);
  SwaggerModule.setup('', app, document, {
    yamlDocumentUrl: 'docs/api.yaml',
    jsonDocumentUrl: 'docs/api.json',
  });
  await app.listen(3000);
}
bootstrap();

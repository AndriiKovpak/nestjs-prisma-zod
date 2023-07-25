import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { env } from "./env";
import { INestApplication } from "@nestjs/common";
import { patchNestJsSwagger } from 'nestjs-zod';

const tags = [
    'user',
];

const options = new DocumentBuilder()
    .setTitle(env.APP_TITLE)
    .setDescription(env.APP_DESCRIPTION)
    .setVersion(env.VER)
    .addBearerAuth({
        type: 'http',
        name: 'Authorization',
        bearerFormat: 'Bearer',
        scheme: 'Bearer',
        in: 'Header'
    }, 'access-token');

export const swaggerDocument = (app: INestApplication) => {
    tags.forEach(tag => {
        options.addTag(tag);
    });

    const config = options.build();

    patchNestJsSwagger();

    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup('/docs', app, document);
};
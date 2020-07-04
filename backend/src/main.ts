import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
require('dotenv').config();

const packageJson = require('../package.json');

declare const module: any;

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.enableCors({
		origin: '*' //process.env.CLIENT_URL,
		//credentials: true,
		//exposedHeaders: 'WWW-Authenticate',
	});

	app.useGlobalPipes(new ValidationPipe());

	const document = SwaggerModule.createDocument(
		app,
		new DocumentBuilder()
			.setTitle('Scrape the idea API')
			.setDescription('API for Scrape the idea')
			.setVersion(packageJson.version)
			.build()
	);
	SwaggerModule.setup('api/v1/docs', app, document);

	if (!module.parent) {
		await app.listen(process.env.PORT || 8000);
	}

	if (module.hot) {
		module.hot.accept();
		module.hot.dispose(() => app.close());
	}
}
bootstrap();




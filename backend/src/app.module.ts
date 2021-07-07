import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleModule } from './modules/articles/article.module';
require('dotenv').config();

@Module({
	imports: [ArticleModule, MongooseModule.forRoot(process.env.DATABASE_URL)],
})
export class AppModule {}

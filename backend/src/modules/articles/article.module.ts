import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Article, ArticleSchema } from './schemas/article.schema';
import { ArticlesController } from './article.controller';
import { ArticlesService } from './article.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: Article.name, schema: ArticleSchema }])],
    controllers: [ArticlesController],
    providers: [ArticlesService],
})
export class ArticleModule { }

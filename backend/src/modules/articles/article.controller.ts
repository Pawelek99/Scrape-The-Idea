import { Controller, Get, HttpStatus, Res, Query } from '@nestjs/common';
import { ApiOperation, ApiOkResponse, ApiQuery } from '@nestjs/swagger';
import { Article } from './schemas/article.schema';
import { Response } from 'express';
import { sendResponse, sendError } from '../../common';
import { ArticlesService } from './article.service';

@Controller('/api/v1/articles')
export class ArticlesController {

    constructor(private readonly articlesService: ArticlesService) { }

    @Get('/recent')
    @ApiOperation({ summary: 'Returns recenlty uploaded articles' })
    @ApiOkResponse({
        description: 'Returned recently uploaded articles',
        type: [Article],
    })
    async findRecent(@Res() response: Response) {
        try {
            const articles = await this.articlesService.findRecent();
            sendResponse(response, articles, HttpStatus.OK);
        } catch (error) {
            sendError(response, error);
        }
    }

    @Get('/all')
    @ApiQuery({
		name: 'phrase',
		required: false,
		allowEmptyValue: true,
		description:
			'Phrase to be looked for in the title, content, author or category.',
	})
    @ApiOperation({ summary: 'Returns all saved articles' })
    @ApiOkResponse({
        description: 'Returned all articles',
        type: [Article],
    })
    async findAll(@Query('phrase') phrase: string, @Res() response: Response) {
        try {
            const articles = await this.articlesService.findAll(phrase);
            sendResponse(response, articles, HttpStatus.OK);
        } catch (error) {
            sendError(response, error);
        }
    }
}

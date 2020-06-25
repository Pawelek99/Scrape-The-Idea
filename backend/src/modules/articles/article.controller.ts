import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { ApiOperation, ApiOkResponse } from '@nestjs/swagger';
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
}

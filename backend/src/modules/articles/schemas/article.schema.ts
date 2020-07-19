import { Document } from 'mongoose';
import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema()
export class Article extends Document {
    @Prop()
    @ApiProperty({
        description: 'Title of the article',
        example: 'Cool UI design',
        required: true,
    })
    title: string;

    @Prop()
    @ApiProperty({
        description: 'Author of the article',
        example: 'Winnie the Pooh',
        required: true,
    })
    author: string;

    @Prop()
    @ApiProperty({
        description: 'Article thumbnail url',
        example: 'https://assets.awwwards.com/awards/media/cache/thumb_417_299/submissions/2020/07/5f058e78a912f952559395.png',
        required: true,
    })
    thumbnail: string;

    @Prop()
    @ApiProperty({
        description: 'Article image url',
        example: 'https://assets.awwwards.com/awards/media/cache/thumb_417_299/submissions/2020/07/5f058e78a912f952559395.png',
        required: true,
    })
    image: string;

    @Prop()
    @ApiProperty({
        description: 'Link to the whole article',
        example: 'https://assets.awwwards.com/awards/media/cache/thumb_417_299/submissions/2020/07/5f058e78a912f952559395.png',
        required: true,
    })
    link: string;

    @Prop()
    @ApiProperty({
        description: 'Indicates the origin url of the article',
        example: 'DRIBBBLE',
        required: true,
    })
    website: string;

    @Prop()
    @ApiProperty({
        description: 'Date when the entity was created',
        example: '2020-07-19T09:03:17.841Z',
        required: true,
    })
    createdAt: string;

    @Prop()
    @ApiProperty({
        description: 'Article rate in stars',
        example: '1234',
        required: true,
    })
    stars: number;
};

export const ArticleSchema = SchemaFactory.createForClass(Article);

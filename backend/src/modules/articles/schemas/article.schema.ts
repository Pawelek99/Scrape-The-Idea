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
        description: 'Date when the entity was created',
        example: '06-06-2020 15:21:35',
        required: true,
    })
    createdAt: number;

    @Prop()
    @ApiProperty({
        description: 'Indicates the origin url of the article',
        example: 'www.dribbble.com',
        required: true,
    })
    originSite: string;
};

export const ArticleSchema = SchemaFactory.createForClass(Article);

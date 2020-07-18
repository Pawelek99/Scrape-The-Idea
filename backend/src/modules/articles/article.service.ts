import { Injectable } from '@nestjs/common';
import { Article } from './schemas/article.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import fetch from 'node-fetch';
const cheerio = require('cheerio');

@Injectable()
export class ArticlesService {
    constructor(@InjectModel('Article') private readonly articleModel: Model<Article>) { }

    async findRecent(): Promise<Article[]> {
        const dribbble = await fetch('https://dribbble.com/?page=1&per_page=24');
        const awwwards = await fetch('https://www.awwwards.com/websites/')
        const body = await dribbble.text();

        const _ = cheerio.load(body);
        let data = []
        const imgSizeRegex4 = /_2x/g
        const imgSizeRegex2 = /_1x/g
        for(let i = 0; i < 30; i++) {
            if(!_('.display-name')[i]) break;
            data.push({
                //temporary id
                id: Math.floor(Math.random() * 100**10),
                author: _('.display-name')[i].children[0].data,
                title: _('.shot-title')[i].children[0].data,
                thumbnail: _('picture').children('img')[i].attribs.src,
                image: _('picture').children('img')[i].attribs.src.replace(imgSizeRegex4, '_4x').replace(imgSizeRegex2, '_2x'),
                link: 'https://www.dribbble.com'+_('.dribbble-link')[i].attribs.href,
                website: 'DRIBBLE',
                createdAt: Date.now(),
                //@todo
                stars: '1000',
            })
        }
        //console.log(data)

        const body1 = await awwwards.text()
        const _awwwards = cheerio.load(body1)
        const getImgUrlRegex = /\S+(png|jpg)/gm

        for(let i = 0; i < 20; i++) {
            if(!_awwwards('.box-item')[i]) break;
            data.push({
                //temporary id
                id: Math.floor(Math.random() * 100**10),
                author: _awwwards('.by').find('a')[i].children[0].data,
                title: _awwwards('h3').find('a')[i].children[0].data,
                thumbnail: _awwwards('.rollover').find(_awwwards('.box-photo')).find('img')[i+6].attribs['data-srcset'].match(getImgUrlRegex)[0],
                image: _awwwards('.rollover').find(_awwwards('.box-photo')).find('img')[i+6].attribs['data-srcset'].match(getImgUrlRegex)[1],
                link: 'https://www.awwwards.com'+_awwwards('.box-info').find('a')[i].attribs.href,
                website: 'AWWWARDS',
                createdAt: Date.now(),
                //@todo
                stars: '1000',
            })
        }
        console.log(data)

        return data

        const regex = /var newestShots = ((?:.|\n)*?\}])/m;
        const m = regex.exec(body);
        if (m) {
            let output = m[1].replace(/ {2,}(\w+):/mg, '"$1":');
            output = output.replace(/\'(.*)\'\,/gm, '"$1",');
            let articles = JSON.parse(output);

            articles = await Promise.all(articles.map(async (article) =>
                await this.articleModel.create({
                    createdAt: Date.now(),
                    originSite: 'www.dribbble.com',
                    title: article.title,
                })
            ));

            return articles;
        }

        return [];
    }
};

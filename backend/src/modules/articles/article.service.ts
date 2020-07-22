import { Injectable } from '@nestjs/common';
import { Article } from './schemas/article.schema';
import { Model, startSession } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import fetch from 'node-fetch';
const cheerio = require('cheerio');

@Injectable()
export class ArticlesService {
    constructor(@InjectModel('Article') private readonly articleModel: Model<Article>) { }

    async findRecent(): Promise<Article[]> {
        const dribbble = await fetch('https://dribbble.com/?page=1&per_page=24');
        const awwwards = await fetch('https://www.awwwards.com/websites/')
        const behance = await fetch('https://www.behance.net/search/projects')
        const body = await dribbble.text();

        const _dribbble = cheerio.load(body);
        let data = []
        const imgSizeRegex4 = /_2x/g
        const imgSizeRegex2 = /_1x/g
        for(let i = 0; i < 30; i++) {
            if(!_dribbble('.display-name')[i]) break;
            data.push({
                //temporary id
                id: Math.floor(Math.random() * 100**10),
                author: _dribbble('.display-name')[i].children[0].data,
                title: _dribbble('.shot-title')[i].children[0].data,
                thumbnail: _dribbble('picture').children('img')[i].attribs.src,
                image: _dribbble('picture').children('img')[i].attribs.src.replace(imgSizeRegex4, '_4x').replace(imgSizeRegex2, '_2x'),
                link: 'https://www.dribbble.com'+_dribbble('.dribbble-link')[i].attribs.href,
                website: 'DRIBBBLE',
                createdAt: new Date().toISOString(),
                //@todo
                stars: '1000',
            })
        }

        const body1 = await awwwards.text()
        const _awwwards = cheerio.load(body1)
        const getImgUrlRegex = /\S+(png|jpg|jpeg|\.\ )/gm

        for(let i = 0; i < 20; i++) {
            if(!_awwwards('.box-item')[i]) break;
            data.push({
                //temporary id
                id: Math.floor(Math.random() * 100**10),
                author: _awwwards('.content-view').find(_awwwards('.by')).find('a')[i].children[0].data,
                title: _awwwards('.content-view').find(_awwwards('h3')).find('a')[i].children[0].data,
                thumbnail: _awwwards('.content-view').find(_awwwards('.rollover')).find(_awwwards('.box-photo')).find('img')[i].attribs['data-srcset'].match(getImgUrlRegex)[0],
                image: _awwwards('.content-view').find(_awwwards('.rollover')).find(_awwwards('.box-photo')).find('img')[i].attribs['data-srcset'].match(getImgUrlRegex)[1],
                link: 'https://www.awwwards.com'+_awwwards('.content-view').find(_awwwards('.rollover')).find('a').not('.js-visit-item')[i].attribs.href,
                website: 'AWWWARDS',
                createdAt: new Date().toISOString(),
                //@todo
                stars: '1000',
            })
        }

        for(let i = 0; i < 20; i++) {
            console.log(i)
            console.log(_awwwards('.content-view').find(_awwwards('h3')).find('a')[i].children[0].data)
            console.log(_awwwards('.content-view').find(_awwwards('.rollover')).find(_awwwards('.box-photo')).find('img')[i].attribs['data-srcset'].match(getImgUrlRegex)[0])
        }

        const body2 = await behance.text()
        const _behance = cheerio.load(body2)

        for(let i = 0; i < 20; i++) {
            if(!_behance('.js-cover-image')[i]) break;
            data.push({
                id: Math.floor(Math.random() * 100**10),
                //@todo author
                author: 'in progress',
                title: _behance('.TitleOwner-limitHeight-2_Y').find('a[data-ut=title]')[i].children[0].data,
                thumbnail: _behance('.ProjectCoverNeue-image-1MZ')[i].attribs.src,
                image: _behance('.js-cover-image')[i].attribs.srcset.match(getImgUrlRegex).pop(),
                link: _behance('.Cover-overlay-28e').find('a')[i].attribs.href,
                website: 'BEHANCE',
                createdAt: new Date().toISOString(),
                //@todo
                stars: '1000',
            })
        }

        let articles = data
        if (articles) {
            articles = await Promise.all(articles.map(async (article) => {
                const content = {
                    author: article.author,
                    title: article.title,
                    thumbnail: article.thumbnail,
                    image: article.image,
                    link: article.link,
                    website: article.website,
                    createdAt: article.createdAt,
                    stars: article.stars,
                }
                const checkArticle = await this.articleModel.findOne({title: article.title})
                if (!checkArticle) {
                    return await this.articleModel.create(content)
                }
                return checkArticle
            }));
            return articles
        };
        return []

        // const regex = /var newestShots = ((?:.|\n)*?\}])/m;
        // const m = regex.exec(body);
        // if (m) {
        //     let output = m[1].replace(/ {2,}(\w+):/mg, '"$1":');
        //     output = output.replace(/\'(.*)\'\,/gm, '"$1",');
        //     let articles = JSON.parse(output);

        //     articles = await Promise.all(articles.map(async (article) =>
        //         await this.articleModel.create({
        //             createdAt: Date.now(),
        //             originSite: 'www.dribbble.com',
        //             title: article.title,
        //         })
        //     ));

        //     return articles;
        // }

        // return [];
    }

    async findAll(phrase: string): Promise<Article[]> {
        const likeStatement = new RegExp(`\S*${(phrase || '')}\S*`,`gmi`)
        return this.articleModel.find({title: {$regex: likeStatement}}).exec()
    }
};

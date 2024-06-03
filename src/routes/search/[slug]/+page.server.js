/** @type {import('./$types').PageServerLoad} */
import { getNewsBySearch, getNewsByLatest } from '../../../lib/getNewsBy.server.js'
import { lang } from '../../../lib/stores.js';
import { get } from 'svelte/store';

export async function load({ params }) {
    const slug = params.slug;
    const langValue = get(lang);
    const news = await getNewsBySearch(langValue, slug);
    const latestNews = await getNewsByLatest(langValue);
    
    return {
        news: news.articles,
        actualArticleId: 0,
        category: slug,
        description: "",
        totalResults: news.totalResults,
        latestNews: latestNews.articles.slice(0, 4)
    }
}
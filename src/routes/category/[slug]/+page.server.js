/** @type {import('./$types').PageServerLoad} */
import { getNewsBySearch, getNewsByLatest } from '../../../lib/getNewsBy.server.js'
import subcategories from '../../../lib/subcategories.json';
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
        category: slug.charAt(0).toUpperCase() + slug.slice(1),
        description: subcategories[slug],
        totalResults: news.totalResults,
        latestNews: latestNews.articles.slice(0, 4)
    }
}
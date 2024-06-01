/** @type {import('./$types').PageServerLoad} */
import { getNewsBySearch, getNewsByLatest } from '../../../lib/getNewsBy.server.js'
import subcategories from '../../../lib/subcategories.json';

export async function load({ params }) {
    const slug = params.slug;
    // const lang = params.lang || 'en';
    const news = await getNewsBySearch(slug);
    const latestNews = await getNewsByLatest();
    
    return {
        news: news.articles,
        actualArticleId: 0,
        category: slug.charAt(0).toUpperCase() + slug.slice(1),
        description: subcategories[slug],
        totalResults: news.totalResults,
        latestNews: latestNews.articles.slice(0, 4)
    }
}
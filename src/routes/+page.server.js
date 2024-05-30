/** @type {import('./$types').PageServerLoad} */
import { API_KEY } from '$env/static/private';
import categories from '../lib/categories.json';

export async function load() {
    const data = await getNews();
    let newsByCategory = [];
    let entries = Object.entries(categories);
    // entries.forEach(([key, value]) => {
        

    return {
        news: data.articles,
        actualArticleId: 0,
        articlesOnPage: [],
    };
    //return data;
}

async function getNews() {
    const url = "https://newsapi.org/v2/top-headlines?language=en&apiKey=" + API_KEY
    const response = await fetch(url);
    const data = await response.json();;
    if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch data');
    }

    return data;
}

export async function getNewsByCategory(category) {
    const url = "https://newsapi.org/v2/top-headlines?language=en&category=" + category + "&apiKey=" + API_KEY
    const response = await fetch(url);
    const data = await response.json();;
    if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch data');
    }

    return data;
}
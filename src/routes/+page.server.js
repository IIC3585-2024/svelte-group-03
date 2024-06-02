/** @type {import('./$types').PageServerLoad} */
import { getNews, getNewsByCategory } from '../lib/getNewsBy.server.js';
import categories from '../lib/categories.json';
import { lang } from '../lib/stores.js';
import { get } from 'svelte/store';

export async function load() {
    const langValue = get(lang);
    let data = await getNews(langValue);
    let newsByCategory = [];
    let entries = Object.entries(categories);
    let randomCategories = [];
    for (let i = 0; i < 2; i++) {
        let randomIndex = Math.floor(Math.random() * entries.length);
        while (randomCategories.includes(randomIndex)) {
            randomIndex = Math.floor(Math.random() * entries.length);
        }
        let category = entries[randomIndex][0];
        let news = await getNewsByCategory(langValue, category);
        newsByCategory.push({ category: category, news: news });
    }    

    return {
        news: data.articles,
        actualArticleId: 0,
        articlesOnPage: [],
        newsByCategory: newsByCategory
    };
}
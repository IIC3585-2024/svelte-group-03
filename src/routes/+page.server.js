/** @type {import('./$types').PageServerLoad} */
import { API_KEY } from '$env/static/private';
import { get } from 'svelte/store';
import categories from '../lib/categories.json';

export async function load() {
    const data = await getNews();
    let newsByCategory = [];
    let entries = Object.entries(categories);
    let randomCategories = [];
    for (let i = 0; i < 2; i++) {
        let randomIndex = Math.floor(Math.random() * entries.length);
        while (randomCategories.includes(randomIndex)) {
            randomIndex = Math.floor(Math.random() * entries.length);
        }
        let category = entries[randomIndex][0];
        let news = await getNewsByCategory(category);
        newsByCategory.push({ category: category, news: news });
    }    

    return {
        news: data.articles,
        actualArticleId: 0,
        articlesOnPage: [],
        newsByCategory: newsByCategory
    };
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
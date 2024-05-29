/** @type {import('./$types').PageServerLoad} */
import { API_KEY } from '$env/static/private';
import categories from '../lib/categories.json';
// import categories from './data.json' assert { type: 'json' };
import { get } from 'svelte/store';

export async function load({ fetch, cookies }) {
    const data = await getNews();
    // const categories = await getCategories();
    // console.log(categories);

    // cookies.set('news', JSON.stringify(data), {
    //     maxAge: 60 * 60 * 24,
    //     path: '/',
    // });

    return data;
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

// async function getCategories() {
//     const response = await fetch(self.url('./static/categories.json'));
//     const data = await response.json();
//     if (!response.ok) {
//         throw new Error(data.message || 'Failed to fetch data');
//     }
//     return data;
// }
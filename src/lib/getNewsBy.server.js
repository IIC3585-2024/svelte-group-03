import { API_KEY } from '$env/static/private';

export async function getNewsBySearch(lang, search) {
    const url = "https://newsapi.org/v2/top-headlines?language=" + lang + "&q=" + search + "&apiKey=" + API_KEY
    const response = await fetch(url);
    const data = await response.json();;
    if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch data');
    }

    return data;
}

export async function getNewsByLatest(lang) {
    const url = "https://newsapi.org/v2/top-headlines?language=" + lang + "&sortBy=publishedAt" + "&apiKey=" + API_KEY
    const response = await fetch(url);
    const data = await response.json();;
    if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch data');
    }

    return data;
}

export async function getNews(lang) {
    const url = "https://newsapi.org/v2/top-headlines?language=" + lang + "&apiKey=" + API_KEY
    const response = await fetch(url);
    const data = await response.json();;
    if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch data');
    }

    return data;
}

export async function getNewsByCategory(lang, category) {
    const url = "https://newsapi.org/v2/top-headlines?language=" + lang + "&category=" + category + "&apiKey=" + API_KEY
    const response = await fetch(url);
    const data = await response.json();;
    if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch data');
    }

    return data;
}
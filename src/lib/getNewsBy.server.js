import { API_KEY } from '$env/static/private';

export async function getNewsBySearch(search) {
    const url = "https://newsapi.org/v2/top-headlines?language=en&q=" + search + "&apiKey=" + API_KEY
    const response = await fetch(url);
    const data = await response.json();;
    if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch data');
    }

    return data;
}

export async function getNewsByLatest() {
    const url = "https://newsapi.org/v2/top-headlines?language=en&sortBy=publishedAt" + "&apiKey=" + API_KEY
    const response = await fetch(url);
    const data = await response.json();;
    if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch data');
    }

    return data;
}

export async function getNews() {
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
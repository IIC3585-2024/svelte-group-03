import { API_KEY } from '$env/static/private';

export async function load({ fetch }) {
    const url = "https://newsapi.org/v2/everything?q=apple&from=2024-05-20&to=2024-05-20&sortBy=popularity&apiKey=" + API_KEY
    const response = await fetch(url);
    const data = await response.json();;
    if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch data');
    }

    return data;
}
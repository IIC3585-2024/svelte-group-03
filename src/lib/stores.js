import {writable} from 'svelte/store';
export const newsData = writable({});
export const lang = writable("en");
export const category = writable("all");
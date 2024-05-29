import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { svelteSVG } from "rollup-plugin-svelte-svg";

export default defineConfig({
	plugins: [
		sveltekit(),
		svelteSVG({
			svgo: {},
			enforce: 'pre',
		})
	]
});

<script>
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	import './styles.css';

	let currentLanguage = 'en';

	function handleLanguageChanged(event) {
    	currentLanguage = event.detail;
		console.log(currentLanguage);
  	}
</script>

<div class="app">
	<Header bind:selectedLanguage={currentLanguage} on:languageChanged={handleLanguageChanged} />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

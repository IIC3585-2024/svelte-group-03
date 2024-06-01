<script>
  /** @type {import('./$types').PageData} */
	export let data;
  import { Content } from 'carbon-components-svelte';
  import HomeTitularlNews from '../components/HomeTitularlNews.svelte';
  import CategoryNewsSection from '../components/CategoryNewsSection.svelte';
</script>
  
  <main>
  <HomeTitularlNews data={data} />
  <Content>
		<ul>
			{#each data.news as article}
				{#if article.title != '[Removed]'}
					<li>
						<a href={article.url}>{article.title}</a>
						{#if article.urlToImage != null && !data.articlesOnPage.includes(article.title)}
							<img src={article.urlToImage} alt={article.title} />
						{/if}
						<p>{article.description}</p>
            {#if article.author != null}
              <p>By {article.author}</p>
            {:else}
              <p>By anonymous</p>
            {/if}
					</li>
				{/if}
			{/each}
		</ul>
  <!-- <CategoryNewsSection data={data} /> -->
  </Content>

  </main>
  
  <style>
	h1 {
		padding: 1.5em;
	}

	li {
    background-color: #f0f0f0;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 10px;
    margin: 10px 0;
    
    font-family: 'Arial', sans-serif;
    font-size: 18px;
    list-style-type: none;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

li:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

li a {
    color: black;
    text-decoration: none;
    font-weight: bold;
}

a:hover {
    text-decoration: none;
    color: #e35807;
}

li img {
    max-width: 100%;
    height: auto;
    display: block;
}
  </style>
  
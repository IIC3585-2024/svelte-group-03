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
    <ul class="news-grid">
      {#each data.news as article}
        {#if article.title != '[Removed]'}
          <li class="news-item">
            <a href={article.url} class="news-link">
              <div class="news-content">
                <h2 class="news-title">{article.title}</h2>
                {#if article.urlToImage != null && !data.articlesOnPage.includes(article.title)}
                  <img src={article.urlToImage} alt={article.title} />
                {/if}
                <p class="news-description">{article.description}</p>
                {#if article.author != null}
                  <p class="news-author">By {article.author}</p>
                {:else}
                  <p class="news-author">By anonymous</p>
                {/if}
              </div>
            </a>
          </li>
        {/if}
      {/each}
    </ul>
    <CategoryNewsSection data={data} />
  </Content>
</main>
  
<style>
  h1 {
    padding: 1.5em;
  }

  .news-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  .news-item {
    background-color: #f0f0f0;
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .news-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  .news-item:hover h2 {
    color: #e35807;
  }

  .news-link {
    display: block;
    text-decoration: none;
    color: inherit;
  }

  .news-content {
    padding: 20px;
    box-sizing: border-box;
  }

  .news-title {
    font-size: 1.25rem;
    margin-bottom: 10px;
    font-weight: bold;
  }

  .news-description {
    font-size: 1rem;
    color: #666;
  }

  .news-author {
    font-size: 0.875rem;
    color: #999;
  }

  .news-item img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  

</style>

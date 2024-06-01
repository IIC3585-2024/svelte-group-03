<script>
    import NoResults from './NoResults.svelte'
    import LatestNews from './LatestNews.svelte';
    import { onMount } from 'svelte';
    export let data;
    let haveNews = data.totalResults > 0;

    onMount(() => {
        haveNews = data.totalResults > 0;
    });
</script>


<div class="container">
    <div class="left">
      <h1>{data.category}</h1>
    </div>
    <div class="right">
      <h2>{data.description}</h2>
    </div>
</div>
<div class="news-container">
  {#if haveNews}
      <br><br>
      <div class="news-grid">
              {#each data.news as news}
              <div class="news-item">
                  <img src={news.urlToImage} alt={news.title} />
                  <div class="news-content">
                      <div class="news-title"><a href={news.url}>{news.title}</a></div>
                      <div class="news-description">{news.description}</div>
                      {#if news.author != null}
                          <div>By {news.author}</div>
                      {:else}
                          <div>By anonymous</div>
                      {/if}
                  </div>
              </div>
              {/each}
      </div>
  {:else}
      <NoResults />
  {/if}
</div>
<LatestNews data={data.latestNews}/>
  
<style>
    .container {
    display: flex;
    }

    .news-container {
      padding-bottom: 15%;
    }

    .left, .right {
    flex: 1;
    padding: 20px;
    box-sizing: border-box;
    }

  .news-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  .news-item {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .news-item img {
    width: 100%;
    height: auto;
  }

  .news-content {
    padding: 15px;
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
  a {
    color: black;
    text-decoration: none;
    font-weight: bold;
}

    a:hover {
        text-decoration: none;
        color: #e35807;
    }

</style>
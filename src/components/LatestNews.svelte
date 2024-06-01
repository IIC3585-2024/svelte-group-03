<script>
    export let data;
</script>

<div class="latest-news">
  <h1>Latest</h1>
  <div class="news-grid">
      {#each data as news}
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
</div>

<style>
  .latest-news {
    align-items: left;
    padding: auto;
    padding-bottom: 5%;
    background-color: #abcdd2;
    top: 0;
    left: 0;
    width: 100%; 
    height: 100%; 
    background-color: #f2f2f2; 
    z-index: -1; 
  }

  .news-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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
<script>
    export let data;
    let entries = Object.entries(data.newsByCategory);
    let mainNews = [];
    let secondaryNews = [];

    // Prepare main and secondary news for each category
    entries.forEach(([key, value]) => {
        let main = value.news.articles[0];
        let secondary = value.news.articles.slice(1, 5); // Get the next 4 articles for secondary news
        mainNews.push({ category: value.category, article: main });
        secondaryNews.push({ category: value.category, articles: secondary });
    });
</script>

{#each mainNews as main, index}
    <h1>{main.category}</h1>
    <div class="container">
        <div class="main-news">
            <img src={main.article.urlToImage} alt="{main.article.title}" />
            <a href={main.article.url}><h2>{main.article.title}</h2></a>
            <p>{main.article.description}</p>
            {#if main.article.author}
                <p>By {main.article.author}</p>
            {:else}
                <p>By anonymous</p>
            {/if}
        </div>
        <div class="secondary-news">
            {#each secondaryNews[index].articles as article}
                <div class="news-item">
                    <img src={article.urlToImage} alt="{article.title}" />
                    <a href={article.url}><h2>{article.title}</h2></a>
                    {#if article.author}
                        <p>By {article.author}</p>
                    {:else}
                        <p>By anonymous</p>
                    {/if}
                </div>
            {/each}
        </div>
    </div>
{/each}

<style>
    .container {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }

    .main-news {
        flex: 1;
        margin-right: 20px;
    }

    .main-news img {
        width: 100%;
    }

    .secondary-news {
        flex: 1;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }

    .news-item img {
        width: 100%;
        height: auto;
    }

    a {
        color: black;
        text-decoration: none;
    }

    a:hover {
        color: #e35807;
    }

    h1 {
        padding: 0.5em;
        padding: 10%;
        text-align: left;
    }

</style>
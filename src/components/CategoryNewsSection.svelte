<script>
    export let data;
    let entries = Object.entries(data.newsByCategory);
    data.actualArticleId = 0;
    let actualNew;
</script>

{#each entries as [key, value]}
    <h1>{value.category}</h1>
    <div class="container">
        <div class="main-news">
            {actualNew = value.news.articles[0]}
            <img src={actualNew.urlToImage} alt="{actualNew.title}" />
            <a href={actualNew.url}><h2>{actualNew.title}</h2></a>
            <p>{actualNew.description}</p>
            {#if actualNew.author}
                <p>By {actualNew.author}</p>
            {:else}
                <p>By anonymous</p>
            {/if}
        </div>
        <div class="secondary-news">
            {#each {length: 4} as _, i}
                <div class="news-item">
                    {data.actualArticleId += 1}
                    {actualNew = value.news.articles[data.actualArticleId]}
                    <img src={actualNew.urlToImage} alt="{actualNew.title}" />
                    <a href={actualNew.url}><h2>{actualNew.title}</h2></a>
                    {#if actualNew.author}
                        <p>By {actualNew.author}</p>
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
        padding-top: 15%;
        text-align: left;
    }

</style>
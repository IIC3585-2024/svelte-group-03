<script>
    export let data;
    let entries = Object.entries(data.newsByCategory);
    data.actualArticleId = 0;
    let actualNew;

    function nextNew(value) {
        data.actualArticleId += 1;
        actualNew = value.news.articles[data.actualArticleId];
        while (actualNew.urlToImage == null) {
            data.actualArticleId += 1;
            actualNew = value.news.articles[data.actualArticleId];
        }
        console.log(actualNew.title);
    }
</script>

{#each entries as [key, value]}
    <h1>{value.category}</h1>
    <div class="container">
        <div class="main-image">
            {actualNew = value.news.articles[0]}
            <img src={actualNew.urlToImage} alt="{actualNew.title}" />
        </div>
        <div class="news-grid">
            {#each {length: 4} as _ }
                {nextNew(value)}
                <div class="news-item">
                    <img src={actualNew.urlToImage} alt="{actualNew.title}" />
                </div>
            {/each}
        </div>
    </div>
{/each}

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .main-image {
        margin-bottom: 20px;
    }

    .news-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 20px;
    }

    .news-item {
        border-radius: 10px;
        overflow: hidden;
    }

    .news-item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>
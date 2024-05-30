<script>
    export let data;
    let article = data.news[data.actualArticleId]
    while (article.urlToImage == null) {
        data.actualArticleId += 1
        article = data.news[++data.actualArticleId]
    }
</script>

<div class="main-container">
    <div class="central-div">
        <img src={article.urlToImage} alt={article.title} />
        <a href={article.url}><h1>{article.title}</h1></a>
        <p>By {article.author}</p>
        {data.articlesOnPage.push(article.title)}
    </div>
    <div class="side-divs-container">
        <h1>Latest News</h1>
        {#each {length: 3} as _ }
            {data.actualArticleId += 1}
            {article = data.news[data.actualArticleId]}
            <div class="side-div">
                <a href={article.url}><h2>{article.title}</h2></a>
                <p>By {article.author}</p>
                {data.articlesOnPage.push(article.title)}
            </div>
        {/each}
    </div>
</div>

<style>
img {
    max-width: 100%;
    height: auto;
    display: block;
}

.main-container {
    margin: 0;
    overflow-x: hidden;
    display: flex;
    width:85vw; 
    box-sizing: border-box;
}

.central-div {
    flex: 3; 
    background-color: #f0f0f0;
    padding: 20px;
    box-sizing: border-box;
    min-height: 300px;
    border: 2px solid #ccc;
    border-radius: 8px;
    max-width: 80vw; 
    overflow: hidden; 
}

.side-divs-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    box-sizing: border-box;
    max-width: 20vw; 
}

.side-div {
    background-color: #e0e0e0;
    padding: 10px;
    box-sizing: border-box;
    border: 2px solid #bbb;
    border-radius: 8px;
    min-height: 50px;
    flex-grow: 1;
    overflow: hidden;
}
</style>
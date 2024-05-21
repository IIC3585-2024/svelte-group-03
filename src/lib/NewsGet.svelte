<!-- <script>
    const url = "https://newsapi.org/v2/everything?q=apple&from=2024-05-20&to=2024-05-20&sortBy=popularity&apiKey=1a7340f2bb334be8914e2f656c2f9293"
    const getNews = async () => {
        const response = await fetch(url)
        const data = await response.json()
        return data
    }
</script>
<div>
    <button on:click={getNews}>Get News</button>
    <h1>News</h1>
    <ul>
        {#each data.articles as article}
        <li>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.url}>Read More</a>
        </li>
        {/each}
    </ul>
</div> -->
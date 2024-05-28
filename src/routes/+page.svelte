<script>
	export let data;
</script>
  
  <main>
	<h1>OutdoorLife</h1>  
	<div class="card">
	  <p>
		<ul>
			{#each data.articles as article}
				{#if article.title != '[Removed]'}
					<li>
						<a href={article.url}>{article.title}</a>
						{#if article.urlToImage != null}
							<img src={article.urlToImage} alt={article.title} />
						{/if}
						<p>{article.description}</p>
					</li>
				{/if}
			{/each}
		</ul>
	</div>

  </main>
  
  <style>
	h1 {
		padding: 1.5em;
	}

	li {
    background: linear-gradient(to right, #ff7e5f, #feb47b);
    border-radius: 10px;
    margin: 10px 0;
    padding: 15px 20px;
    color: white;
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
    color: white;
    text-decoration: none;
    font-weight: bold;
}

li a:hover {
    text-decoration: underline;
}

li img {
    max-width: 100%;
    height: auto;
    display: block;
}
  </style>
  
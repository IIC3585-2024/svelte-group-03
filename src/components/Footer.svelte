<script>
    import categories from '../lib/categories.json';
</script>

<footer class="footer">
    <h1>OutdoorLife</h1>
    <div class="categories">
    {#each Object.entries(categories) as [key, category]}
        <div class="category-column">
            <h2>{category.name}</h2>
            <ul>
                {#each category.subcategories as subcategory}
                    <li>{subcategory}</li>
                {/each}
            </ul>
        </div>
    {/each}
    </div>
</footer>

<style>
    .footer {
        background-color: black;
        color: white;
        padding: 20px;
        text-align: center;
    }
    
    .categories {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: hidden;
        padding: 20px;
        border-top: 2px solid #ddd;
    }

    .category-column {
        flex: 1 1 auto;
        margin: 10px;
        min-width: 150px;
        flex-shrink: 1;
    }

    .category-column h2 {
        font-size: 1.2em;
        margin-bottom: 10px;
        color: white;
        text-align: center;
    }

    .category-column ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    .category-column ul li {
        margin-bottom: 5px;
        color: white;
        padding: 5px;
        border: 1px solid #ddd;
        border-radius: 4px;
        transition: background-color 0.3s ease;
    }

    .category-column ul li:hover {
        background-color: #f0f0f0;
    }

    h1 {
        color: white;
    }
</style>
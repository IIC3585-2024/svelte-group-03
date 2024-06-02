<script>
    import Menu from '../components/Menu.svelte';
    import MenuItem from '../components/MenuItem.svelte';
    import categories from '../lib/categories.json';
    import currentLang from '../lib/stores.js';
    import { goto } from '$app/navigation'

    let entries = Object.entries(categories);

    function handleCategoryClick(category) {
        goto(`/${currentLang}/category/${category}`);
    }

</script>

<div class="toolbar">
    <ul class="menu-list">
        {#each entries as [key, value]}
            <li class="menu-item">
                <Menu>
                    <span slot="toggle">{value.name}</span>
                    {#each value.subcategories as category}
                        <MenuItem on:click={() => handleCategoryClick(category)}>{category}</MenuItem>
                    {/each}
                </Menu>
            </li>
        {/each}
    </ul>
</div>

<style>
    .toolbar {
    background-color: #ffffff;
    padding: 10px 0;
    display: flex;
    justify-content: center;
    width: 100%;
}

    .menu-list {
        list-style: none;
        display: flex;
        gap: 20px;
        padding: 0;
        margin: 0;
    }


    .menu-item {
        position: relative;
    }

    .menu-item > Menu ul li {
        margin: 0;
    }

    .menu-item > Menu ul li {
        color: white;
        text-decoration: none;
        padding: 5px 10px;
        display: block;
        transition: background-color 0.3s ease;
    }

    .menu-item > Menu ul li:hover {
        background-color: #555;
    }
</style>
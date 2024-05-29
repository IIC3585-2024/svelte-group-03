<script>
    import Menu from '../components/Menu.svelte';
    import MenuItem from '../components/MenuItem.svelte';
    import categories from '../lib/categories.json';

    let entries = Object.entries(categories);
</script>

<div class="toolbar">
    <ul class="menu-list">
        {#each entries as [key, value]}
            <li class="menu-item">
                <Menu>
                    <span slot="toggle">{value.name}</span>
                    {#each value.subcategories as category}
                        <MenuItem>{category}</MenuItem>
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

    .menu-item > Menu {
        color: white;
        cursor: pointer;
        text-align: center;
        padding: 10px 15px;
        border-radius: 5px;
        background-color: #444;
        transition: background-color 0.3s ease;
    }

    .menu-item > Menu:hover {
        background-color: #555;
    }

    .menu-item > Menu > .slot-toggle::after {
        content: '\25BC'; /* Unicode for down arrow */
        margin-left: 5px;
    }

    .menu-item > Menu ul {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        background-color: #444;
        padding: 10px;
        border-radius: 5px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        z-index: 10;
    }

    .menu-item > Menu:hover ul {
        display: block;
    }

    .menu-item > Menu ul li {
        margin: 0;
    }

    .menu-item > Menu ul li a {
        color: white;
        text-decoration: none;
        padding: 5px 10px;
        display: block;
        transition: background-color 0.3s ease;
    }

    .menu-item > Menu ul li a:hover {
        background-color: #555;
    }
</style>
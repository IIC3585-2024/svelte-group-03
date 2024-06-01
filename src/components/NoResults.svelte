<script>
    export let message = "We couldn’t find anything else";
</script>

<div class="no-news">
    {message}
    <h3>Try a different keyword or click one of the categories below to auto-search.</h3>
</div>


<style>
    .no-news {
        text-align: center;
        font-size: 1.25rem;
        color: #999;
        align-items: center;
        padding-top: 5%;
        height: 50vh;
        font-size: 2.5rem;
    }
    h3 {
        font-size: 1.25rem;
        color: #999;
        padding-top: 5%;
    }
</style>
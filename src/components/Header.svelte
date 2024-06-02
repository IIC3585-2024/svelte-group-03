<script>
  import { HeaderNav, HeaderNavItem, Search } from "carbon-components-svelte";
  import FacebookLogo from "../lib/images/logo--facebook.svg";
  import InstagramLogo from "../lib/images/logo--instagram.svg";
  import YoutubeLogo from "../lib/images/logo--youtube.svg";
  import CategoriesBar from "./CategoriesBar.svelte";
  import LanguageDropdown from "./LanguageDropdown.svelte";
  import { createEventDispatcher } from 'svelte';
  import currentLang from '../lib/stores.js';
    import { goto } from '$app/navigation'

  let search = "";
  export let selectedLanguage = 'en';
  const dispatch = createEventDispatcher();

  function handleEnter(event) {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }

  function handleSearch() {
    goto(`/${currentLang}/search/${search}`);
  }

  function handleLanguageChange(language) {
    selectedLanguage = language;
    dispatch('languageChange', language);
    location.reload();
  }
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/carbon-components-svelte/css/all.css"
  />
</svelte:head>

<HeaderNav>
  <HeaderNavItem>
    <LanguageDropdown bind:selectedLanguage on:languageChange={handleLanguageChange} />
  </HeaderNavItem>
  <HeaderNavItem>
    <a class="logo" href="https://web.facebook.com/outdoorlife?_rdc=1&_rdr"><FacebookLogo /></a>
    <span>735k</span>
  </HeaderNavItem>
  <HeaderNavItem>
    <a class="logo" href="https://www.instagram.com/outdoor_life/"><InstagramLogo /></a>
    <span>133k</span>
  </HeaderNavItem>
  <HeaderNavItem>
    <a class="logo" href="https://www.youtube.com/Outdoorlife"><YoutubeLogo /></a>
    <span>54.1k</span>
  </HeaderNavItem>
  <HeaderNavItem>
    <Search bind:value={search} placeholder='' on:keydown={handleEnter} />
  </HeaderNavItem>
  <a href="../"><h1>OutdoorLife</h1></a>
</HeaderNav>


<CategoriesBar />

<slot />

<style>
  h1 {
    color: #e35807;
    border-color: #d45207;
  }

  a:hover {
    text-decoration: none;
  }

  .logo {
    margin-right: 5px;
  }
</style>

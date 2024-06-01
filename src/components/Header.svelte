<script>
	import { HeaderNav, HeaderNavItem, Search, Button } from "carbon-components-svelte";
  import FacebookLogo from "../lib/images/logo--facebook.svg";
  import InstagramLogo from "../lib/images/logo--instagram.svg";
  import YoutubeLogo from "../lib/images/logo--youtube.svg";
  import CategoriesBar from "./CategoriesBar.svelte";
  import LanguageDropdown from "./LanguageDropdown.svelte";

  $: search = "";
  let selectedLanguage = 'en';

  function handleSearch(inputValue) {
    window.location.href = `/new/${inputValue}`; 
  }

  function handleLanguageChange(language) {
    selectedLanguage = language;
  }

</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/carbon-components-svelte/css/all.css"
  />
</svelte:head>
  <HeaderNav>
      <HeaderNavItem><p>{search}</p></HeaderNavItem>
      <HeaderNavItem><a href="https://web.facebook.com/outdoorlife?_rdc=1&_rdr"><FacebookLogo /></a>735k</HeaderNavItem>
      <HeaderNavItem><a href="https://www.instagram.com/outdoor_life/"><InstagramLogo /></a>133k</HeaderNavItem>
      <HeaderNavItem><a href="https://www.youtube.com/Outdoorlife"><YoutubeLogo /></a>54.1k</HeaderNavItem>
      <HeaderNavItem><Button kind="secondary" on:click={() => handleSearch(search)}>Search</Button></HeaderNavItem>
      <HeaderNavItem><Search bind:search placeholder=''/></HeaderNavItem>
      <a href="../"><h1>OutdoorLife</h1></a>
      <LanguageDropdown {selectedLanguage} onLanguageChange={handleLanguageChange}/>
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
</style>
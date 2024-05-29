<script>
	import { Header, HeaderNav, HeaderNavItem, Search } from "carbon-components-svelte";
  import FacebookLogo from "../lib/images/logo--facebook.svg";
  import InstagramLogo from "../lib/images/logo--instagram.svg";
  import YoutubeLogo from "../lib/images/logo--youtube.svg";
  import CategoriesBar from "./CategoriesBar.svelte";
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/carbon-components-svelte/css/all.css"
  />
</svelte:head>

<!-- <Header> -->
    <HeaderNav>
        <HeaderNavItem><a href="https://web.facebook.com/outdoorlife?_rdc=1&_rdr"><FacebookLogo /></a>735k</HeaderNavItem>
        <HeaderNavItem><a href="https://www.instagram.com/outdoor_life/"><InstagramLogo /></a>133k</HeaderNavItem>
        <HeaderNavItem><a href="https://www.youtube.com/Outdoorlife"><YoutubeLogo /></a>54.1k</HeaderNavItem>
        <HeaderNavItem><Search /></HeaderNavItem>
    </HeaderNav>
<!-- </Header> -->
<CategoriesBar />

<slot />

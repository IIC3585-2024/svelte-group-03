<script>
	import {
		Header,
		HeaderNav,
		HeaderNavItem,
    Search,
    // LogoInstagram,
    // LogoYoutube,
    // LogoFacebook,
	} from "carbon-components-svelte";

</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/carbon-components-svelte/css/white.css"
  />
</svelte:head>

<Header company="Outdoor Life">
    <HeaderNav>
        <HeaderNavItem><a href="https://web.facebook.com/outdoorlife?_rdc=1&_rdr">f 735k</a></HeaderNavItem>
        <HeaderNavItem><a href="https://www.instagram.com/outdoor_life/">i 133k</a></HeaderNavItem>
        <HeaderNavItem><a href="https://www.youtube.com/Outdoorlife">Y 54.1k</a></HeaderNavItem>
        <HeaderNavItem><Search /></HeaderNavItem>
    </HeaderNav>
</Header>

<slot />
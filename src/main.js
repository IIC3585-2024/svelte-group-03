import './app.css'
import App from './App.svelte'
import Header from './Header.svelte'
import Footer from './Footer.svelte'

const app = new App({
  target: document.getElementById('app'),
})

const header = new Header({
  target: document.getElementById('header'),
})

const footer = new Footer({
  target: document.getElementById('footer'),
})

export default app
export { header, footer }

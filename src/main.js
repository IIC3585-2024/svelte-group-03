import './app.css'
import App from './App.svelte'
import Header from './Header.svelte'

const app = new App({
  target: document.getElementById('app'),
})

const header = new Header({
  target: document.getElementById('header'),
})

export default app
export { header }

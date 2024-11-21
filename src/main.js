import { mount } from 'svelte'
import '@fontsource/berkshire-swash'
import '@fontsource/montserrat'
import '@fontsource/lato'
import './app.css'
import App from './App.svelte'

const app = mount(App, {
  target: document.getElementById('app'),
})

export default app

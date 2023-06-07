/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
// import 'vuetify/styles'
import './main.scss'
import 'remixicon/fonts/remixicon.css';
import '@/style/_reset.css';
import '@/style/font.css';
import '@/style/import-design.scss';

const app = createApp(App)

registerPlugins(app)

app.mount('#app')

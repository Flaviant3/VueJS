import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(router)

// Create a route for the home page
router.addRoute({
  path: '/',
  component: () => import('./views/Home.vue')
})

app.mount('#app')

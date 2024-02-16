import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

// Importez vos composants de vue
import Home from './views/Home.vue'
import About from './views/About.vue'
import Pays from './views/Pays.vue'

// Créez une instance de routeur
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/pays', component: Pays }
  ]
})

const app = createApp(App)

// Utilisez le routeur dans votre application
app.use(router)

app.mount('#app')

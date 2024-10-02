import { createApp } from 'vue'
// import './style.css'
// import './assets/libs/sanitize.css'
// import './assets/libs/fonts.css'
// import './assets/libs/layout.css'
// import './assets/libs/body-copy.css'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');

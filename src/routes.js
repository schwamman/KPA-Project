import Home from 'src/components/home/home.vue';
import IT from 'src/components/it/page.vue';
import Help from 'src/components/help/page.vue';

export default [
  {
    name: 'home',
    path: '/',
    component: Home,
  },
  {
    name: 'it',
    path: '/it',
    component: IT,
  },
  {
    name: 'help',
    path: '/help',
    component: Help,
  },
  {
    name: 'help-article',
    path: '/help/:pathMatch(.*)*',
    component: Help,
  },
  {
    name: 'NotFound',
    path: '/:pathMatch(.*)*',
    redirect: '/',
  }
];

import Home from 'src/components/home/home.vue';

export default [
  {
    name: 'home',
    path: '/',
    component: Home,
  },
  {
    name: 'NotFound',
    path: '/:pathMatch(.*)*',
    redirect: '/',
  }
];

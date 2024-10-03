import Home from 'src/components/home/home.vue';
import Rewards from 'src/components/rewards/rewards.vue';

export default [
  {
    name: 'home',
    path: '/',
    component: Home,
  },
  {
    name: 'rewards',
    path: '/rewards',
    component: Rewards,
  },
  {
    name: 'NotFound',
    path: '/:pathMatch(.*)*',
    redirect: '/',
  }
];

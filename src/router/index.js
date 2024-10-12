import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import UserDetails from '../components/UserDetails.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/user/:id',
    name: 'UserDetails',
    component: UserDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

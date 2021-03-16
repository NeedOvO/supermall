// import Vue from 'vue';
import {createRouter, createWebHistory} from 'vue-router'

// Vue.use(VueRouter);

const createHistory = createWebHistory();

const Home = () => import('views/home/Home.vue');
const Cart = () => import('views/cart/Cart');
const Category = () => import('views/category/Category');
const Profile = () => import('views/profile/Profile');

const routes = [
  {
    path: '',
    component: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path :'/cart',
    component: Cart
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/profile',
    component: Profile
  }
];

const router = createRouter({
  routes,
  history: createHistory
});

export default router;

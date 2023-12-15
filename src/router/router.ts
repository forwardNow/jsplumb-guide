import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import UI from '../views/ui/UI.vue';

Vue.use(VueRouter);

export const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/home',
    meta: { display: false },
  },
  {
    path: '/home',
    component: () => import('../views/home/Home.vue'),
    meta: { display: false },
  },
  {
    path: '/ui',
    component: UI,
    meta: { title: 'UI设计', description: '节点样式设计' },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
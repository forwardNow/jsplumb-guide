import { createRouter, createWebHistory } from 'vue-router';

export const routes = [
  {
    path: '/',
    redirect: '/home',
    meta: { display: false, title: '', description: '' },
  },
  {
    path: '/home',
    component: () => import('../views/home/Home.vue'),
    meta: { display: false, title: '首页', description: '卡片列表' },
  },
  {
    path: '/ui',
    component: () => import('../views/ui/UI.vue'),
    meta: { title: 'UI设计', description: '界面样式，包括舞台样式、节点样式' },
  },
  {
    path: '/basic/register',
    component: () => import('../views/basic/Register.vue'),
    meta: { title: '注册元素', description: '将元素纳入 jsPlumb 管理' },
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

import { createRouter, createWebHistory } from 'vue-router';
const routes = [
  {
    path: '/',
    component: () => import('@/views/order/LayoutPage.vue'),
  },
  {
    path: '/login',
    component: () => import('@/views/admin/LayoutPage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

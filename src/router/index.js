import { createRouter, createWebHistory } from 'vue-router';
const routes = [
  {
    path: '/',
    alias: '/order',
    redirect: '/order/main',
    component: () => import('@/order/LayoutPage.vue'),
    children: [
      {
        path: 'main',
        name: 'main',
        component: () => import('@/order/views/main/IndexPage.vue'),
      },
      {
        path: 'list',
        name: 'list',
        component: () => import('@/order/views/list/IndexPage.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('@/auth/LoginPage.vue'),
  },
  {
    path: '/admin',
    redirect: '/admin/sales',
    component: () => import('@/admin/LayoutPage.vue'),
    children: [
      {
        path: 'sales',
        name: 'sales',
        component: () => import('@/admin/views/sales/IndexPage.vue'),
      },
      {
        path: 'menus',
        name: 'menus',
        component: () => import('@/admin/views/menus/IndexPage.vue'),
      },
      {
        path: 'users',
        name: 'users',
        component: () => import('@/admin/views/users/IndexPage.vue'),
      },
      {
        path: 'orders',
        name: 'orders',
        component: () => import('@/admin/views/orders/IndexPage.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

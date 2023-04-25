import { createRouter, createWebHistory } from 'vue-router';
const routes = [
  {
    path: '/',
    component: () => import('@/views/order/LayoutPage.vue'),
  },
  {
    path: '/login',
    component: () => import('@/views/auth/LoginPage.vue'),
  },
  {
    path: '/admin',
    redirect: '/admin/sales',
    component: () => import('@/views/admin/LayoutPage.vue'),
    children: [
      {
        path: 'sales',
        name: 'sales',
        component: () => import('@/views/admin/sales/IndexPage.vue'),
      },
      {
        path: 'menus',
        name: 'menus',
        component: () => import('@/views/admin/menus/IndexPage.vue'),
      },
      {
        path: 'users',
        name: 'users',
        component: () => import('@/views/admin/users/IndexPage.vue'),
      },
      {
        path: 'orders',
        name: 'orders',
        component: () => import('@/views/admin/orders/IndexPage.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

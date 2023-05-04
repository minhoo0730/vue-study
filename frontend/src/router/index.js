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
        name: '메인',
        component: () => import('@/order/views/main/IndexPage.vue'),
      },
      {
        path: 'list',
        name: '주문하기',
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
        name: '매출관리',
        component: () => import('@/admin/views/sales/IndexPage.vue'),
      },
      {
        path: 'menus',
        name: '메뉴관리',
        component: () => import('@/admin/views/menus/IndexPage.vue'),
      },
      {
        path: 'users',
        name: '직원관리',
        component: () => import('@/admin/views/users/IndexPage.vue'),
      },
      {
        path: 'orders',
        name: '주문관리',
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

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Default",
    component: () => import("../components/customer/Home.vue")
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../components/customer/Home.vue")
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../components/customer/cart/CartDetail.vue'),
  },
  {
    path: "/admin", name: "Admin", component: () => import("../components/admin/Admin.vue"),
    children: [
      {
        path: 'products',
        name: 'AdminProducts',
        component: () => import('../components/admin/products/Products.vue'),
      },
      {
        path: 'orders',
        name: 'orders',
        component: () => import('../components/admin/orders/Orders.vue'),
      },
      {
        path: 'usersmanage',
        name: 'usersmanage',
        component: () => import('../components/admin/users/UsersManage.vue'),
      },
      {
        path: 'home',
        name: 'home',
        component: () => import('../components/admin/home/AdminHome.vue'),
      },
      {
        path: '',
        name: 'default',
        component: () => import('../components/admin/home/AdminHome.vue'),
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('../components/admin/login/EmpLogin.vue'),
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
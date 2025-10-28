import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/customer/Home.vue";
import Products from "@/components/admin/products/Products.vue";
import Orders from "@/components/admin/orders/Orders.vue";
import UsersManage from "@/components/admin/users/UsersManage.vue";
import Admin from "@/components/admin/Admin.vue";
import AdminHome from "@/components/admin/home/AdminHome.vue";
import EmpLogin from "@/components/admin/login/EmpLogin.vue";

const routes = [
  { path: "/", name: "Default", component: Home },
  { path: "/home", name: "Home", component: Home },
  {
    path: "/admin", name: "Admin", component: Admin,
    children: [
      {
        path: 'products',
        name: 'AdminProducts',
        component: Products,
      },
      {
        path: 'orders',
        name: 'orders',
        component: Orders,
      },
      {
        path: 'usersmanage',
        name: 'usersmanage',
        component: UsersManage,
      },      
      {
        path: 'home',
        name: 'home',
        component: AdminHome,
      },
      {
        path: '',
        name: 'default',
        component: EmpLogin,
      },
      {
        path: 'login',
        name: 'login',
        component: EmpLogin,
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

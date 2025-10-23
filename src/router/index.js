import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/customer/Home.vue";
import Admin from "@/components/admin/Admin.vue";

const routes = [
  { path: "/", name: "Default", component: Home },
  { path: "/home", name: "Home", component: Home },
  { path: "/admin", name: "Admin", component: Admin },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

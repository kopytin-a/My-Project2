import UserPage from "@/pages/UserPage"
import UserPageWithStore from '@/pages/UserPageWithStore'
import UserPageCompositionApi from '@/pages/UserPageCompositionApi'
import Main from "@/pages/Main"
import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: "/Vue3",
    component: UserPage
  },
  {
    path: "/Vuex",
    component: UserPageWithStore
  },
  {
    path: "/CompositionApi",
    component: UserPageCompositionApi
  },
  {
    path: "/",
    component: Main
  }
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
});

export default router;

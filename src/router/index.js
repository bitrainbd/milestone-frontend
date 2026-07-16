import { createRouter, createWebHistory } from "vue-router";
import NProgress from "nprogress";
import { HomePage} from "@/views/general";
// import { UserLogin, UserRegister } from "@/views/auth";
// import { MyProfile, } from "@/views/user";

const routes = [
  {
    path: "/",
    name: "homepage",
    component: HomePage,
    meta: { title: "Home" },
  },

  //user routes
  // {
  //   path: "/login",
  //   name: "user.login",
  //   component: UserLogin,
  //   meta: { title: "Login", guest: true },
  // },
  // {
  //   path: "/auth/register",
  //   name: "user.register",
  //   component: UserRegister,
  //   meta: { title: "Register", guest: true },
  // },

  // {
  //   path: "/my/profile",
  //   name: "user.profile",
  //   component: MyProfile,
  //   meta: { title: "Profile", requiresAuth: true },
  // },


];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0, behavior: "smooth" };
  },
});

const DEFAULT_TITLE = "404";

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || DEFAULT_TITLE;
  NProgress.start();
  next();

});

router.afterEach(() => {
  NProgress.done();
});
export default router;

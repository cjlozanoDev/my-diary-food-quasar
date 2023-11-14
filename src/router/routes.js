const routes = [
  {
    path: "/",
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("signedin")) {
        next({ path: "home" });
      } else {
        next();
      }
    },
    component: () => import("layouts/LoginLayout.vue"),
    children: [
      {
        path: "",
        name: "Login",
        component: () => import("pages/login/LogIn.vue"),
      },
    ],
  },
  {
    path: "/home",
    meta: {
      auth: true,
    },
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("pages/IndexPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;

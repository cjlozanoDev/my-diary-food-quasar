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
    path: "/create-account",
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("signedin")) {
        next({ path: "home" });
      } else {
        next();
      }
    },
    component: () => import("layouts/CreateAccountLayout.vue"),
    children: [
      {
        path: "/create-account",
        name: "CreateAccount",
        component: () => import("pages/create-account/CreateAccount.vue"),
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
        meta: {
          namePage: "Principal",
        },
        component: () => import("pages/home-page/HomePage.vue"),
      },
    ],
  },
  {
    path: "/create-menu",
    meta: {
      auth: true,
    },
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "CreateMenu",
        meta: {
          namePage: "Crear menú",
          nameBackPage: "Home",
        },
        component: () => import("pages/create-menu/CreateMenu.vue"),
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

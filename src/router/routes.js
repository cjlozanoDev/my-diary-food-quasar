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
  {
    path: "/viewMenu",
    meta: {
      auth: true,
    },
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "ViewMenu",
        meta: {
          namePage: "Ver menú",
          nameBackPage: "ListMenus",
        },
        component: () => import("pages/view-menu/ViewMenu.vue"),
      },
    ],
  },
  {
    path: "/list-menus",
    meta: {
      auth: true,
    },
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "ListMenus",
        meta: {
          namePage: "Listado de menús",
          nameBackPage: "Home",
        },
        component: () => import("pages/list-menus/ListMenus.vue"),
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

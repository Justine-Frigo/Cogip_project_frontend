import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: () => import("../layouts/MainLayout.vue"),
      children: [
        {
          path: "",
          name: "Home",
          component: () => import("../views/HomeView.vue"),
        },
        {
          path: "/invoices",
          name: "Invoices",
          component: () => import("../views/InvoicesView.vue"),
        },

        {
          path: "/companies",
          name: "Companies",
          component: () => import("../views/CompaniesView.vue"),
        },

        {
          path: "/contacts",
          name: "Contacts",
          component: () => import("../views/ContactsView.vue"),
        },

        {
          path: "/signup",
          name: "Signup",
          component: () => import("../views/SignupView.vue"),
        },

        {
          path: "/login",
          name: "Login",
          component: () => import("../views/LoginView.vue"),
        },

        {
          path: "/showcompany",
          name: "ShowCompany",
          component: () => import('../views/ShowCompanyView.vue'),
        },
      ],
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
});

export default router;

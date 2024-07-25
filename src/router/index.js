import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from '../stores/authStore';


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
          path: "/company/:id?",
          name: "ShowCompany",
          component: () => import('../views/ShowCompanyView.vue'),
        },

        {
          path: "/contacts",
          name: "Contacts",
          component: () => import("../views/ContactsView.vue"),
        },

        {
          path: "/contact/:id?",
          name: "ShowContact",
          component: () => import('../views/ShowContactView.vue'),
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
      
      ],
    },

    {
      path: "/dashboard",
      name: "Dashboard",
      component: () => import('../layouts/DashboardLayout.vue'),
      beforeEnter: requireAuth,
      children: [
        {
          path: "",
          name: "DashboardHome",
          component: () => import('../views/DashboardView.vue'),

        },

        {

          path: "invoices",
          name: "DashboardInvoices",
          component: () => import('../views/DashboardInvoices.vue'),
        },

        {
          path: "companies",
          name: "DashboardCompanies",
          component: () => import('../views/DashboardCompanies.vue'),
        },

        {
          path: "contacts",
          name: "DashboardContacts",
          component: () => import('../views/DashboardContacts.vue'),
        },

      ],

    },
  ]
});

function requireAuth(_, __, next) {
  const authStore = useAuthStore();
  if (!authStore.token) {
    next({name: 'Login'});
  } else {
    next();
  }
}

export default router;

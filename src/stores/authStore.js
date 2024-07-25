import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: null,
    user: null,
    loading: false,
    error: null,
  }),
  actions: {
    async login(credentials) {
      this.loading = true;
      try {
        const response = await axios.post(
          "http://cogip_project.test/login",
          credentials
        );
        this.token = response.data.access_token;
        this.user = {
          id: response.data.user_id,
          email: response.data.email,
          firstName: response.data.first_name,
          lastName: response.data.last_name
        };
        axios.defaults.headers.common["Authorization"] = `Bearer ${this.token}`;
        console.log(this.token, this.user);
        router.push({ name: "DashboardHome" });
      } catch (error) {
        this.error = "Invalid credentials";
      } finally {
        this.loading = false;
      }
    },
    logout() {
      this.token = null;
      this.user = null;
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem('auth');
      router.push({ name: 'Home' });
    },
    async fetchUser() {
      if (this.token) {
        try {
          const response = await axios.get("/api/user");
          this.user = response.data;
        } catch (error) {
          this.logout();
        }
      }
    },
  },
  persist: {
    key: 'auth',
    storage: localStorage,
  },
});

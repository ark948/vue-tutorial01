// DEFINE ROUTING RULES //

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import CarView from "@/views/CarView.vue";
import ContactView from "@/views/ContactView.vue";
import NotFound from "@/components/NotFound.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: "/", name: "home", component: HomeView },
        { path: "/home", redirect: "/"},
        { path: "/about", name: "about", component: AboutView },
        { path: "/cars/:id", name: "car", component: CarView, children: [
            { path: "contact", component: ContactView } // nested route
        ] },

        // using regex to catch all routes not listed above (404)
        { path: "/:catchall(.*)*", name: "Not Found", component: NotFound }
    ]
});

export default router
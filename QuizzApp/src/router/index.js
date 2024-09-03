import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import QuizesView from "@/views/QuizesView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', name: 'quizes', component: QuizesView },
        { path: '/home', redirect: {name:'quizes'} },
    ]
});


export default router
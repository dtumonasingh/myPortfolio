import { createRouter, createWebHistory } from "vue-router";

import HomePage from '@/pages/HomePage.vue';
import WorkPage from "@/pages/WorkPage.vue";
import BlogPage from "@/pages/BlogPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", redirect: "/home"},
        { path: "/home", component: HomePage },
        { path: "/work", component: WorkPage },
        { path: "/blog", component: BlogPage}

    ]
})

export default router;
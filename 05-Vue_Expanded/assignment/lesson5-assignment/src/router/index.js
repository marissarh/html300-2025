import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/pages/LandingPage.vue'
import ImagesPage from '@/pages/ImagesPage.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: LandingPage
    },
    {
        path: '/images',
        name: 'Images',
        component: ImagesPage
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
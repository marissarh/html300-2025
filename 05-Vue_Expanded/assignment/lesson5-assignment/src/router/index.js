import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/pages/LandingPage.vue'
import ImagesPage from '@/pages/ImagesPage.vue'
import AccordionPage from '@/pages/AccordionPage.vue'


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
    },
    {
        path: '/accordion',
        name: 'Accordion',
        component: AccordionPage
    },


]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
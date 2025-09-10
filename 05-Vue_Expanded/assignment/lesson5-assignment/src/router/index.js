import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/pages/LandingPage.vue'
import ImagesPage from '@/pages/ImagesPage.vue'
import AccordionPage from '@/pages/AccordionPage.vue'
import GridPage from '@/pages/GridPage.vue'


const routes = [
    {
        path: '/landing',
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
    {
        path: '/grid',
        name: 'Grid',
        component: GridPage
    },


]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
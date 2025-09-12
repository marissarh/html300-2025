import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '@/components/LandingPage.vue'
import ImagesPage from '@/components/ImagesPage.vue'
import AccordionPage from '@/components/AccordionPage.vue'
import GridPage from '@/components/GridPage.vue'


Vue.use(VueRouter)
//Use of Vue router to navigate component pages
const routes = [
    {
        path: '/landing', component: LandingPage
    },
    {
        path: '/images', component: ImagesPage
    },
    {
        path: '/accordion', component: AccordionPage
    },
    {
        path: '/grid', component: GridPage
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})
export default router
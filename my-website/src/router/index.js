
import Vue from 'vue'
import VueRouter from 'vue-router'

import LandingPage from '../components/LandingPage.vue'
import ImagesPage from '../components/ImagesPage.vue'
import AccordionPage from '../components/AccordionPage.vue'
import GridPage from '../components/GridPage.vue'



Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: "landing",
        component: LandingPage,
    },
    {
        path: "/images",
        name: "images",
        component: ImagesPage,
    }, 
    {
        path: "/accordion",
        name: "accordion",
        component: AccordionPage,
    },
    {
        path: "/grid",
        name: "grid",
        component: GridPage,
    },

]


export default new VueRouter({
    mode: 'history',
    routes
})


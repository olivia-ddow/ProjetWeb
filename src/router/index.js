import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    { path: '/', component: ()=>import('@/components/EntitiesGallery.vue')},
    { path: '/:filter/:name', name: 'entity', component: ()=>import('@/components/EntitySingle.vue')}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
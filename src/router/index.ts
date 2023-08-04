import { createRouter, createWebHistory } from 'vue-router'
import Landing from '@views/Landing.vue'
// import { useCounterStore } from '@/stores'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Landing',
            component: Landing
        }
    ]
})

// router.beforeEach((to, from, next) => {
//     console.log(useCounterStore)
//     next()
// })

export default router
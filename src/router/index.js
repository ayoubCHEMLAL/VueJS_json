import { createRouter, createWebHashHistory } from 'vue-router'
import About from '../views/About.vue'
import Todos from '../components/Todos.vue'


const routes = [
  {
    path: '/',
    name: 'Todos',
    component: Todos
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: About
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

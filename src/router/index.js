import Vue from 'vue'
import VueRouter from 'vue-router'
import Firebase from 'firebase'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    alias: ['/home', '/bienvenida'],
    component: Home, // El component llama al componente importado
  },
  {
    path: '/login',
    name: 'Login',
    alias: ['/autenticacion', '/usuario'],
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path: '/calendar',
    name: 'Calendar',
    alias: ['/calendario', '/agenda'],
    component: () => import(/* webpackChunkName: "Calendar" */ '../views/Calendar.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let user = Firebase.auth().currentUser;
  let authRequired = to.matched.some(route => route.meta.requireLogin)
  if(!user && authRequired) {
    next('login') 
  } else {
    next()
  }
})

export default router

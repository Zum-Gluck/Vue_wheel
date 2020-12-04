import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "../views/Home"
import Category from "../views/Category"
import Cart from "../views/Cart"
import User from "../views/User"

Vue.use(VueRouter)

const routes = [
  { path: '/home', component: Home },
  { path: '/category', component: Category },
  { path: '/cart', component: Cart },
  { path: '/user', component: User },
]

const router = new VueRouter({
  routes
})

export default router

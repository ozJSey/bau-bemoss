import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
},
{
  path: '/webapp',
  name: 'WebApp',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import( /* webpackChunkName: "about" */ '../views/WebApp.vue'),
  children: [
    { path: '', component: () => import( /* webpackChunkName: "about" */ '../webapp-comp/webapp-tabs/Home.vue') },
    { path: '/webapp/manage', component: () => import( /* webpackChunkName: "about" */ '../webapp-comp/webapp-tabs/Manage.vue') }
  ]
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
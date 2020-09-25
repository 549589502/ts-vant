import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home/index.vue')
  },
  {
    path: '/menu',
    name: 'menu',
    component: () => import('../views/menu/index.vue')
  },
  {
    path: '/my',
    name: 'my',
    component: () => import('../views/my/index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  //班组报产
  {
    path: '/schedulingReport',
    name: 'schedulingReport',
    component: () => import('../views/menu/schedulingReport.vue')
  },



  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//路由拦截：如果有token才可以进去
router.beforeEach((to, from, next) => {
  //当前去的页面名称：
  let toName: string = to.name as string;
  //没有token，返回登录页：
  if (window.localStorage.getItem("aps_token")) {
    next();
  } else {
    next({
      path: '/login',
    })
  }
})

export default router

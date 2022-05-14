import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    // component: Home
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/LoginPage.vue')
    }
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/RegisterPage.vue')
    }
  },
  {
    path: '/mySelected',
    name: 'mySelected',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/FundSelected.vue')
    }
  },
  {
    path: '/detail',
    name: 'Detail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/FundDetail.vue')
    }
  },
  {
    path: '/searchPage',
    name: 'SearchPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/SearchFund.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (from.name == "LoginPage" && to.name == "RegisterPage") {
    next() // 直接进行跳转，不再执行钩子函数
    return
  }
  // 验证是否有token，如果在非登录页没有token，就跳转到登录页面
  if (to.name !== 'LoginPage' && !sessionStorage.getItem("token")) {
    next({name: 'LoginPage'})
  }else {
    next()
  }
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/views/Layout/Layout.vue'),
    children: [
      {
        path: '/gathergoods',
        name: 'GatherGoods',
        component: () => import('@/views/GatherGoods/GatherGoods.vue'),
        meta: { keepAlive: true, title: '助手商品采集' }
      },
      {
        path: '/goodinfo',
        name: 'GoodInfo',
        component: () => import('@/views/GoodInfo/GoodInfo.vue'),
        meta: { keepAlive: true, title: '助手商品采集' }
      },
      {
        path: '*',
        to: '/'
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router

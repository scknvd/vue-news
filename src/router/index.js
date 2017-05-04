import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Follow from '@/components/Follow'
import Article from '@/components/Article'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    }, {
      path: '/follow',
      name: 'Follow',
      component: Follow
    }, {
      path: '/article/:id',
      name: 'Article',
      component: Article
    }, {
      path: '/',
      redirect: '/home'
    }
  ]
})

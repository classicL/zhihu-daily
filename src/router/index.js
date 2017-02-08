import Vue from 'vue'
import Router from 'vue-router'
import Home from 'view/Home'
import Themes from 'view/Themes'
import About from 'view/About'
import Detail from 'view/Detail'
import ThemeList from 'view/Theme-List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/themes',
      name: 'themes',
      component: Themes
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/theme-list/:id',
      name: 'theme-list',
      component: ThemeList
    }
  ]
})

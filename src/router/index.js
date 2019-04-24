import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/HomePage'
import About from '@/pages/AboutPage'
import Contact from '@/pages/ContactPage'
import PostList from '@/pages/PostListPage'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/posts',
      name: 'Post',
      component: PostList
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ],
  mode: 'history'
})

export default router
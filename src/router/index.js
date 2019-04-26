import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/HomePage'
import About from '@/pages/AboutPage'
import Contact from '@/pages/ContactPage'
import PostList from '@/pages/PostListPage'
import PostDetail from '@/pages/PostDetailPage'
import NotFound from '@/pages/NotFoundPage'
import ErrorPage from '@/pages/ErrorPage'

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
      path: '/posts/:id',
      name: 'PostDetail',
      component: PostDetail
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/error',
      name: 'Error',
      component: ErrorPage
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ],
  mode: 'history'
})

export default router
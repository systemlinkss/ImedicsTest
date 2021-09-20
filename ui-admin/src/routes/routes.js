import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'
// Dashboard pages
const Overview = () => import(/* webpackChunkName: "widgets" */ 'src/components/Dashboard/Views/Dashboard/Overview.vue')
const Widgets = () => import(/* webpackChunkName: "widgets" */ 'src/components/Dashboard/Views/Dashboard/Widgets.vue')

import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import auth from '../auth'

var authrized= auth.checkAuth();


// Components pages
import Category from 'src/components/Category/Category.vue'
import Login from 'src/components/Login/Login.vue'
import CategoryAddUpdate from 'src/components/Category/CategoryAddUpdate.vue'
import CategoryEdit from '../components/Category/CategoryEdit.vue'
import Userlist from '../components/User/UserListing.vue'
import AddUserVue from '../components/User/AddUser.vue'
import EditUser from '../components/User/EditUser.vue'





const routes = [
    {
      path: '/',
      component: Login,
      children: [
        {
          path: 'login',
          name: 'Login',
          component: Login
        }
      ]
    },
    
    {
      path: '/admin',
      name: 'overview',
      component: DashboardLayout,
     
      children: [
        {
          path: 'overview',
          name: 'Overview',
          component: Overview,
          meta: { requiresAuth: authrized },

        }
        
      ]
    },

    {
      path: '/admin',
      name: 'Category',
      component: DashboardLayout,
      children: [
        {
          path: 'category',
          name: 'Category',
          component: Category
        }]
    },
    {
      path: '/admin',
      name: 'CategoryAddUpdate',
      component: DashboardLayout,
      children: [
        {
          path: 'addupdatecategory',
          name: 'CategoryAddUpdate',
          component: CategoryAddUpdate
        }]
  },
  {
    path: '/admin',
    name: 'CategoryEdit',
    component: DashboardLayout,
    children: [
      {
        path: 'categoryedit',
        name: 'CategoryEdit',
        component: CategoryEdit
      }]
  },
  {
    path: '/admin',
    name: 'UserListing',
    component: DashboardLayout,
    children: [
      {
        path: 'userlisting',
        name: 'UserListing',
        component: Userlist
      }]
  },
  {
    path: '/admin',
    name: 'AddUser',
    component: DashboardLayout,
    children: [
      {
        path: 'adduser',
        name: 'AddUser',
        component: AddUserVue
      }]
  },
  {
    path: '/admin',
    name: 'EditUser',
    component: DashboardLayout,
    children: [
      {
        path: 'edituser',
        name: 'editUser',
        component: EditUser
      }]
  },
    { path: '*', component: NotFound }
  ];


//router.beforeEach((to, from, next) => {
//  if (to.matched.some(record => record.meta.requiresAuth)) {
//    if (localStorage.getItem('jwt') == null) {
//      next({
//        path: '/login',
//        params: { nextUrl: to.fullPath }
//      })
//    } else {
//      let user = JSON.parse(localStorage.getItem('user'))
//      if (to.matched.some(record => record.meta.is_admin)) {
//        if (user.is_admin == 1) {
//          next()
//        } else {
//          next({ name: 'userboard' })
//        }
//      } else {
//        next()
//      }
//    }
//  } else if (to.matched.some(record => record.meta.guest)) {
//    if (localStorage.getItem('jwt') == null) {
//      next()
//    } else {
//      next({ name: 'userboard' })
//    }
//  } else {
//    next()
//  }
//})
export default routes;

import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

// Admin Views
import AdminDashboard from "@/views/Admin/AdminDashboard";
import HousesView from "@/views/Admin/HousesView";
import UsersView from "@/views/Admin/UsersView";
import EditHousesView from "@/views/Admin/EditHousesView";
import LoginView from '@/views/Admin/LoginView'
import EditionHouse from '@/views/Admin/EditionHouse'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminDashboard,
    children: [
      {
        path: 'login',
        name: 'login',
        component: LoginView
      },
      {
        path: 'houses',
        name: 'houses',
        component: HousesView
      },
      {
        path: 'users',
        name: 'users',
        component: UsersView
      },
      {
        path: 'houses/add',
        name: 'addHouse',
        component: EditHousesView
      },
      {
        path: 'houses/edit/:id',
        name: 'editHouse',
        component: EditHousesView
      },
      {
        path: 'houses/edit',
        name: 'addEdit',
        component: EditionHouse
      },
      {
        path: 'houses/editing/:id',
        name: 'editingHouse',
        component: EditionHouse
      },
    ]
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

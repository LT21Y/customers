import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const About = ()=>import("@/components/About")
const customers = () => import("@/components/customers") 
const add = () => import("@/components/add") 
const Cdetails =  () => import("@/components/Cdetails")
const edit = () => import("@/components/edit")
export const routes = [
  {
    path: "/", 
    component: customers
  },
  {
    path: "/About", 
    component:About
  },

  {
    path: "/add", 
    component: add
  },
  {
    path: "/customers/:id", 
    component:Cdetails
  },
  {
    path: "/edit/:id", 
    component:edit
  }
]

export default new Router({
  mode:"history",
  routes: routes
})


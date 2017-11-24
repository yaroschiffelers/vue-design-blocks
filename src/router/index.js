import Vue from 'vue'
import Router from 'vue-router'

// Import your Vue components
import Home from '@/components/Home'
import Jsonbind from '@/components/Jsonbind'
import CtaView from '@/components/CtaView'
import ContentView from '@/components/ContentView'
import Databind from '@/components/Databind'


Vue.use(Router)

// Set the paths of your components here
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/jsonbind',
      name: 'Jsonbind',
      component: Jsonbind
    },
    {
      path: '/ctaview',
      name: 'CtaView',
      component: CtaView
    },
    {
      path: '/contentview',
      name: 'ContentView',
      component: ContentView
    },
    {
      path: '/databind',
      name: 'Databind',
      component: Databind
    }
  ]
})
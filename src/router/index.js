import Vue from 'vue'
import Router from 'vue-router'

// Import your Vue components
import Hello from '@/components/Hello'
import Layout1 from '@/components/Layout1'
import CtaView from '@/components/CtaView'

Vue.use(Router)

// Set the paths of your components here
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/layout1',
      name: 'Layout1',
      component: Layout1
    },
    {
      path: '/ctaview',
      name: 'CtaView',
      component: CtaView
    }
  ]
})
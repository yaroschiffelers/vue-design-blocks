// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// Style imports 
// The BootstrapVue module
import BootstrapVue from 'bootstrap-vue'
// The Bootstrap 4 CSS main file
import 'bootstrap/dist/css/bootstrap.css'
// The BootstrapVue CSS main file
import 'bootstrap-vue/dist/bootstrap-vue.css'
// The Froala Design-blocks CSS main file
import 'froala-design-blocks/dist/css/froala_blocks.css'

// Lets Vue use BootstrapVue components global
Vue.use(BootstrapVue)

// Register your Vue components
// Vue.component('headernavys', require('./components/Headernavys'))
// Vue.component('footerys', require('./components/Footerys'))
// Vue.component('cta1', require('./design-block-components/cta/Cta1'))

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

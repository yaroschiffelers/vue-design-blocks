<template>
  <div id="app">
    <headernavys></headernavys>
    <router-view></router-view>
    <!-- <cta1></cta1> -->
    <footerys></footerys>
  </div>
</template>

<script>
import headernavys from './components/Headernavys'
import footerys from './components/Footerys'
// import cta1 from './design-block-components/cta/Cta1'

export default {
  name: 'app',
  components: {
    'Headernavys': headernavys,
    'Footerys': footerys,
    // 'Cta1': cta1,
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.fdb-block {
      border-bottom: solid 1px #EEE;
    }
</style>

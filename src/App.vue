<template>
  <div id="app">
    <headernavys></headernavys>
    <router-view></router-view>
    <footerys></footerys>
  </div>
</template>

<script>
import headernavys from './components/Headernavys'
import footerys from './components/Footerys'

export default {
  name: 'app',
  components: {
    'Headernavys': headernavys,
    'Footerys': footerys,
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

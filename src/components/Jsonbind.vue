<template>
  <div>
    <h1>JSON data binding</h1>
    <h2>{{ config.configdata.name }}</h2>
  </div>
</template>

<script>
import config from '../assets/config/config.json'

export default {
  name: 'jsonbind',
  data: function() {
    return {
      config
    };
  }
}
</script>

<style scoped>
/*  .fdb-block {
    border-bottom: solid 1px #EEE;
  }
  .con-info-block {
      margin-bottom: 5em;
  }
  .fdb-boxYS{
      padding: 1em 0 1em 0 !important;
  }*/
</style>

<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <h2>Home</h2>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Vue Design Blocks'
    }
  }
}
</script>

<style scoped>
.hello {
  margin-bottom: 10em;
}

</style>

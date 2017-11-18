<template>
  <div>
    <b-nav>
      <b-nav-item active>
        <router-link to="/">
          Home
        </router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/layout1">
          Layout 1
        </router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/ctaview">
          Call-to-action
        </router-link>
      </b-nav-item>
      <b-nav-item disabled>
        Layout 3
      </b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: 'headernavys'
}
</script>

<style scoped>
  
</style>
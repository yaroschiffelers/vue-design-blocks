<template>
  <div>
    <b-nav>
      <b-nav-item active>
        <router-link to="/">
          Home
        </router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/jsonbind">
          Json-bind
        </router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/ctaview">
          Call-to-action
        </router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/databind">
          Data-bind
        </router-link>
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
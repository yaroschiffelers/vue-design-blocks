<template>
  <div>
    <h1>Data binding between components</h1>
    <databindchild myname="This is a message from databindchild"></databindchild>
  </div>
</template>

<script>
// PARENT COMPONENT: 
// DATA BINDING TEST 
// Data binding between parent and child components
// Testing: scoped slots in child component, using the props attribute

// import child component
import databindchild from './databindchild'

export default {
  name: 'databind',
  components: {
    'Databindchild': databindchild,
  }
}
</script>

<style scoped>
  
</style>
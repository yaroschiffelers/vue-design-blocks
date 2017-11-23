<template>
  <div>
    <p>{{ myname }}</p>
    <p>{{ myemail }}</p>
  </div>
</template>

<script>
// CHILD COMPONENT:
// DATA BINDING TEST 
// Data binding between parent and child components
// Testing: scoped slots in child component, using the props attribute

export default {
  name: 'databindchild',
  props: ['myname']
}


</script>

<style scoped>
  
</style>
<template>
  <div>
    <h1>Content Components</h1>

    <h2>1</h2>
    <content1></content1>

    <h2>2</h2>
    <content2></content2>
  </div>
</template>

<script>
import content1 from '../design-block-components/contents/content1'
import content2 from '../design-block-components/contents/content2'

export default {
  name: 'contentview',
  components: { 
    'Content1': content1,
    'Content2': content2,
  }
}
</script>

<style scoped>
  .idheader {
    margin-top: 1em;
    /*border: 1px solid black;*/
    /*border-radius: 180px;*/
  }
</style>
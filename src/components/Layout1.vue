<template>
  <div class="layout1">
    <h1>Layout 1</h1>
    <h2>Design-blocks</h2>
    
    <!-- INFO BLOCKS -->
    <section class="fdb-block pb-0">
      <div class="container con-info-block">
        <div class="row text-left">
          <div class="col-12 col-md-8 col-lg-8">
            <div class="fdb-box fdb-touch br-0">
              <h2><strong>Design Blocks</strong></h2>
              <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
              <p class="text-h3 mt-4"><a href="#">Read More</a></p>
            </div>
          </div>
          <div class="col-12 col-md-4 col-lg-4">
            <div class="fdb-box fdb-touch br-0">
              <h2><strong>Design Blocks</strong></h2>
              <p class="text-h3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
            </div>
          </div>
        </div>
      </div>
    </section> <!-- /info blocks -->

  </div> <!-- / layout1 parent tag -->
</template>

<script>
export default {
  name: 'layout1'
}
</script>

<style scoped>
  .fdb-block {
    border-bottom: solid 1px #EEE;
  }
  .con-info-block {
      margin-bottom: 5em;
  }
  .fdb-boxYS{
      padding: 1em 0 1em 0 !important;
  }
</style>

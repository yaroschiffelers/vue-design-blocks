<template>
  <div>
    <h1>Call-to-action</h1>

    <h3 class="idheader">1</h3>
    <cta1></cta1>

    <h3 class="idheader">2</h3>
    <cta2></cta2>

    <h3 class="idheader">3</h3>
    <cta3></cta3>

    <h3 class="idheader">4</h3>
    <cta4></cta4>

    <h3 class="idheader">5</h3>
    <cta5></cta5>

    <h3 class="idheader">6</h3>
    <cta6></cta6>

    <h3 class="idheader">7</h3>
    <cta7></cta7>

    <h3 class="idheader">8</h3>
    <cta8></cta8>

    <h3 class="idheader">9</h3>
    <cta9></cta9>

    <h3 class="idheader">10</h3>
    <cta10></cta10>

    <h3 class="idheader">11</h3>
    <cta11></cta11>

    <h3 class="idheader">12</h3>
    <cta12></cta12>

    <h3 class="idheader">22</h3>
    <cta22></cta22>
  </div>
</template>

<script>
import cta1 from '../design-block-components/cta/Cta1'
import cta2 from '../design-block-components/cta/Cta2'
import cta3 from '../design-block-components/cta/Cta3'
import cta4 from '../design-block-components/cta/Cta4'
import cta5 from '../design-block-components/cta/Cta5'
import cta6 from '../design-block-components/cta/Cta6'
import cta7 from '../design-block-components/cta/Cta7'
import cta8 from '../design-block-components/cta/Cta8'
import cta9 from '../design-block-components/cta/Cta9'
import cta10 from '../design-block-components/cta/Cta10'
import cta11 from '../design-block-components/cta/Cta11'
import cta12 from '../design-block-components/cta/Cta12'
import cta22 from '../design-block-components/cta/Cta22'

export default {
  name: 'ctaview',
  components: { 
    'Cta1': cta1,
    'Cta2': cta2,
    'Cta3': cta3,
    'Cta4': cta4,
    'Cta5': cta5,
    'Cta6': cta6,
    'Cta7': cta7,
    'Cta8': cta8,
    'Cta9': cta9,
    'Cta10': cta10,
    'Cta11': cta11,
    'Cta12': cta12,
    'Cta22': cta22,
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
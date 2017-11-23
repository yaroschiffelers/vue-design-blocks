<template>
  <div>
    <!-- INFO FOOTER -->
    <footer class="fdb-block footer-large bg-dark">
        <div class="container">
          <div class="row align-items-top text-center text-md-left">
            <div class="col-12 col-sm-6 col-md-4">
              <h3><strong>{{ config.configdata.city }}</strong></h3>
              <p>{{ config.configdata.street }}<br>{{ config.configdata.name }}</p>
              <p>{{ config.configdata.phonenumber }}</p>
              <p><a href="#">{{ config.configdata.email }}</a></p>
            </div>

            <div class="col-12 col-sm-6 col-md-4 mt-4 mt-sm-0">
              <h3><strong>{{ config.configdata.city }}</strong></h3>
              <p>{{ config.configdata.street }}<br>{{ config.configdata.name }}</p>
              <p>{{ config.configdata.phonenumber }}</p>
              <p><a href="#">{{ config.configdata.email }}</a></p>
            </div>

            <div class="col-12 col-md-4 mt-5 mt-md-0 text-md-left">
              <h3><strong>About Us</strong></h3>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
          </div>

          <div class="row mt-5">
            <div class="col text-center">
              &copy; 2017. All Rights Reserved
            </div>
          </div>
        </div>
    </footer> <!-- /info footer -->

    <!-- SUB FOOTER -->
    <footer class="fdb-block footer-small">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-12 col-md-6">
              <ul class="nav justify-content-center justify-content-md-start">
                <li class="nav-item">
                  <a class="nav-link active" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Terms</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">About</a>
                </li>
              </ul>
            </div>

            <div class="col-12 col-md-6 mt-4 mt-md-0 text-center text-md-right">
              <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>&nbsp;&nbsp;
              <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>&nbsp;&nbsp;
              <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>&nbsp;&nbsp;
              <a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a>&nbsp;&nbsp;
              <a href="#"><i class="fa fa-google" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>
    </footer> <!-- /sub footer -->
  </div>
</template>

<script>
// Import the json configfile 
// use: {{ config.configdata.ITEM }}
import config from '../assets/config/config.json'

export default {
  name: 'footerys',
  data: function() {
    return {
      config
    };
  }
}
</script>

<style scoped>
  
</style>
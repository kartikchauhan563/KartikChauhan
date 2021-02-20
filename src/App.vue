<template>
  <div>
    <v-bottom-navigation :value="value" color="primary">
      <v-btn>
        <router-link to="/">Home</router-link>
      </v-btn>
      <!--
      <v-btn>
        <router-link to="/about">About</router-link>
      </v-btn> -->

      <v-btn>
        <router-link to="/contact">Contact</router-link>
      </v-btn>
      <v-btn>
        <router-link to="/portfolio">Portfolio</router-link>
      </v-btn>
    </v-bottom-navigation>

    <router-view />
    <!-- <v-footer dark padless>
      <v-card flat tile class="indigo lighten-1 white--text text-center">
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Experienced WordPress Developer and Front End Developer with a
          demonstrated history of working in Information Technology. Skilled in
          Special Purpose Web-Development, FrontEnd Development, Android
          Development,Manual Testing, C,& Java.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} —
          <strong>Designed By Kartik Chauhan</strong>
        </v-card-text>
      </v-card>
    </v-footer> -->
    <footer class="footer">
      <div class="container bottom_border">
        <div class="row">
          <!-- <div class=" col-sm-4 col-md col-sm-4  col-12 col">
            <h5 class="headin5_amrc col_white_amrc pt2">Find us</h5>
            <p class="mb10">
              KARTIK CHAUHAN
            </p>
            <p><i class="fa fa-location-arrow"></i> New Laxmi Nagar <br> Bhramakumari Chowk <br>Gondia-441614(MH)</p>
            <p><i class="fa fa-phone"></i> +91-9168096901</p>
            <p><i class="fa fa fa-envelope"></i> kartikchauhan563@gmail.com</p>
          </div> -->

          <!-- <div class=" col-sm-4 col-md  col-6 col">
            <h5 class="headin5_amrc col_white_amrc pt2">Quick links</h5>
            <ul class="footer_ul_amrc">
              <li><a href="http://webenlance.com">Image Rectoucing</a></li>
              <li><a href="http://webenlance.com">Clipping Path</a></li>
              <li><a href="http://webenlance.com">Hollow Man Montage</a></li>
              <li><a href="http://webenlance.com">Ebay & Amazon</a></li>
              <li><a href="http://webenlance.com">Hair Masking/Clipping</a></li>
              <li><a href="http://webenlance.com">Image Cropping</a></li>
            </ul>
          </div> -->

          <!-- <div class=" col-sm-4 col-md  col-6 col">
            <h5 class="headin5_amrc col_white_amrc pt2">Quick links</h5>
            <ul class="footer_ul_amrc">
              <li><a href="http://webenlance.com">Remove Background</a></li>
              <li>
                <a href="http://webenlance.com">Shadows & Mirror Reflection</a>
              </li>
              <li><a href="http://webenlance.com">Logo Design</a></li>
              <li><a href="http://webenlance.com">Vectorization</a></li>
              <li><a href="http://webenlance.com">Hair Masking/Clipping</a></li>
              <li><a href="http://webenlance.com">Image Cropping</a></li>
            </ul>
          </div> -->

          <!-- <div class=" col-sm-4 col-md  col-12 col">
            <h5 class="headin5_amrc col_white_amrc pt2">Follow us</h5>
            <ul class="footer_ul2_amrc">
              <li>
                <a href="#"
                  ><i class="fab fa-twitter fleft padding-right"></i>
                </a>
                <p>
                  Lorem Ipsum is simply dummy text of the printing...<a href="#"
                    >https://www.lipsum.com/</a
                  >
                </p>
              </li>
              <li>
                <a href="#"
                  ><i class="fab fa-twitter fleft padding-right"></i>
                </a>
                <p>
                  Lorem Ipsum is simply dummy text of the printing...<a href="#"
                    >https://www.lipsum.com/</a
                  >
                </p>
              </li>
              <li>
                <a href="#"
                  ><i class="fab fa-twitter fleft padding-right"></i>
                </a>
                <p>
                  Lorem Ipsum is simply dummy text of the printing...<a href="#"
                    >https://www.lipsum.com/</a
                  >
                </p>
              </li>
            </ul>
          </div> -->
        </div>
      </div>

      <div class="container">
        <!-- <ul class="foote_bottom_ul_amrc">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
        </ul> -->
        <p class="text-center">
          Copyright @2021 | Designed by <a href="#">KARTIK CHAUHAN</a>
        </p>

        <ul class="social_footer_ul">
          <li>
            <a href="https://twitter.com/KartikChauhan85"
              ><i class="fab fa-twitter"></i
            ></a>
          </li>
          <li>
            <a href="https://github.com/kartikchauhan563"
              ><i class="fab fa-github"></i
            ></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/kartik-c-b2942114b/"
              ><i class="fab fa-linkedin"></i
            ></a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
/*footer*/
.col_white_amrc {
  color: #fff;
}
footer {
  width: 100%;
  background-color: #263238;
  min-height: 180px;
  padding: 10px 0px 25px 0px;
}
.pt2 {
  padding-top: 40px;
  margin-bottom: 20px;
}
footer p {
  font-size: 13px;
  color: #ccc;
  padding-bottom: 0px;
  margin-bottom: 8px;
}
.mb10 {
  padding-bottom: 15px;
}
.footer_ul_amrc {
  margin: 0px;
  list-style-type: none;
  font-size: 14px;
  padding: 0px 0px 10px 0px;
}
.footer_ul_amrc li {
  padding: 0px 0px 5px 0px;
}
.footer_ul_amrc li a {
  color: #ccc;
}
.footer_ul_amrc li a:hover {
  color: #fff;
  text-decoration: none;
}
.fleft {
  float: left;
}
.padding-right {
  padding-right: 10px;
}

.footer_ul2_amrc {
  margin: 0px;
  list-style-type: none;
  padding: 0px;
}
.footer_ul2_amrc li p {
  display: table;
}
.footer_ul2_amrc li a:hover {
  text-decoration: none;
}
.footer_ul2_amrc li i {
  margin-top: 5px;
}

.bottom_border {
  border-bottom: 1px solid #323f45;
  padding-bottom: 0px;
}
.foote_bottom_ul_amrc {
  list-style-type: none;
  padding: 0px;
  display: table;
  margin-top: 10px;
  margin-right: auto;
  margin-bottom: 10px;
  margin-left: auto;
}
.foote_bottom_ul_amrc li {
  display: inline;
}
.foote_bottom_ul_amrc li a {
  color: #999;
  margin: 0 12px;
}

.social_footer_ul {
  display: table;
  margin: 15px auto 0 auto;
  list-style-type: none;
}
.social_footer_ul li {
  padding-left: 20px;
  padding-top: 10px;
  float: left;
}
.social_footer_ul li a {
  color: #ccc;
  border: 1px solid #ccc;
  padding: 8px;
  border-radius: 50%;
}
.social_footer_ul li i {
  width: 20px;
  height: 20px;
  text-align: center;
}
</style>

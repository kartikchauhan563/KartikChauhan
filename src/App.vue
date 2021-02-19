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
    <v-footer dark padless>
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
          Experienced WordPress Developer and Front End Developer with a demonstrated history of working in Information Technology. Skilled in Special Purpose Web-Development, FrontEnd Development, Android Development,Manual Testing, C,& Java.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Designed By Kartik Chauhan</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>
<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"]
  })
};
</script>
<style></style>

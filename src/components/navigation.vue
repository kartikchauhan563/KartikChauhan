<template>
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
    <v-btn>
      <a href="https://fetchnews.herokuapp.com/">Fetch News App</a>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {};
</script>

<style></style>

<template>
  <div class="banner">
    <v-banner>
      <div
        class="hero-image position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light"
      >
        <div class="col-md-5 p-lg-5 mx-auto my-5">
          <h1 class="text-white display-4 fw-normal">Kartik Chauhan</h1>
          <p class="text-white bold lead fw-normal">
            <strong>
              Experienced WordPress Developer and Front End Developer with a
              demonstrated history of working in Information Technology. Skilled
              in Special Purpose Web-Development, FrontEnd Development, Android
              Development,Manual Testing, C,& Java.</strong
            >
          </p>
          <a class="text-white btn btn-outline-secondary" href="#"
            >Download Resume</a
          >
        </div>
        <div class="product-device shadow-sm d-none d-md-block"></div>
        <div
          class="product-device product-device-2 shadow-sm d-none d-md-block"
        ></div>
      </div>
    </v-banner>
  </div>
</template>

<script>
export default {};
</script>

<style>
.hero-image {
  /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
  background-image: linear-gradient(
      rgba(108, 41, 41, 0.5),
      rgba(79, 28, 28, 0.5)
    ),
    url("../assets/heroimage.jpg");

  /* Set a specific height */
  height: 80%;

  /* Position and center the image to scale nicely on all screens */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
</style>

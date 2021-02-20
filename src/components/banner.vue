<template>
  <div>
    <div class="bg-light">
      <div class="container py-5">
        <div class="row h-100 align-items-center py-5">
          <div class="col-lg-6">
            <h1 class="display-4">Kartik Chauhan</h1>
            <p class="lead text-muted mb-0">
              Create a minimal about us page using Bootstrap 4.
            </p>
            <p class="lead text-muted">
              Experienced WordPress Developer and Front End Developer with a
              demonstrated history of working in Information Technology. Skilled
              in Special Purpose Web-Development, FrontEnd Development, Android
              Development,Manual Testing, C,& Java.
            </p>
          </div>
          <div class="col-lg-6 d-none d-lg-block">
            <img
              src="https://res.cloudinary.com/mhmd/image/upload/v1556834136/illus_kftyh4.png"
              alt=""
              class="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
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

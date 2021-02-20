<template>
  <div id="home">
    <Banner />
    <About />
    <Experience />
    <Education />
  </div>
</template>

<script>
import Banner from "@/components/banner.vue";
import About from "@/views/About.vue";
import Experience from "@/components/experience.vue";
import Education from "@/components/education.vue";

export default {
  name: "home",
  components: {
    Banner,
    About,
    Experience,
    Education
  }
};
</script>

<template>
  <div id="app">
    <Navigation />

    <router-view />

    <Footer />
  </div>
</template>
<script>
import Footer from "@/components/footer.vue";
import Navigation from "@/components/navigation.vue";
export default {
  name: "app",
  components: {
    Navigation,
    Footer,
  },
};
</script>

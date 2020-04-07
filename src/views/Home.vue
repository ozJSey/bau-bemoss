<template>
  <div class="home">
    <mainBanner />
  </div>
</template>

<script>
// @ is an alias to /src
import mainBanner from "@/components/mainBanner.vue";

export default {
  name: "Home",
  components: {
    mainBanner
  }
};
</script>

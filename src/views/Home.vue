<template>
  <div class="home">
    <mainBanner />
    <features />
    <useful />
    <neumorphic />
    <sitefooter />
  </div>
</template>

<script>
// @ is an alias to /src
import mainBanner from "@/components/mainBanner.vue";
import features from "@/components/features.vue";
import useful from "@/components/useful.vue";
import neumorphic from "@/components/neumorphic.vue";
import sitefooter from "@/components/sitefooter.vue";
export default {
  name: "Home",
  components: {
    mainBanner,
    features,
    useful,
    neumorphic,
    sitefooter
  }
};
</script>

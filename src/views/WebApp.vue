<template>
  <div class="about">
    <appHeader />
    <appSidebar />
  </div>
</template>

<script>
import appHeader from "@/webapp-comp/appHeader.vue";
import appSidebar from "@/webapp-comp/appSidebar.vue";
export default {
  components: {
    appHeader,
    appSidebar
  }
};
</script>

<style lang="scss">
</style>
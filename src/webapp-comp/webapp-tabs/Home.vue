<template>
  <section class="home">
    <appTitle :message="welcome" />
    <div class="switches">
      <appActive about="bulbs" />
      <appActive about="sockets" />
      <appActive about="PCs" />
      <appActive about="ACs" />
    </div>
  </section>
</template>

<script>
import appTitle from "@/webapp-comp/webapp-inner/appTitle.vue";
import appActive from "@/webapp-comp/webapp-inner/appActive.vue";
export default {
  data: () => ({
    welcome:
      "Welcome to the system, connected devices may be seen below via switching the option, to add a device please navigate to side menu."
  }),
  components: {
    appTitle,
    appActive
  }
};
</script>


<style lang="scss">
@mixin mobile {
  @media (max-width: 768px) {
    @content;
  }
}
.switches {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  @include mobile {
    flex-direction: column;
    align-items: center;
  }
}
</style>
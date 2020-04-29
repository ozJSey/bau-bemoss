<template>
  <div class="about">
    <appHeader />
    <appSidebar @expander="allignAppSidebar" />
    <appBody :activated="btnClicked" />
  </div>
</template>

<script>
import appHeader from "@/webapp-comp/appHeader.vue";
import appSidebar from "@/webapp-comp/appSidebar.vue";
import appBody from "@/webapp-comp/appBody.vue";
export default {
  data: () => ({
    btnClicked: false
  }),
  components: {
    appHeader,
    appSidebar,
    appBody
  },
  methods: {
    allignAppSidebar() {
      this.btnClicked = !this.btnClicked;
    }
  }
};
</script>

<style lang="scss">
</style>
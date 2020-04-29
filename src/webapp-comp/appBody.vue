<template>
  <section
    :class="{'activated' : activated}"
    id="webapp"
  >
    <appTitle :message="welcome" />
    <div class="switches">
      <appActive about="bulbs" />
      <appActive about="sockets" />
      <appActive about="PCs" />
      <appActive about="ACs" />
      <appActive about="Cameras" />
      <appActive about="Electronic" />
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
  props: {
    activated: {
      default: false,
      type: Boolean
    }
  },
  components: {
    appTitle,
    appActive
  }
};
</script>

<style lang="scss">
#webapp {
  position: absolute;
  top: 105px;
  left: 100px;
  background-color: #fefefe;
  box-shadow: 7px 7px 15px rgba(55, 84, 170, 0.15), -7px -7px 20px white,
    inset 0px 0px 4px rgba(255, 255, 255, 0),
    inset 7px 7px 15px rgba(55, 84, 170, 0.15), inset -7px -7px 20px white,
    0px 0px 4px rgba(255, 255, 255, 0.2) !important;
  width: calc(100% - 110px);
  max-height: 86.7vh;
  height: 86.7vh;
  border-radius: 10px;
  overflow-y: scroll;
  transition: width 1s cubic-bezier(0.165, 0.84, 0.44, 1),
    left 1s cubic-bezier(0.165, 0.84, 0.44, 1);
  &.activated {
    left: 270px;
    width: calc(100% - 280px);
  }
  .switches {
    display: flex;
    justify-content: space-around;
  }
}
</style>
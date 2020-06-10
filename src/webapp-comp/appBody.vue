<template>
  <section
    :class="{ activated: activated }"
    id="webapp"
  >
    <vue-page-transition name="flip-y">
      <router-view></router-view>
    </vue-page-transition>
  </section>
</template>

<script>
import Home from "@/webapp-comp/webapp-tabs/Home.vue";
export default {
  components: {
    Home
  },
  props: {
    activated: {
      default: false,
      type: Boolean
    }
  }
};
</script>
<style lang="scss">
@mixin mobile {
  @media (max-width: 768px) {
    @content;
  }
}
#webapp {
  position: absolute;
  top: 105px;
  left: 100px;
  @include mobile {
    left: 80px;
    width: calc(100% - 90px);
  }
  background-color: #fefefe;
  box-shadow: 7px 7px 15px rgba(55, 84, 170, 0.15), -7px -7px 20px white,
    inset 0px 0px 4px rgba(255, 255, 255, 0),
    inset 7px 7px 15px rgba(55, 84, 170, 0.15), inset -7px -7px 20px white,
    0px 0px 4px rgba(255, 255, 255, 0.2) !important;
  width: calc(100% - 110px);
  max-height: 86.7vh;
  height: 85.4vh;
  border-radius: 10px;
  overflow-y: auto;
  transition: width 1s cubic-bezier(0.165, 0.84, 0.44, 1),
    left 1s cubic-bezier(0.165, 0.84, 0.44, 1);
  &.activated {
    left: 270px;
    width: calc(100% - 280px);
  }
}
</style>

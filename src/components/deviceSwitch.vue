<template>
  <section class="table-switch">
    <input
      v-model="dn"
      type="text"
    />
    <div
      @click="interracted = !interracted"
      class="active"
      :class="{' switched' : interracted}"
    >
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    storeNewName: ""
  }),
  computed: {
    dn: {
      get() {
        return this.deviceName;
      },
      set(value) {
        this.storeNewName = value;
      }
    }
  },
  props: {
    interracted: {
      type: Boolean,
      default: false
    },
    deviceName: {
      type: String,
      default: "Undefined Device"
    }
  }
};
</script>

<style lang="scss" scoped>
.table-switch {
  display: flex;
  justify-content: space-around;
  input {
    padding: 0 5px;
  }
  .active {
    height: 40px;
    min-width: 100px;
    border-radius: 40px;
    background: #eee;
    position: relative;
    cursor: pointer;
    &.switched {
      background: #bada5547;
      &::after {
        left: 0;
      }
      p {
        opacity: 0;
      }
    }
    &::after {
      content: "";
      transition: all 0.6s ease-in-out;
      position: absolute;
      left: calc(100% - 30px);
      bottom: 0;
      width: 40px;
      height: 40px;
      border-radius: 40px;
      background-color: #bada55;
    }
    p {
      padding-right: 40px;
      line-height: 39px;
      margin: 0 10px 0 20px;
      color: #000;
      font-family: "Overlock", cursive;
    }
  }
}
</style>
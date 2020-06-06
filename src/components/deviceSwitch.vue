<template>
  <section
    v-if="visible"
    class="table-switch"
  >
    <input
      v-model="dn"
      type="text"
    />
    <div
      @click="ds = !ds"
      class="active"
      :class="{' switched' : ds}"
    >
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    storeNewName: "",
    storeNewStatus: Boolean
  }),
  computed: {
    dn: {
      get() {
        return this.deviceName;
      },
      set(value) {
        this.storeNewName = value;
      }
    },
    ds: {
      get() {
        return this.interracted;
      },
      set(value) {
        this.storeNewStatus = value;
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
    },
    visible: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.table-switch {
  position: absolute;
  left: 0;
  padding: 0 80px 0 30px;
  background: linear-gradient(to right, transparent 10%, white 20% 100%);
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: space-between;
  input {
    width: 80%;
    border-radius: 5px;
    border-color: transparent;
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
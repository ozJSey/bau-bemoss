<template>
  <section
    v-if="visible"
    class="table-switch"
  >
    <input
      @change="textChange"
      v-model="dn"
      type="text"
    />
    <div
      @click="statuChange"
      class="active"
      :class="{' switched' : changeStatus}"
    >
    </div>
    <button @click="$emit('done', false)">
      <font-awesome-icon icon="check" ></font-awesome-icon>
    </button>
  </section>
</template>

<script>
export default {
  data: () => ({
    storeNewName: "",
    storeNewStatus: false,
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
  },
  mounted(){
    this.changeStatus = this.interracted;
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
  },
  methods: {
    textChange() {
      this.$emit("changed", this.storeNewName);
    },
    statuChange() {
      this.changeStatus = !this.changeStatus
      this.$emit("statusChanged", this.changeStatus);
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
  button{
    position: absolute;
    right: -25px;
    color: white;
    background-color: #bada55;
    border-radius: 3px;
    border: 1px solid white;
    top: 10px;
    z-index: 1;
  }
}
</style>
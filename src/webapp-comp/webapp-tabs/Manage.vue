<template>
  <div class="devices-wrapper">
    <div
      @click="expand"
      class="dropdown"
      :class="{'expanded': expanded}"
    >
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    expanded: false
  }),
  methods: {
    expand() {
      console.log(this.expanded);
      this.expanded = !this.expanded;
    }
  }
};
</script>

<style lang="scss" scope>
.devices-wrapper {
  width: 100%;
  height: 100%;
  padding-top: 20px;
  .dropdown {
    padding: 20px;
    transition: all 0.4s cubic-bezier(0.175, 0.885, -0.32, 1.275);
    max-height: 60px;
    margin: 0 30px;
    overflow: hidden;
    width: calc(100% - 55px);
    border-radius: 10px;
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
    &.expanded {
      max-height: 400px;
    }
  }
}
</style>
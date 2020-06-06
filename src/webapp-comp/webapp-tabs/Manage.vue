<template>
  <div class="devices-wrapper">
    <div
      @click="expand"
      :class="{'br-none': expanded}"
      class="dropdown-selected"
    >
      <p>Hi</p>
      <font-awesome-icon icon="arrow-down"></font-awesome-icon>
    </div>

    <ul
      class="dropdown-menu"
      :class="{'expanded': expanded}"
    >
    </ul>
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
  .dropdown-selected {
    box-shadow: 1px -10px 10px 10px rgba(0, 0, 0, 0.05);
    margin: 0 30px;
    padding: 5px 30px;
    overflow: hidden;
    border-radius: 10px;
    width: calc(100% - 55px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg {
      transition: all 0.2s ease-in-out;
    }
    &.br-none {
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
      svg {
        transform: rotate(180deg);
      }
    }
  }
  .dropdown-menu {
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    min-height: 0;
    margin: -5px 30px 0;
    overflow: hidden;
    width: calc(100% - 55px);
    border-radius: 10px;
    background-color: white;
    box-shadow: 1px 25px 20px 10px rgba(0, 0, 0, 0.05);
    &.expanded {
      border-top-right-radius: 0;
      border-top-left-radius: 0;
      min-height: 400px;
    }
  }
}
</style>
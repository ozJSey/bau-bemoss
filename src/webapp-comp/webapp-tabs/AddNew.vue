<template>
  <div class="devices-wrapper">
    <div
      v-for="(dev,index, i) in devices"
      :key="dev.id"
      class="device-card"
    >
      <h3
        class="menu-header"
        :class="{'active' : activeTab == i}"
        @click="activeTab = i"
      >{{dev.name}}</h3>
      <transition
        name="menu"
        mode="out-in"
      >
        <div
          class="menu-content"
          v-if="activeTab == i"
        >
          <ul class="list">
            <li
              v-for="(d, count) in dev.devices"
              :key="count"
              @click="moveDown(dev.name)"
            > {{d}} </li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    devices: {
      pending: {
        id: 0,
        name: "Pending Devices",
        devices: ["Tk__r7V9Ez", "z5.W7Te6U", "P2nZErG-p", "P2nZErG-s"]
      },
      approved: {
        id: 1,
        name: "Approved Devices",
        devices: ["2LGjP8el", "pMR6uJz6", "fFG6-Bltr"]
      },
      nonBemoss: {
        id: 2,
        name: "Non-BEMOSS Devices",
        devices: [
          "8HnX_SCYo",
          "tFAw-h634",
          "1hs__qaK4d",
          "Q3iEi.6yp",
          "xb3X-1OTZ",
          "xb3X-2OTZ",
          "tFAw-h722"
        ]
      }
    },
    activeTab: 0
  }),
  methods: {
    moveDown(n) {
      console.log(n);
    }
  }
};
</script>

<style lang="scss">
.menu-header {
  position: relative;
  color: #6200ff;
  text-align: center;
  font-size: 36px;
  font-family: "Fredoka One", cursive;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    left: 35%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #6200ff;
    box-shadow: 1px 2px 10px #6200ff, 1px 2px 3px #aa76ff,
      inset 1px 2px 3px #fff, 1px -2px 5px #fff;
  }
  &.active {
    &::before {
      background-color: #bada55;
      box-shadow: 1px 2px 10px #bada55, 1px 2px 3px #aa76ff,
        inset 1px 2px 3px #fff, 1px -2px 5px #fff;
    }
  }
}
.menu-content {
  transition: all 0.5s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  .list {
    text-align: center;
    list-style: none;
    padding-inline-start: 0;
    li {
      color: #0e0025;
      font-size: 1.5rem;
      margin: 10px 0;
    }
  }
}
.menu-enter-active,
.menu-leave-active {
  transition: all 0.5s;
}
.menu-enter, .menu-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  padding: 20px 0;
}
</style>
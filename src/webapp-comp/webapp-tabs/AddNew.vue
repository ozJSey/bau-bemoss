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
            > {{d}}
              <div class="btn-grp">
                <button
                  v-if="i != 2"
                  class="down"
                  @click="moveDown(index, d, i)"
                >
                  <font-awesome-icon icon="arrow-down"></font-awesome-icon>
                </button>
                <button
                  v-if="i != 0"
                  class="up"
                  @click="moveUp(index, d, i)"
                >
                  <font-awesome-icon icon="arrow-up"></font-awesome-icon>
                </button>
              </div>
            </li>
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
    moveDown(t, d, i) {
      this.devices[t].devices = this.devices[t].devices.filter(e => e != d);
      switch (i) {
        case 0:
          this.devices.approved.devices.push(d);
          break;
        case 1:
          this.devices.nonBemoss.devices.push(d);
          break;
        default:
          break;
      }
    },
    moveUp(t, d, i) {
      this.devices[t].devices = this.devices[t].devices.filter(e => e != d);
      this.devices[t].devices = this.devices[t].devices.filter(e => e != d);
      switch (i) {
        case 1:
          this.devices.pending.devices.push(d);
          break;
        case 2:
          this.devices.approved.devices.push(d);
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@mixin mobile {
  @media (max-width: 768px) {
    @content;
  }
}
.devices-wrapper {
  margin-top: 50px;
}
.menu-header {
  position: relative;
  color: #6200ff;
  text-align: center;
  font-size: 36px;
  line-height: 72px;
  margin: 0;
  font-family: "Fredoka One", cursive;
  @include mobile {
    font-size: 24px;
    line-height: 36px;
  }
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    left: 120px;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #6200ff;
    box-shadow: 1px 2px 10px #6200ff, 1px 2px 3px #aa76ff,
      inset 1px 2px 3px #fff, 1px -2px 5px #fff;
    @include mobile {
      height: 0;
      width: 0;
    }
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
      display: flex;
      justify-content: space-between;
      color: #0e0025;
      font-size: 1.3rem;
      margin: 10px 0;
      min-width: 300px;
      @include mobile {
        font-size: 1rem;
        padding: 0 20px;
      }
      button {
        width: 20px;
        height: 20px;
        font-size: 10px;
        line-height: 0.7;
        text-align: center;
        padding: 0 4px;
        &.down {
          background-color: rgba(89, 0, 255, 0.212);
        }
        &.up {
          background-color: rgba(145, 255, 0, 0.329);
        }
      }
    }
  }
}
.menu-enter-active,
.menu-leave-active {
  transition: all 0.5s ease;
}
.menu-enter, .menu-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  height: 0;
  transform: translateY(-10px);
}
</style>
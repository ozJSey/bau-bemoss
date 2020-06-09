<template>
  <section class="devices-wrapper">
    <div
      @click="expand"
      :class="{'exd': expanded}"
      class="dropdown-selected"
    >
      <p>{{title}}</p>

      <font-awesome-icon
        v-if="devices"
        icon="arrow-down"
      ></font-awesome-icon>
    </div>
    <div
      v-if="innerData"
      class="dropdown-menu"
      :class="{'expanded': expanded}"
    >
      <h3 class="dropdown-title">{{innerData['Description']['Details']}}</h3>
      <p class="device-numbers">Device Count: {{innerData['Description']['DevicesCount']}}</p>
      <div class="devices-wrapper-inner">
        <hvacSettings
          v-if="devices == 'HVAC'"
          :appropriateIcon="appropriateIcon"
          :deviceVariations="deviceVariations"
        />
        <lightningSettings
          v-if="devices == 'Lighting Devices'"
          :appropriateIcon="appropriateIcon"
          :deviceVariations="deviceVariations"
        ></lightningSettings>
      </div>
    </div>
  </section>
</template>

<script>
import lightningSettings from "../../components/lightningSettings.vue";
import hvacSettings from "../../components/hvacSettings.vue";
import appDeviceSettings from "./appDeviceSettings.vue";
import store from "../../store/index";
import Lightbox from "../webapp-tabs/Lightbox.vue";
export default {
  components: {
    Lightbox,
    appDeviceSettings,
    hvacSettings,
    lightningSettings
  },
  data: () => ({
    expanded: false
  }),
  methods: {
    expand() {
      this.expanded = !this.expanded;
    }
  },
  watch: {
    deviceNames(newValue, oldValue) {
      this.deviceNames = newValue;
    }
  },
  props: {
    title: {
      type: String,
      required: false
    },
    devices: {
      type: String,
      required: false
    }
  },
  mounted() {
    console.log("tag", store.state.apiData);
  },
  computed: {
    innerData() {
      return store.state.apiData[this.devices];
    },
    appropriateIcon() {
      switch (this.devices) {
        case "HVAC":
          return "fan";
          break;
        case "Lighting Devices":
          return "lightbulb";
          break;
        case "Plug Devices":
          return "plug";
          break;
        case "Sensor Devices":
          return "shield-alt";
          break;
        default:
          break;
      }
    },
    deviceVariations() {
      let data = store.state.apiData[this.devices];
      // delete data.Description;
      return data;
    }
  }
};
</script>

<style lang="scss" scoped>
.devices-wrapper {
  font-family: "Overlock", cursive;
  width: 100%;
  align-self: flex-end;
  height: 100%;
  padding: 10px 0;
  .dropdown-selected {
    box-shadow: 7px 7px 15px rgba(55, 84, 170, 0.15),
      -7px -7px 20px rgba(255, 255, 255, 1),
      inset 0px 0px 4px rgba(255, 255, 255, 0),
      inset 7px 7px 15px rgba(55, 84, 170, 0.15),
      inset -7px -7px 20px rgba(255, 255, 255, 1),
      0px 0px 4px rgba(255, 255, 255, 0.2) !important;
    margin: 0 30px;
    padding: 5px 20px;
    overflow: hidden;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      margin: 10px 0;
    }
    svg {
      transition: all 0.2s ease-in-out;
    }
    &.exd {
      svg {
        transform: rotate(180deg);
      }
    }
  }
  .dropdown-menu {
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    min-height: 0;
    height: 0;
    overflow: hidden;
    border-radius: 10px;
    background-color: white;
    box-shadow: 7px 7px 15px rgba(55, 84, 170, 0.15),
      -7px -7px 20px rgba(255, 255, 255, 1),
      inset 0px 0px 4px rgba(255, 255, 255, 0),
      inset 7px 7px 15px rgba(55, 84, 170, 0.15),
      inset -7px -7px 20px rgba(255, 255, 255, 1),
      0px 0px 4px rgba(255, 255, 255, 0.2) !important;
    &.expanded {
      min-height: 60vh;
      overflow: auto;
      margin: 10px 30px 10px;
      padding: 20px;
    }
    &:last-child {
      &.expanded {
        padding-bottom: 0;
        margin-bottom: 0;
      }
    }
  }
  .dropdown-title {
    font-size: 25px;
    margin: 0 0 10px;
    background: -webkit-linear-gradient(100deg, #bada55 45%, #6200ff);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .device-numbers {
    font-size: 15px;
    margin: 0 0 10px;
    background: -webkit-linear-gradient(100deg, #6200ff 25%, #bada55);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: right;
  }
}
</style>
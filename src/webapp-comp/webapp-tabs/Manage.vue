<template>
  <section class="device-settings">
    <appTitle message="Device Settings"></appTitle>
    <appDeviceSettings :devices="hvac" title="HVACs"></appDeviceSettings>
    <appDeviceSettings :devices="lightningDevices" title="Lightning Devices"></appDeviceSettings>
    <appDeviceSettings :devices="plugDevices" title="Plug Devices"></appDeviceSettings>
    <appDeviceSettings :devices="SensorDevices" title="Sensors"></appDeviceSettings>
  </section>
</template>

<script>
import appTitle from "../webapp-inner/appTitle.vue";
import appDeviceSettings from "../webapp-inner/appDeviceSettings.vue";
import store from '../../store/index';
export default {
  components: {
    appDeviceSettings,
    appTitle,
    store,
  },
  data: () => ({
    expanded: false,
    apiData: {},
    hvacDevices: {},
    hvac: 'HVAC',
    lightningDevices: 'Lighting Devices',
    plugDevices: 'Plug Devices',
    SensorDevices: 'Sensor Devices'
  }),
  methods: {
    expand() {
      this.expanded = !this.expanded;
    }
  },
  watch: {
    hvacDevices(newVal, old){
      console.log(newVal)
      this.hvacDevices = newVal;
    }
  },
  created() {
    $.getJSON("https://bemoss-e8288.firebaseio.com/Bemoss%20Database.json", function(
      data
    ) {
      store.commit('apiData', data);
      console.log(data);
    });
  }
};
</script>


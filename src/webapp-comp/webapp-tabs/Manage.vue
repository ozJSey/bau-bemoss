<template>
  <section class="device-settings">
    <appTitle message="Device Settings"></appTitle>
    <appDeviceSettings :devices="hvacData" title="HVACs"></appDeviceSettings>
    <appDeviceSettings title="Lightning Devices"></appDeviceSettings>
    <appDeviceSettings title="Plug Devices"></appDeviceSettings>
    <appDeviceSettings title="Sensors"></appDeviceSettings>
  </section>
</template>

<script>
import appTitle from "../webapp-inner/appTitle.vue";
import appDeviceSettings from "../webapp-inner/appDeviceSettings.vue";
export default {
  components: {
    appDeviceSettings,
    appTitle
  },
  data: () => ({
    expanded: false,
    apiData: {},
    hvacDevices: {},
  }),
  methods: {
    expand() {
      this.expanded = !this.expanded;
    }
  },
  computed: {
    hvacData() {
      return this.hvacDevices;
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
      this.$store.commit('hvacApi', data['HVAC']);
    });
  }
};
</script>


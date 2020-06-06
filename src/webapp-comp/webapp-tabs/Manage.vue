<template>
  <section class="device-settings">
    <appTitle message="Device Settings"></appTitle>
    <appDeviceSettings title="HVACs"></appDeviceSettings>
    <appDeviceSettings title="Lightning Devices"></appDeviceSettings>
    <appDeviceSettings title="Plug Devices"></appDeviceSettings>
    <appDeviceSettings title="Sensors"></appDeviceSettings>
    <appDeviceSettings title="Cameras"></appDeviceSettings>
    <appDeviceSettings title="Electronics"></appDeviceSettings>
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
    expanded: false
  }),
  methods: {
    expand() {
      this.expanded = !this.expanded;
    }
  }
  // created() {
  //   $.getJSON("https://bemoss-e8288.firebaseio.com/Device1.json", function(
  //     data
  //   ) {
  //     console.log(data);
  //   });
  // }
};
</script>


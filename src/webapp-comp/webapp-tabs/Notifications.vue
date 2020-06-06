<template>
  <section class="notifications">
    <appTitle :message="notificationsString"></appTitle>
    <appNotif :allNotifications="notification"></appNotif>
  </section>
</template>

<script>
import appNotif from "../webapp-inner/appNotif.vue";
import appTitle from "../webapp-inner/appTitle.vue";
export default {
  data: () => ({
    notificationsString: "Notifications",
    notification: {
      n1: {
        id: 1,
        title: "Savings",
        desc: "BEMOSS has saved 114 kWh/mo."
      },
      n2: {
        id: 2,
        title: "Authorization",
        desc: "You have given admin rights, you may \n add or remove users now."
      },
      n3: {
        id: 3,
        title: "BEMOSS system",
        desc: "AC was closed yesterday at 1AM as requested."
      },
      n4: {
        id: 4,
        title: "BEMOSS system",
        desc: "Thermosthat values reports are prepared"
      }
    }
  }),
  components: {
    appTitle,
    appNotif
  }
};
</script>

<style>
</style>
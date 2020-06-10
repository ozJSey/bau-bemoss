<template>
  <Table
    title="Network"
    :tableContent="networkData"
  ></Table>
</template>

<script>
import Table from "@/components/table.vue";
export default {
  data: () => ({
    networkData: {
      lan1: {
        id: 1,
        title: "NetVanta 3200",
        value: "online",
        setupIn: "CR-1",
        ipAddress: "192.168.1.130",
        interracted: false
      },
      lan2: {
        id: 2,
        title: "Asus RT-AC68R",
        value: "online",
        setupIn: "CR-2",
        ipAddress: "192.168.1.131",
        interracted: false
      },
      lan3: {
        id: 3,
        title: "Asus RT-N56U",
        value: "online",
        setupIn: "Hall-1",
        ipAddress: "192.168.1.132",
        interracted: false
      },
      lan4: {
        id: 4,
        title: "Lynsys WRT610N",
        value: "online",
        setupIn: "Kitchen",
        ipAddress: "192.168.1.133",
        interracted: false
      },
      lan5: {
        id: 5,
        title: "Verizon FiOS Quantum G1100",
        value: "online",
        setupIn: "Lab-1",
        ipAddress: "151.111.92.0",
        interracted: false
      },
      lan6: {
        id: 6,
        title: "ZyXEL CenturyLink ZyXel PK5001z",
        value: "online",
        setupIn: "Lab-2",
        ipAddress: "15.17.9.0",
        interracted: false
      }
    }
  }),
  components: {
    Table
  }
};
</script>

<style>
</style>
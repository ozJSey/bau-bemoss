<template>
  <section class="data-table">
    <appTitle :message="title"></appTitle>
    <table class="table-inner">
      <tr
        @click.capture="entries.interracted = true"
        v-for="entries in tableContent"
        :key="entries.id"
      >
        <th>{{entries.title}}</th>
        <td>{{entries.value}}</td>
        <td>{{entries.setupIn}}</td>
        <td>{{entries.ipAddress}}</td>
        <device-switch
          @changed="nameChanged($event , entries.id)"
          :deviceName="entries.title"
          :visible="entries.interracted"
          @done="checked()"
          @statusChanged="statuChanged($event, entries.id)"
        ></device-switch>
      </tr>
    </table>
  </section>
</template>

<script>
import deviceSwitch from "./deviceSwitch.vue";
import deviceMenu from "@/components/deviceMenu";
import appTitle from "@/webapp-comp/webapp-inner/appTitle";
export default {
  props: {
    title: {
      type: String,
      required: false
    },
    tableContent: {
      type: Object,
      required: false
    }
  },
  components: {
    appTitle,
    deviceMenu,
    deviceSwitch
  },
  methods: {
    nameChanged(val, i) {
      Object.values(this.tableContent).forEach(e =>
        e.id == i ? (e.title = val) : (e.title = e.title)
      );
      Object.values(this.tableContent).forEach(e => (e.interracted = false));
    },
    checked(a){
      Object.values(this.tableContent).forEach(e => (e.interracted = a));
    },
    statuChanged(val, i) {
      Object.values(this.tableContent).forEach((e)=>{
        if(e.id == i){
            e.value == 'online' ? e.value = 'offline' : e.value = 'online';
        }
        }
      );
  }
  }
};
</script>

<style lang="scss">
.data-table {
  font-family: "Overlock", cursive;
  padding: 0 30px;
  .table-inner {
    position: relative;
    box-shadow: 7px 7px 15px rgba(55, 84, 170, 0.15),
      -7px -7px 20px rgba(255, 255, 255, 1),
      inset 0px 0px 4px rgba(255, 255, 255, 0),
      inset 7px 7px 15px rgba(55, 84, 170, 0.15),
      inset -7px -7px 20px rgba(255, 255, 255, 1),
      0px 0px 4px rgba(255, 255, 255, 0.2) !important;
    padding: 20px;
    border-radius: 10px;
    width: 100%;
    tr {
      cursor: pointer;
      &:hover {
        background-color: rgba(55, 84, 170, 0.05);
      }
      td {
        padding: 11px;
        text-align: center;
      }
      th {
        padding: 11px;
        text-align: left;
      }
    }
  }
}
</style>
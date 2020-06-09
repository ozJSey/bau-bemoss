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
      v-if="devices"
      class="dropdown-menu"
      :class="{'expanded': expanded}"
    >
    <input type="text" v-model="devices">
    {{devices}}
      <!-- <router-link
        v-for="(d, i) in devices"
        :key="i"
        :to="'devices:'+d"
      >
        <h5 v-if="d.location" class="title">{{d.location}}</h5>
        <img
          src="https://robohash.org/1"
          alt=""
          srcset=""
        >
        <p class="name">{{d.name}}</p>
        <p class="status"> Status {{d.status}} </p>
      </router-link> -->
      <!-- <router-view></router-view> -->
    </div>
  </section>
</template>

<script>
import Lightbox from "../webapp-tabs/Lightbox.vue";
export default {
  components: {
    Lightbox
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
    },
  },
  props: {
    title: {
      type: String,
      required: false,
    },
    devices:{
      type: Object,
      required: false
    } 
  },
  mounted(){
    console.log('tag', this.devices)
  }
};
</script>

<style lang="scss" scoped>
.devices-wrapper {
  font-family: "Overlock", cursive;
  width: 100%;
  align-self: flex-end;
  height: 100%;
  padding-top: 20px;
  .dropdown-selected {
    box-shadow: 7px 7px 15px rgba(55, 84, 170, 0.15),
      -7px -7px 20px rgba(255, 255, 255, 1),
      inset 0px 0px 4px rgba(255, 255, 255, 0),
      inset 7px 7px 15px rgba(55, 84, 170, 0.15),
      inset -7px -7px 20px rgba(255, 255, 255, 1),
      0px 0px 4px rgba(255, 255, 255, 0.2) !important;
    margin: 0 30px;
    padding: 5px 30px;
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
      min-height: 400px;
      margin: 10px 30px 10px;
      &:last-child {
        margin-bottom: 50px;
      }
    }
   
    a {
      margin: 5px 0;
      &:first-child {
        margin-top: 20px;
      }
    }
  }
}
</style>
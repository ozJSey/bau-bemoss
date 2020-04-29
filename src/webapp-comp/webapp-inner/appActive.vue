<template>
  <section class="appActive">
    <div
      @click="visible = !visible"
      class="active"
      :class="{' switched' : visible}"
    >
      <p>{{about}}</p>
    </div>
    <transition name="slide-fade">
      <ul v-if="visible && devices.length > 0">

        <li
          v-for="d in devices"
          :key="d.id"
        >
          <p> {{d.name}} </p>
          <div
            :class="d.status ? 'p' : 'n'"
            class="status"
          ></div>
        </li>

      </ul>
    </transition>
    <p v-if="visible && devices.length == 0">
      You don't have any connected devices under this category
    </p>
  </section>
</template>

<script>
export default {
  data: () => ({
    visible: false,
    devices: []
  }),
  props: {
    about: String
  },
  mounted() {
    this.devices = this.$store.state[this.about.toLowerCase()];
  }
};
</script>

<style lang="scss">
.appActive {
  padding: 10px;
  max-width: 20%;
  ul {
    list-style: none;
    padding-inline-start: 0;
    li {
      margin: 5px;
      font-family: "Overlock", cursive;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .p.status {
        width: 50px;
        height: 50px;
        background: radial-gradient(
          circle,
          rgba(255, 255, 255, 1) 0%,
          rgba(50, 255, 0, 1) 27%,
          rgba(55, 121, 9, 0) 30%
        );
      }
      .n.status {
        width: 50px;
        height: 50px;
        background: radial-gradient(
          circle,
          rgba(255, 255, 255, 1) 0%,
          rgb(255, 0, 0) 27%,
          rgba(55, 121, 9, 0) 30%
        );
      }
    }
  }
}
.active {
  height: 40px;
  min-width: 100px;
  border-radius: 40px;
  background: #eee;
  position: relative;
  cursor: pointer;
  &.switched {
    background: #bada5547;
    &::after {
      left: 0;
    }
    p {
      opacity: 0;
    }
  }
  &::after {
    content: "";
    transition: all 0.6s ease-in-out;
    position: absolute;
    left: calc(100% - 30px);
    bottom: 0;
    width: 40px;
    height: 40px;
    border-radius: 40px;
    background-color: #bada55;
  }
  p {
    padding-right: 40px;
    line-height: 39px;
    margin: 0 10px 0 20px;
    color: #000;
    font-family: "Overlock", cursive;
  }
}
.slide-fade-enter-active {
  transition: all 0.4s 0.4s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
<template>
  <aside>
    <button
      @click="shrink"
      class="expander"
    >
      <font-awesome-icon icon="align-right"></font-awesome-icon>
    </button>
    <nav class="side-menu">
      <ul>
        <li>
          <router-link to="/webapp/">
            <transition name="slide-fade">
              <div v-if="!collapsed">
                Home
              </div>
              <font-awesome-icon
                v-else
                class="icons"
                icon="home"
              ></font-awesome-icon>
            </transition>
          </router-link>
        </li>
        <li>
          <router-link to="/webapp/new">
            <transition name="slide-fade">
              <div v-if="!collapsed">
                Discover New Devices
              </div>
              <span
                v-else
                class="plus"
              >
                +
              </span>
            </transition>
          </router-link>
        </li>
        <li>
          <router-link to="/webapp/network">
            <transition name="slide-fade">
              <div v-if="!collapsed">
                Network Status
              </div>
              <font-awesome-icon
                v-else
                class="icons"
                icon="wifi"
              ></font-awesome-icon>
            </transition>
          </router-link>
        </li>
        <li>
          <router-link to="/webapp/notifications">
            <transition name="slide-fade">
              <div v-if="!collapsed">
                Alarms &amp; Notifications
              </div>
              <font-awesome-icon
                v-else
                class="icons"
                icon="bell"
              ></font-awesome-icon>
            </transition>
          </router-link>
        </li>
        <li v-if="userType == 'admin@baubemoss.com'">
          <router-link to="/webapp/users">
            <transition name="slide-fade">
              <div v-if="!collapsed">
                Manage Users
              </div>
              <font-awesome-icon
                v-else
                class="icons"
                icon="user"
              ></font-awesome-icon>
            </transition>
          </router-link>
        </li>
        <li>
          <router-link to="/webapp/manage">
            <transition name="slide-fade">
              <div v-if="!collapsed">
                Manage
              </div>
              <font-awesome-icon
                v-else
                class="icons"
                icon="cog"
              ></font-awesome-icon>
            </transition>
          </router-link>
        </li>
        <li>
          <router-link to="/webapp/graphs">
            <transition name="slide-fade">
              <div v-if="!collapsed">
                Graphs
              </div>
              <font-awesome-icon
                v-else
                class="icons"
                icon="chart-line"
              ></font-awesome-icon>
            </transition>
          </router-link>
        </li>
        <li>
          <router-link to="/login">
            <transition name="slide-fade">
              <div v-if="!collapsed">
                Logout
              </div>
              <font-awesome-icon
                v-else
                class="icons"
                icon="power-off"
              ></font-awesome-icon>
            </transition>
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
import store from "../store/index";
export default {
  data: () => ({
    collapsed: true
  }),
  methods: {
    shrink() {
      this.$el.style.width == "250px"
        ? (this.$el.style.width = "80px")
        : (this.$el.style.width = "250px");
      this.collapsed = !this.collapsed;
      this.$emit("expander");
    }
  },
  computed: {
    userType() {
      return store.state.userType;
    }
  }
};
</script>

<style lang="scss">
@mixin mobile {
  @media (max-width: 768px) {
    @content;
  }
}
aside {
  font-family: "Fredoka One", cursive;
  position: absolute;
  transition: width 1s cubic-bezier(0.165, 0.84, 0.44, 1);
  top: 105px;
  left: 10px;
  @include mobile {
    left: -10px;
  }
  border-radius: 10px;
  width: initial;
  display: block;
  background-color: transparent;
  background: #fefefe;
  box-shadow: 7px 7px 15px rgba(55, 84, 170, 0.15), -7px -7px 20px white,
    inset 0px 0px 4px rgba(255, 255, 255, 0),
    inset 7px 7px 15px rgba(55, 84, 170, 0.15), inset -7px -7px 20px white,
    0px 0px 4px rgba(255, 255, 255, 0.2) !important;
  z-index: 2;
  width: 80px;
  min-height: calc(100vh - 120px);
  max-height: calc(100vh - 120px);
  .expander {
    appearance: none;
    font-size: 30px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    color: #6200ff;
    outline: 0;
    box-shadow: 7px 7px 15px rgba(55, 84, 170, 0.15), -7px -7px 20px white,
      inset 0px 0px 4px rgba(255, 255, 255, 0),
      inset 7px 7px 15px rgba(55, 84, 170, 0.15), inset -7px -7px 20px white,
      0px 0px 4px rgba(255, 255, 255, 0.2) !important;
    width: 100%;
    border: 0;
    box-shadow: 0;
    padding: 12px 27px;
    cursor: pointer;
  }
  .side-menu {
    ul {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      list-style: none;
      padding-inline-start: 0;
      padding: 20px 20px 0;
      margin: 0;
      height: calc(96vh - 169px);
      @include mobile {
        margin: 0 0 0 5px;
      }
      li {
        position: relative;
        width: 100%;
        white-space: nowrap;
        margin-left: 0;
        svg,
        .plus {
          position: absolute;
          left: 50%;
          top: 0;
          transform: translateX(-50%);
          font-size: 25px;
          color: #6200ff;
        }
        span {
          font-size: 50px !important;
          line-height: 0.5;
        }
        div {
          position: absolute;
          color: #0f0027;
          top: 0;
          left: 0;
        }
      }
    }
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
  transform: translateX(-100px);
  opacity: 0;
}
@keyframes fill {
  to {
    width: 150px;
  }
}
</style>

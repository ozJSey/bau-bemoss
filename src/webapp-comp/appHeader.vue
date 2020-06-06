<template>
  <header>
    <div class="top-menu">
      <router-link
        to="/"
        class="logo"
      >
        <h1>bau<em>Bemoss</em></h1>
      </router-link>
      <div class="side-menu">
        <a
          @click="notifications"
          class="notification"
        >
          <font-awesome-icon
            class="icons"
            icon="bell"
          ></font-awesome-icon>
          <span v-show="!seen">{{ notification.length }}</span>
          <transition name="slide-fade">
            <div
              v-if="expanded"
              class="expanded"
            >
              <ul>
                <li
                  v-for="n in notification"
                  :key="n"
                >{{ n }}</li>
              </ul>
            </div>
          </transition>
        </a>
        <a
          href=""
          class="account"
        >
          <font-awesome-icon
            class="icons"
            icon="user"
          ></font-awesome-icon>
          {{ user }}
        </a>
        <router-link
          to="/login"
          class="logout"
        >
          <font-awesome-icon
            class="icons"
            icon="power-off"
          ></font-awesome-icon>
          Logout
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data: () => ({
    seen: false,
    user: "Admin",
    notification: [
      "BEMOSS has saved 114 kWh/mo.",
      "You have given admin rights, you may \n add or remove users now.",
      "AC was closed yesterday at 1AM as requested.",
      "Thermosthat values reports are prepared"
    ],
    expanded: false
  }),
  methods: {
    notifications() {
      this.seen = true;
      this.expanded = !this.expanded;
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  font-family: "Fredoka One", cursive;
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1;
  border-radius: 10px;
  background-color: #fefefe;
  box-shadow: 7px 7px 15px rgba(55, 84, 170, 0.15), -7px -7px 20px white,
    inset 0px 0px 4px rgba(255, 255, 255, 0),
    inset 7px 7px 15px rgba(55, 84, 170, 0.15), inset -7px -7px 20px white,
    0px 0px 4px rgba(255, 255, 255, 0.2) !important;
  width: calc(100% - 20px);
  .top-menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0 0 50px;
    a {
      text-decoration: none;
    }
    h1 {
      color: #6200ff;
      em {
        color: #bada55;
      }
    }
    .side-menu {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .notification {
        position: relative;
        span {
          position: absolute;
          top: 20px;
          right: 25px;
          font-size: 10px;
          line-height: 0.6;
          color: #fff;
          background-color: #6200ff;
          padding: 4px;
          border-radius: 4px;
        }
        .icons {
          color: #bada55;
        }
        .expanded {
          position: absolute;
          top: 50px;
          left: -60px;
          text-align: left;
          min-width: 200px;
          background-color: #fefefe;
          box-shadow: 7px 7px 15px rgba(55, 84, 170, 0.15), -7px -7px 20px white,
            inset 0px 0px 4px rgba(255, 255, 255, 0),
            inset 7px 7px 15px rgba(55, 84, 170, 0.15),
            inset -7px -7px 20px white, 0px 0px 4px rgba(255, 255, 255, 0.2) !important;
          border-radius: 10px;
          ul {
            list-style: none;
            padding-inline-start: 0;
            li {
              padding: 10px 20px;
              font-family: "Overlock", cursive;
            }
          }
        }
      }
      .icons {
        color: #bada55;
        margin: 0 10px;
        font-size: 25px;
      }
      .logout {
        font-size: 14px;
        text-decoration: none;
        color: #6200ff;
        display: flex;
        align-items: center;
      }
      .account {
        cursor: default;
        font-size: 14px;
        margin: 0 7px;
        text-decoration: none;
        color: #6200ff;
        display: flex;
        align-items: center;
      }
      a {
        cursor: pointer;
        padding: 20px;
        position: relative;
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
  transform: translateY(-20px);
  opacity: 0;
}
</style>

<template>
  <section>
    <appTitle message="Login"></appTitle>
    <div class="login-page">

      <form
        @submit.prevent="loginUser"
        class="login-form"
        action="#"
      >
        <fieldset>
          <label
            ref="userLabel"
            for="name"
          >Username</label>
          <input
            @blur="blurUsernameLabel"
            @focus="moveUsernameLabel"
            type="text"
            v-model="username"
          />
        </fieldset>
        <fieldset>
          <label
            ref="passwordLabel"
            for="password"
          >Password</label>
          <input
            @blur="blurPasswordLabel"
            @focus="movePasswordLabel"
            type="text"
            v-model="password"
          />
        </fieldset>
        <fieldset>
          <input
            type="submit"
            value="Login"
          />
        </fieldset>
        <span>
          If you have forgotten password please consult your system admin.
        </span>
        <span v-if="errorMessage">{{errorMessage}}</span>
      </form>
    </div>
  </section>
</template>

<script>
import appTitle from "../webapp-comp/webapp-inner/appTitle.vue";
export default {
  components: {
    appTitle
  },
  data: () => ({
    username: "",
    password: "",
    userList: [],
    error: ""
  }),
  computed: {
    errorMessage() {
      return this.error;
    }
  },
  methods: {
    loginUser() {
      switch (this.username.toLowerCase()) {
        case "admin":
          this.password == "bemossadmin"
            ? this.$router.push("WebApp")
            : (this.error = "Your id or password is incorrect");
          break;
        case "manager":
          this.password == "bemossadmin"
            ? this.$router.push("WebApp")
            : (this.error = "Your id or password is incorrect");
          break;
        default:
          // if (this.userList.includes(this.username)) {
          // let index = this.userList.indexOf(this.username);
          // this.password == this.userList[index].password
          //   ? this.$router.push("WebApp")
          this.error = "Your id or password is incorrect";
          // }
          break;
      }
    },
    movePasswordLabel() {
      this.$refs.passwordLabel.style.cssText =
        "top: -17px; left: 0; font-size: 12px";
    },
    blurPasswordLabel() {
      this.password.length > 0
        ? (this.$refs.passwordLabel.style.cssText =
            "top: -17px; left: 0; font-size: 12px")
        : (this.$refs.passwordLabel.style.cssText =
            "top: 10px; left: 10px; font-size: 16px;");
    },
    moveUsernameLabel() {
      this.$refs.userLabel.style.cssText =
        "top: -17px; left: 0; font-size: 12px";
    },
    blurUsernameLabel() {
      this.username.length > 0
        ? (this.$refs.userLabel.style.cssText =
            "top: -17px; left: 0; font-size: 12px")
        : (this.$refs.userLabel.style.cssText =
            "top: 10px; left: 10px; font-size: 16px;");
    }
  }
};
</script>

<style lang="scss" scoped>
.login-page {
  background: #fefefe;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  .login-form {
    border-radius: 10px;
    box-shadow: 7px 7px 15px rgba(55, 84, 170, 0.15), -7px -7px 20px white,
      inset 0px 0px 4px rgba(255, 255, 255, 0),
      inset 7px 7px 15px rgba(55, 84, 170, 0.15), inset -7px -7px 20px white,
      0px 0px 4px rgba(255, 255, 255, 0.2) !important;
    font-family: "Overlock", cursive;
    animation: shadow 10s ease infinite;
    padding: 20px;
    fieldset {
      position: relative;
      box-sizing: border-box;
      border: none;
      outline: none;
      display: flex;
      align-items: center;
      border-radius: 8px;
      padding: 0;
      margin: 20px 0;
      label {
        position: absolute;
        top: 10px;
        left: 10px;
        font-size: 16px;
        left: 20px;
        transition: all 0.2s ease-in-out;
        padding: 0 5px;
        background-color: transparent;
        animation: textColor 10s ease infinite;
      }
      input {
        padding: 20px;
        font-size: 12px;
        font-family: inherit;
        flex: 1 1;
        border-radius: 8px;
        background-color: transparent;
        border: 0;
        outline: 0;
        width: 100%;
        animation: textColor 10s ease infinite;
        box-shadow: 7px 7px 15px rgba(55, 84, 170, 0.15), -7px -7px 20px white,
          inset 0px 0px 4px rgba(255, 255, 255, 0),
          inset 7px 7px 15px rgba(55, 84, 170, 0.15), inset -7px -7px 20px white,
          0px 0px 4px rgba(255, 255, 255, 0.2) !important;
        &[type="submit"] {
          box-shadow: -4px -4px 8px #fff, 4px 4px 8px #a3b1c6,
            0 0 0 transparent inset, 0 0 0 transparent inset;
          transition: box-shadow 0.1s ease-in-out;

          &:active {
            box-shadow: 0 0 0 transparent, 0 0 0 transparent,
              4px 4px 8px #a3b1c6 inset, -4px -4px 8px #fff inset;
          }
        }
      }
    }
  }
  span {
    display: block;
    animation: textColor 10s ease infinite;
  }
}
@keyframes textColor {
  0% {
    color: #7e0fff;
  }
  50% {
    color: #ff7b0f;
  }
  100% {
    color: #7e0fff;
  }
}
@keyframes shadow {
  20% {
    box-shadow: inset 8px 8px 8px #cbced1, inset -8px -8px 8px #ffffff;
    transform: rotateY(10deg) translateX(1px) perspective(1px);
  }
  40% {
    box-shadow: none;
    transform: rotateY(0) translateX(0) perspective(1px);
  }
  60% {
    box-shadow: 8px 8px 8px #cbced1, -8px -8px 8px #ffffff;
    transform: rotateY(-10deg) translateX(-1px) perspective(1px);
  }
  80% {
    box-shadow: 0;
    transform: rotateY(0) translateX(0) perspective(1px);
  }
}
</style>
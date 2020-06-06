<template>
  <section class="loginpage">
    <form
      @submit.prevent="loginUser"
      class="login-form"
      action="#"
    >
      <fieldset>
        <label for="name">Username</label>
        <input
          type="text"
          v-model="username"
        />
      </fieldset>
      <fieldset>
        <label for="password">Password</label>
        <input
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
    </form>
  </section>
</template>

<script>
export default {
  data: () => ({
    username: "",
    password: ""
  }),
  methods: {
    loginUser() {
      switch (this.username) {
        case "admin":
          this.password == "bemossadmin"
            ? this.$router.push("WebApp")
            : this.error("Your id or password is incorrect");
          break;
        case "manager":
          this.password == "bemossadmin"
            ? this.$router.push("WebApp")
            : this.error("Your id or password is incorrect");
          break;
        default:
          if (this.userList.includes(this.username)) {
            let index = this.userList.indexOf(this.username);
            this.password == this.userList[index].password
              ? this.$router.push("WebApp")
              : this.error("Your id or password is incorrect");
          }
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.login-page {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .login-form {
    font-family: "Overlock", cursive;
    box-shadow: 7px 7px 15px rgba(55, 84, 170, 0.15),
      -7px -7px 20px rgba(255, 255, 255, 1),
      inset 0px 0px 4px rgba(255, 255, 255, 0),
      inset 7px 7px 15px rgba(55, 84, 170, 0.15),
      inset -7px -7px 20px rgba(255, 255, 255, 1),
      0px 0px 4px rgba(255, 255, 255, 0.2) !important;
    padding: 20px;
    fieldset {
      box-sizing: border-box;
      input {
        padding: 12px 8px;
        font-size: 14px;
        font-family: inherit;
      }
    }
  }
}
</style>
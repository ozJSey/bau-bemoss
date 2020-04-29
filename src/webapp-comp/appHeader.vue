<template>
  <header>
    <div class="top-menu">
      <div class="logo">
        <h1> bau<em>Bemoss</em></h1>
      </div>
      <div class="side-menu">
        <a class="notification">
          <font-awesome-icon
            class="icons"
            icon="bell"
          ></font-awesome-icon>
          <span>{{notification.length}}</span>
        </a>
        <a
          href=""
          class="account"
        >
          <font-awesome-icon
            class="icons"
            icon="user"
          ></font-awesome-icon>
          {{user}}
        </a>
        <a
          href=""
          class="logout"
        >
          <font-awesome-icon
            class="icons"
            icon="power-off"
          ></font-awesome-icon>
          Logout
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data: () => ({
    user: "Admin",
    notification: [
      "check thermostat",
      "check thermostat",
      "check thermostat",
      "check thermostat"
    ]
  })
};
</script>

<style lang="scss">
header {
  font-family: "Fredoka One", cursive;
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1;
  background-color: #fff;
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
</style>
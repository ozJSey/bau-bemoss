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
  top: 0;
  left: 0;
  background-color: #fff;
  box-shadow: 50px 50px 40px 1px rgba(0, 0, 0, 0.266);
  width: 100%;
  border-bottom: 4px solid #6200ff;
  .top-menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
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
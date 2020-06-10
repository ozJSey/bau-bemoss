<template>
  <section class="manage-users">
    <appTitle message="Manage Users"></appTitle>
    <div class="user-list">
      <ul class="users">
        <li
          v-for="u in Users"
          :key="u.id"
        >
          <span> {{u.name}} </span>
          <input
            :type="u.reveal ? 'text' : 'password'"
            v-model="u.password"
            name=""
            id=""
            :disabled="!u.editable"
          >
          <div class="btn-group">
            <button
              :disabled="u.id == 0"
              @click="u.reveal = !u.reveal"
            >
              <font-awesome-icon :icon="u.reveal ? 'eye-slash' : 'eye'"></font-awesome-icon>
            </button>
            <button @click="u.editable = !u.editable">
              <font-awesome-icon icon="edit"></font-awesome-icon>
            </button>
            <button
              v-if="u.deletable"
              @click="removeUser(u.id)"
            >
              <font-awesome-icon icon="user-slash"></font-awesome-icon>
            </button>
          </div>
        </li>

      </ul>
    </div>
  </section>
</template>

<script>
import appTitle from "../webapp-inner/appTitle.vue";
export default {
  data: () => ({
    Users: [
      {
        name: "Admin",
        id: 0,
        password: "bemossadmin",
        editable: false,
        reveal: false
      },
      {
        name: "Manager",
        id: 1,
        password: "bemossmanager",
        editable: false,
        reveal: false
      },
      {
        name: "User1",
        id: 2,
        password: "test",
        editable: false,
        reveal: false,
        deletable: true
      },
      {
        name: "Ozgur",
        id: 3,
        password: "test",
        editable: false,
        reveal: false,
        deletable: true
      }
    ]
  }),
  components: {
    appTitle
  },
  methods: {
    removeUser(id) {
      this.Users = this.Users.filter(e => e.id !== id);
    }
  }
};
</script>

<style lang="scss" scoped>
@mixin mobile {
  @media (max-width: 768px) {
    @content;
  }
}
.user-list {
  font-family: "Overlock", cursive;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  .users {
    padding-inline-start: 0;
    list-style: none;
    li {
      display: flex;
      justify-content: space-between;
      margin: 5px 0;
      align-items: center;
      span,
      input,
      div {
        flex: 0 0 33%;
        min-width: 150px;
        max-width: 33%;
        @include mobile {
          min-width: 50px;
        }
      }
      input {
        height: 35px;
        border-radius: 5px;
        padding: 0 5px;
      }
      .btn-group {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        button {
          padding: 5px;
          margin: 0 2px;
          line-height: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 35px;
          height: 35px;
          opacity: 0.8;
          border-radius: 8px;
          transition: all 0.2s;
          font-size: 15px;
          box-shadow: 0 0 10px 5px rgba(110, 110, 110, 0.1);
          border: 0.3px solid gray;
          -webkit-tap-highlight-color: transparent; /* for removing the highlight */
          &:hover {
            opacity: 1;
          }
          &:nth-child(1) {
            background-color: #fdc200;
            color: white;
          }
          &:nth-child(2) {
            background-color: #00f5fd;
            color: white;
          }
          &:nth-child(3) {
            background-color: #fd0037;
            color: white;
          }
          &:active {
            transform: translateY(-7px);
            font-size: 20px;
          }
          &:disabled {
            opacity: 0.4;
            pointer-events: none;
          }
          &:focus {
            outline: none;
            border: none;
            border: 0.3px solid gray;
          }
        }
      }
    }
  }
}
</style>
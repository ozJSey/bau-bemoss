<template>
  <section class="notifications">
    <h3 class="fff">Add New Notification</h3>
    <div class="notification-header">
      <fieldset
        @click="focusInput($event, 0)"
        class="input-fieldset"
        :class="{'expanded' : titleExpanded}"
      >
        <input
          class="notif-input"
          type="text"
          placeholder="Title"
          v-model="notificationTitle"
          @blur="notificationTitle == '' ? titleExpanded = false : titleExpanded = true"
        />
      </fieldset>
      <fieldset
        @click="focusInput($event, 1)"
        class="input-fieldset"
        :class="{'expanded' : expanded}"
      >
        <input
          class="notif-input"
          type="text"
          placeholder="Note"
          v-model="notificationDesc"
          @blur="notificationDesc == '' ? expanded = false : expanded = true"
        />
      </fieldset>
      <div class="add">
        <font-awesome-icon
          class="icons color-ba"
          icon="calendar"
        ></font-awesome-icon>
        <date-pick v-model="date">
          <template v-slot:default="{toggle, inputValue}">
            <input
              type="submit"
              class="placeholder-btn"
              @click="toggle"
              :value="inputValue || 'Add a date (Optional)'"
            >
          </template>
        </date-pick>
        <button
          class="btn-add"
          @click="addNotif"
        >
          <font-awesome-icon
            class="icons"
            icon="plus"
          ></font-awesome-icon>
        </button>
      </div>
    </div>
    <ul class="notification-list">
      <li
        v-for="n in computedNotifications"
        :key="n.id"
      >
        <strong> {{n.title}} </strong>
        <p> {{n.desc}} </p>
      </li>
    </ul>
  </section>
</template>

<script>
import DatePick from "vue-date-pick";
import "vue-date-pick/dist/vueDatePick.css";
export default {
  data: () => ({
    notificationDesc: "",
    notificationTitle: "",
    date: "",
    notificationData: {},
    expanded: false,
    titleExpanded: false
  }),
  props: {
    allNotifications: {
      type: Object
    }
  },
  computed: {
    computedNotifications: {
      get() {
        return this.allNotifications;
      },
      set(value) {
        this.notificationData = value;
      }
    }
  },
  methods: {
    addNotif() {
      let currentLenght = Number(Object.keys(this.allNotifications).length) + 1;
      let newEntry = {
        id: currentLenght,
        title: this.notificationTitle,
        desc: this.notificationDesc
      };
      this.allNotifications["n" + currentLenght] = newEntry;
      this.notificationTitle = "";
      this.notificationDesc = "";
      this.expanded = false;
      this.titleExpanded = false;
    },
    focusInput(e, d) {
      e.target.firstChild ? e.target.firstChild.focus() : null;
      switch (d) {
        case 0:
          this.titleExpanded = true;
          break;
        case 1:
          this.expanded = true;
          break;
        default:
          break;
      }
    }
  },
  components: {
    DatePick
  },
  mounted() {
    this.notificationData = this.allNotifications;
  }
};
</script>

<style lang="scss">
.notifications {
  font-family: "Overlock", cursive;
  .fff {
    margin: 5px 0;
    font-family: "Fredoke One", cursive;
  }
  padding: 30px;
  .notification-header {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .input-fieldset {
      flex-grow: 1;
      position: relative;
      padding: 0;
      margin: 0 5px 0 0;
      outline: none;
      border: 0;
      border-bottom: 1px solid gray;
      &.expanded {
        border-bottom: 1px solid transparent;
        &::after {
          content: "";
          flex-grow: 1;
          position: absolute;
          left: 50%;
          bottom: -2px;
          height: 2px;
          background-color: #6200ff;
          width: 50px;
          transition: all 0.4s;
          animation: fill 0.2s ease-in-out forwards;
        }
      }
      .notif-input {
        padding: 8px 5px;
        width: 100%;
        border: none;
        &:focus {
          border: none;
          outline: none;
        }
      }
    }
    .add {
      height: 35px;
      .vdpComponent input {
        padding: 8px 5px;
        margin: 0 5px;
      }
      .placeholder-btn {
        min-width: 136px;
        background-color: rgba(255, 255, 255, 0.00001);
        height: 100%;
        border: none;
        border-bottom: 1px solid rgba(110, 110, 110, 0.9);
        &:focus {
          border: none;
          outline: none;
          border-bottom: 1px solid gray;
        }
      }
      .color-ba {
        color: #bada55;
      }
      .btn-add {
        height: 100%;
        margin: 0 5px;
        padding: 5px 10px;
        line-height: 1;
        background-color: rgb(186, 218, 85);
        border-color: white;
        border-style: solid;
        outline: 0;
        cursor: pointer;
        color: white;
        box-shadow: 0 0 10px 5px rgba(110, 110, 110, 0.1);
        border-radius: 8px;
        transition: all 0.4s;
        &:hover {
          box-shadow: 0 0 10px 5px rgba(186, 218, 85, 0.5);
        }
      }
    }
  }
  .notification-list {
    padding-inline-start: 0;
    list-style: none;
    strong {
      color: #bada55;
    }
    p {
      margin: 5px 0 10px;
    }
  }
}
@keyframes fill {
  to {
    left: 0;
    width: 100%;
  }
}
</style>
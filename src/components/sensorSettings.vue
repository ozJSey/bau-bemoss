<template>
  <section>
    <a
      v-for="(d, i , index) in deviceVariations"
      :key="i"
      class="devices"
      :style="[index==0 ? {'display': 'none'} : {'display': 'flex'}]"
    >
      <div class="left">
        <h2 class="device-title"> {{i}} </h2>
        <font-awesome-icon
          class="Icon"
          :icon="appropriateIcon"
        ></font-awesome-icon> Status: {{d['DeviceStatus'] == true ? 'ON' : 'OFF'}}
        <p> {{d['DeviceLocation']}} </p>
        <div class="showtime">
          <div class="cube">
            <ul :class="d['DeviceStatus'] == true ? 'listing1' : 'listing2'">
              <li>
                <a
                  @click.capture="d['DeviceStatus'] = true"
                  class="heat"
                >
                  <span> ON </span>
                </a>
              </li>
              <li>
                <a
                  class="cold"
                  @click.capture="d['DeviceStatus'] = true"
                >
                  <i
                    class="fa fa-twitter"
                    aria-hidden="true"
                  ></i>
                  <span> TIMER </span>
                </a>
              </li>
              <li>
                <a
                  class="Off"
                  @click="d['DeviceStatus'] = false"
                >
                  <i
                    class="fa fa-google-plus"
                    aria-hidden="true"
                  ></i>
                  <span> OFF </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="right">
        <h2 class="device-title"> Additional Settings </h2>
        <div class="time-pickers">
          <div
            :class="{'shake' : d['PresenceDetected']}"
            class="timer"
          >
            <p v-if="d['PresenceDetected']">Presentece Detected</p>
            <p v-else>Presence Undetected</p>
            Turn On Enterence Light
            <button @click="d['PresenceDetected'] = false">
              <p v-if="d['PresenceDetected']">Remove Action</p>
              <p v-else>Set Action</p>
            </button>
          </div>
          <div
            class="timer"
            :class="{'shake' : d['PresenceUnDetected']}"
          >
            <p v-if="d['PresenceUnDetected']">Presentece Detected</p>
            <p v-else>Presence Undetected</p>
            Turn Off Enterence Light
            <button @click="d['PresenceUnDetected'] = false ">
              <p v-if="d['PresenceUnDetected']">Remove Action</p>
              <p v-else>Set Action</p>
            </button>
          </div>
        </div>
      </div>
    </a>
  </section>
</template>

<script>
import VueTimepicker from "vue2-timepicker";

import { Slider } from "vue-color";

export default {
  data: () => ({
    colors0: "",
    colors1: "",
    colors2: "",
    colors3: "",
    colorsArray: []
  }),
  props: {
    deviceVariations: {
      type: Object
    },
    appropriateIcon: {
      type: String
    }
  },
  components: { VueTimepicker },
  methods: {
    check(e) {
      e.target.previousElementSibling.checked == true
        ? (e.target.previousElementSibling.checked = false)
        : (e.target.previousElementSibling.checked = true);
    },
    increment(e) {
      let value = Number(
        e.target.parentNode.previousElementSibling.children[0].innerText
      );
      if (value < 35) {
        value < 9
          ? (e.target.parentNode.previousElementSibling.children[0].innerText =
              "0" + (value + 1))
          : (e.target.parentNode.previousElementSibling.children[0].innerText =
              value + 1);
      } else {
        e.target.parentNode.previousElementSibling.children[0].innerText = "35";
      }
    },
    decrement(e) {
      let value = Number(
        e.target.parentNode.previousElementSibling.children[0].innerText
      );
      if (value > 0) {
        value < 11
          ? (e.target.parentNode.previousElementSibling.children[0].innerText =
              "0" + (value - 1))
          : (e.target.parentNode.previousElementSibling.children[0].innerText =
              value - 1);
      }
    },
    revealTimer(e) {
      e.target.children[1].style.display = "none";
      e.target.children[0].style.display = "block";
    },
    revealSibling(e) {
      e.target.style.display = "none";
      e.target.previousElementSibling.style.display = "block";
    },
    updateValue(a) {
      this.colorsArray.push(a);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~vue2-timepicker/dist/VueTimepicker.css";
@mixin mobile {
  @media (max-width: 768px) {
    @content;
  }
}
.devices-wrapper {
  overflow-y: auto;
  .devices {
    display: flex;
    margin: 20px auto;
    padding: 10px 0 20px;
    border-bottom: 1px solid #6200ff;
    @include mobile {
      flex-direction: column;
      * {
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        max-width: 100% !important;
      }
    }
    flex-direction: row;
    * {
      flex-direction: row;
    }
    .left {
      flex: 0 0 50%;
      display: block;
      max-width: 50%;
    }
    .right {
      flex: 0 0 50%;
      display: block;
      max-width: 50%;
      .time-pickers {
        height: 100%;
        margin-top: auto;
        align-self: flex-end;
        display: flex;
        align-items: center;
        justify-content: space-around;
        .timer {
          &.shake {
            animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
            transform: translate3d(0, 0, 0);
            backface-visibility: hidden;
            perspective: 1000px;
          }

          text-align: center;
          box-shadow: 7px 7px 15px rgba(55, 84, 170, 0.15),
            -7px -7px 20px rgba(255, 255, 255, 1),
            inset 0px 0px 4px rgba(255, 255, 255, 0),
            inset 7px 7px 15px rgba(55, 84, 170, 0.15),
            inset -7px -7px 20px rgba(255, 255, 255, 1),
            0px 0px 4px rgba(255, 255, 255, 0.2) !important;
          padding: 10px;
          margin: 10px;
          border-radius: 8px;
          p {
            margin: 5px 0;
            text-align: center;
          }
          button {
            margin-top: 20px;
            position: relative;
            background-color: #6200ff;
            border-radius: 60px;
            padding: 10px;
            color: white;
            border: 4px solid white;
            &:focus {
              border: 4px solid white;
              outline: none;
            }
          }
        }
      }
    }
    .device-title {
      font-size: 25px;
      text-align: center;
      margin: 0 0 30px;
      background: -webkit-linear-gradient(65deg, #bada55 48% 48%, #6200ff);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .Icon {
      font-size: 100px;
      color: #6200ff;
    }
    .allow-override {
      display: flex;
      align-items: center;
      justify-content: space-between;
      p {
        margin-bottom: 10px;
      }
      input[type="checkbox"] {
        position: absolute;
        visibility: hidden;
        height: 0;
        width: 0;
      }

      label {
        margin: auto;
        cursor: pointer;
        text-indent: -9999px;
        width: 100px;
        height: 30px;
        background: grey;
        display: block;
        border-radius: 50px;
        position: relative;
      }

      label:after {
        content: "";
        position: absolute;
        top: 3px;
        left: 3px;
        width: 24px;
        height: 24px;
        background: #fff;
        border-radius: 24px;
        transition: 0.3s;
      }

      input:checked + label {
        background: #bada55;
      }

      input:checked + label:after {
        left: calc(100% - 5px);
        transform: translateX(-100%);
      }

      label:active:after {
        width: 20px;
      }
    }
  }
}
.cube {
  margin: 40px 0;
  max-width: 100%;
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    &.listing0 {
      a {
        background: #00e9fa;
        box-shadow: 0 0 20px rgb(0, 247, 255), 0 0 20px rgb(0, 247, 255),
          0 0 10px rgb(0, 247, 255);
        &::before {
          background: #00e9fa;
        }
        &::after {
          background: #00e9fa;
        }
      }
    }
    &.listing1 {
      a {
        background: #00e9fa;
        box-shadow: 0 0 20px rgb(0, 247, 255), 0 0 20px rgb(0, 247, 255),
          0 0 10px rgb(0, 247, 255);
        &::before {
          background: #00e9fa;
        }
        &::after {
          background: #00e9fa;
        }
      }
    }
    &.listing2 {
      a {
        background: #0f001d;
        box-shadow: 0 0 20px #000, 0 0 20px #000, 0 0 20px #000,
          inset 0 0 20px #000, inset 0 0 20px #000, inset 0 0 20px #000;
        &::before {
          background: #0f001d;
        }
        &::after {
          background: #0f001d;
        }
        span {
          color: white;
        }
      }
    }
    li {
      a:first-child {
        &:hover {
          background: #00e9fa;
          box-shadow: 0 0 20px rgb(0, 247, 255), 0 0 20px rgb(0, 247, 255),
            0 0 10px rgb(0, 247, 255), -50px 50px 50px rgba(0, 0, 0, 0.5);
          &::before {
            background: #00e9fa;
          }
          &::after {
            background: #00e9fa;
          }
          span {
            color: white;
          }
        }
      }
      &:nth-child(2) a {
        &:hover {
          background: #00e9fa;
          box-shadow: 0 0 20px rgb(0, 247, 255), 0 0 20px rgb(0, 247, 255),
            0 0 10px rgb(0, 247, 255), -50px 50px 50px rgba(0, 0, 0, 0.5);
          &::before {
            background: #00e9fa;
          }
          &::after {
            background: #00e9fa;
          }
          span {
            color: white;
          }
        }
      }
      &:nth-child(3) a {
        &:hover {
          background: #0f001d;
          box-shadow: 0 0 20px #000, 0 0 20px #000, 0 0 20px #000,
            inset 0 0 20px #000, inset 0 0 20px #000, inset 0 0 20px #000,
            -50px 50px 50px rgba(0, 0, 0, 0.5);
          &::before {
            background: #0f001d;
          }
          &::after {
            background: #0f001d;
          }
          span {
            color: white;
          }
        }
      }
      a {
        cursor: pointer;
        text-decoration: none;
        display: absolute;
        display: block;
        width: 90px;
        height: 35px;
        text-align: left;
        padding-left: 20px;
        transform: rotate(0) skew(0) translate(0, 0);
        transition: 0.5s;
        box-shadow: -20px 20px 10px rgba(0, 0, 0, 0.5);
        &:hover {
          transform: rotate(-20deg) skew(15deg) translate(20px, -15px);
          box-shadow: -50px 50px 50px rgba(0, 0, 0, 0.5);
          color: white;
        }
      }
    }
  }
  ul li a span {
    padding: 0;
    margin: 0;
    position: absolute;
    top: 10px;
    color: #262626;
    letter-spacing: 4px;
    transition: 0.5s;
  }
  ul li a:before {
    content: "";
    position: absolute;
    top: 6px;
    left: -12px;
    height: 100%;
    z-index: -1;
    width: 10px;
    transform: 0.5s;
    transform: rotate(0deg) skewY(-45deg);
  }
  ul li a:after {
    content: "";
    position: absolute;
    bottom: -12px;
    left: -6px;
    height: 10px;
    width: 100%;
    z-index: -1;
    background: #b1b1b1;
    transform: 0.5s;
    transform: rotate(0deg) skewX(-45deg);
  }
}
@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
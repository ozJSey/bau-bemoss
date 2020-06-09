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
        <p> Indoor temperature : {{d.IndoorTemperature}}&#8451;</p>

        <div class="allow-override">
          <p> Allow Override </p>
          <input
            type="checkbox"
            :id="'switch'+i"
            :name="'switch'+i"
          /><label
            for="switch"
            @click="check"
          >Toggle</label>
        </div>
      </div>
      <div class="right">
        <h2 class="device-title"> Additional Settings </h2>
        <div class="setters">
          <div class="set-point">
            <p> Heat Set <span> {{d['HeatSetPoint']}} </span></p>
            <div class="btn-group">
              <button @click="increment">+</button><button @click="decrement">&dash;</button>
            </div>
          </div>
          <div class="set-point">
            <p> Cold Set<span> {{d['ColdSetPoint']}} </span></p>
            <div class="btn-group">
              <button @click="increment">+</button><button @click="decrement">&dash;</button>
            </div>
          </div>
        </div>
        <div class="allow-override">
          <p> Fan Mode </p>
          <input
            type="checkbox"
            :id="'switch'+i"
            :name="'switch'+i"
          /><label
            for="switch"
            @click="check"
          >Toggle</label>
        </div>
        <div class="showtime">
          <div class="cube">
            <ul :class="'listing'+d['ThermostatMode']">
              <li>
                <a
                  @click="d['ThermostatMode'] = 0; d['DeviceStatus'] = true"
                  class="heat"
                >
                  <span> Heat </span>
                </a>
              </li>
              <li>
                <a
                  class="cold"
                  @click="d['ThermostatMode'] = 1; d['DeviceStatus'] = true"
                >
                  <i
                    class="fa fa-twitter"
                    aria-hidden="true"
                  ></i>
                  <span> Cold </span>
                </a>
              </li>
              <li>
                <a
                  class="Off"
                  @click="d['ThermostatMode'] = 2; d['DeviceStatus'] = false"
                >
                  <i
                    class="fa fa-google-plus"
                    aria-hidden="true"
                  ></i>
                  <span> Off </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </a>
  </section>
</template>

<script>
export default {
  props: {
    deviceVariations: {
      type: Object
    },
    appropriateIcon: {
      type: String
    }
  },
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
    }
  }
};
</script>

<style lang="scss" scoped>
.devices-wrapper {
  overflow-y: auto;
  .devices {
    display: flex;
    margin: 20px auto;
    padding: 10px 0 20px;
    border-bottom: 1px solid #6200ff;
    .left {
      flex: 0 0 50%;
      display: block;
    }
    .right {
      flex: 0 0 50%;
      display: block;
      .allow-override {
        margin-top: 38px;
      }
      .setters {
        display: flex;
        justify-content: flex-start;
        .set-point {
          &:first-of-type {
            margin-right: 70px;
          }
          p {
            display: flex;
            align-items: center;
            span {
              padding-left: 60px;
              font-size: 30px;
              position: relative;
              &::after {
                content: "";
                position: absolute;
                top: 50%;
                left: 5px;
                background-color: #6200ff;
                transform: translateY(-50%);
                width: 50px;
                height: 3px;
              }
            }
          }
          .btn-group {
            position: relative;
            padding-left: 20px;
            &::after {
              content: "";
              position: absolute;
              top: -24px;
              left: 0;
              height: 70px;
              width: 3px;
              background-color: #6200ff;
            }
            button {
              display: inline-block;
              line-height: 1;
              background-color: transparent;
              font-size: 20px;
              border: 2px solid #bada55;
              border-radius: 7px;
              width: 30px;
              margin: 5px;
              height: 30px;
              transition: all 0.4s ease-in-out;
              &:hover {
                background-color: rgba(186, 218, 85, 0.8);
                color: white;
              }
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
        background: #e00000;
        box-shadow: 0 0 20px #f00, 0 0 20px #f00, 0 0 20px #f00;
        &::before {
          background: #e00000;
        }
        &::after {
          background: #e00000;
        }
        span {
          color: white;
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
      &:first-child a {
        &:hover {
          background: #e00000;
          box-shadow: 0 0 20px #f00, 0 0 20px #f00, 0 0 20px #f00,
            -50px 50px 50px rgba(0, 0, 0, 0.5);
          &::before {
            background: #e00000;
          }
          &::after {
            background: #e00000;
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
</style>
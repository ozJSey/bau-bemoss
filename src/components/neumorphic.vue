<template>
  <section id="connection">
    <div class="container">
      <h2>
        Communication &amp; Protocols
        <strong>is Available from</strong>
      </h2>

      <vue-glide
        :hoverpause="true"
        class="neum-wrapper"
        :bound="true"
        :rewind="true"
        :options="options"
      >
        <vue-glide-slide class="neum">
          <img src="../assets/neum/bacnet.gif" alt srcset />
        </vue-glide-slide>
        <vue-glide-slide class="neum">
          <img src="../assets/neum/ethernet.png" alt srcset />
        </vue-glide-slide>
        <vue-glide-slide class="neum">
          <img src="../assets/neum/http.png" alt srcset />
        </vue-glide-slide>
        <vue-glide-slide class="neum">
          <img src="../assets/neum/modbus.png" alt srcset />
        </vue-glide-slide>
        <vue-glide-slide class="neum">
          <img src="../assets/neum/openAdr.png" alt srcset />
        </vue-glide-slide>
        <vue-glide-slide class="neum">
          <img src="../assets/neum/wifi.svg" alt srcset />
        </vue-glide-slide>
        <vue-glide-slide class="neum">
          <img src="../assets/neum/zigbee.png" alt srcset />
        </vue-glide-slide>
      </vue-glide>
    </div>
  </section>
</template>

<script>
import { Glide, GlideSlide } from "vue-glide-js";

export default {
  data() {
    return {
      options: {
        perView: 3,
        animationDuration: 400,
        gap: 50,
        peek: 50,
        autoplay: 5000,
        type: "carousel"
      }
    };
  },
  components: {
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide
  }
};
</script>

<style lang="scss">
#connection {
  h2 {
    font-family: "Overlock", cursive;
    color: #6200ff;
    position: relative;
    font-size: 70px;
    text-align: center;
    margin: 0;
    strong {
      font-family: "Fredoka One", cursive;
      display: block;
      color: #bada55;
      transition: all 0.4s ease;
      font-size: 20px;
      text-align: center;
      line-height: 0;
      opacity: 0.9;
      transform: translateY(-10px);
    }
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      height: 10px;
      bottom: -30px;
      width: 300px;
      box-shadow: inset 0px 5px 4px 2px rgba(255, 255, 255, 0.7);
      border-bottom-right-radius: 15px;
      border-bottom-left-radius: 15px;
      background-color: #6200ff;
    }
  }
  padding: 50px 0;
  margin-bottom: 50px;
  background-color: #ebecf0;
  .neum-wrapper {
    .neum {
      margin: 90px 0 20px;
      padding: 20px;
      border-radius: 20px;
      background-color: #ebecf0;
      box-shadow: 7px 7px 15px rgba(55, 84, 170, 0.15),
        -7px -7px 20px rgba(255, 255, 255, 1),
        inset 0px 0px 4px rgba(255, 255, 255, 0),
        inset 7px 7px 15px rgba(55, 84, 170, 0.15),
        inset -7px -7px 20px rgba(255, 255, 255, 1),
        0px 0px 4px rgba(255, 255, 255, 0.2) !important;
      img {
        width: 100%;
        height: 200px;
        object-fit: contain;
      }
    }
  }
}
</style>
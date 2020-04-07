<template>
  <section id="features">
    <div class="container">
      <h2>
        Features
        <strong>What makes it special&quest;</strong>
      </h2>
      <vue-glide
        :hoverpause="true"
        class="feature-card-wrapper"
        :bound="true"
        :rewind="true"
        :options="options"
      >
        <vue-glide-slide class="feature-card">
          <h3>Open Source/Open Architecture</h3>
          <p>BEMOSS™ is an open source operating system that is built upon VOLTTRON™ – a distributed agent platform developed by Pacific Northwest National Laboratory (PNNL). BEMOSS™ is designed to make it easy for hardware manufacturers to seamlessly interface their devices with BEMOSS™</p>
          <img src="../assets/opensrc.png" alt />
          <img src="../assets/opensrc_2.png" alt />
        </vue-glide-slide>
        <vue-glide-slide class="feature-card">
          <h3>Interoperability</h3>
          <p>BEMOSS™ is designed to work with load control devices form different manufacturers that operate on different communication technologies and data exchange protocols. These include both new commercially available products that operate on Ethernet and Wi-Fi, as well as legacy devices that operate on serial communications using Modbus RTU and BACnet MS/TP protocols.</p>
          <img src="../assets/interoperability.png" alt srcset />
        </vue-glide-slide>
        <vue-glide-slide class="feature-card">
          <h3>Plug &amp; Play</h3>
          <p>BEMOSS™ is designed to automatically discover supported devices in a building. Once discovered, devices can be monitored and controlled for the desired function.</p>
          <img src="../assets/plugplay.png" alt srcset />
        </vue-glide-slide>
        <vue-glide-slide class="feature-card">
          <h3>Cost Effectiveness</h3>
          <p>BEMOSS™ is built upon a robust open source platform that can operate on a low-cost single-board computer, such as the Odroid. This feature can contribute to its rapid deployment in small or medium-sized commercial buildings.</p>
          <img src="../assets/cost.png" alt srcset />
        </vue-glide-slide>
        <vue-glide-slide class="feature-card">
          <h3>Scalability and Ease of Deployment</h3>
          <p>With its multi-layer architecture, BEMOSS™ can be initially deployed in one zone, which can be easily expandable to the entire building</p>
          <img src="../assets/scalable.png" alt srcset />
        </vue-glide-slide>
        <vue-glide-slide class="feature-card">
          <h3>Ability to Provide Online Access</h3>
          <p>BEMOSS™ allows online access for monitoring with role-based access control</p>
          <img src="../assets/remote.png" alt srcset />
        </vue-glide-slide>
        <vue-glide-slide class="feature-card">
          <h3>Security</h3>
          <p>BEMOSS™ utilizes built-in security features provided by VOLTTRON™, and provides enhanced security features for encrypted communications.</p>
          <img src="../assets/security.png" alt srcset />
        </vue-glide-slide>
        <vue-glide-slide class="feature-card">
          <h3>Support from the Advisory Committee</h3>
          <p>BEMOSS™ system architecture has been developed in consultation with an advisory committee from the beginning of the project. As of June 2017, BEMOSS™ advisory committee comprises representatives from 22 organizations from government and industry.</p>
          <img src="../assets/commutee.png" alt srcset />
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
        peek: 0,
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
#features {
  font-family: "Overlock", cursive;
  max-width: 100vw;
  overflow: hidden;
  .container {
    padding: 50px 0 0;
  }
  .container:hover strong {
    transform: translateY(-10px);
  }
  h2 {
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
      transform: translateY(40px);
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
  .feature-card-wrapper {
    margin-top: 100px;
    overflow: visible;
    .glide__slides,
    .glide__track {
      overflow: visible !important;
    }
    .feature-card {
      border-radius: 7px;
      margin-bottom: 50px;
      transform: perspective(600px) translateY(20px) rotateY(-10deg);
      box-shadow: 10px 2px 20px 5px rgba(0, 0, 0, 0.1),
        -10px -10px 20px 5px rgba(0, 0, 0, 0.1);
      padding: 30px;
      transition: all 0.6s ease-in-out;
      h3 {
        color: #bada55;
        font-family: "Fredoka One", cursive;
      }
      img {
        max-width: 100%;
        height: auto;
      }
      &.glide__slide--active {
        transform: perspective(600px) translateY(20px) rotateY(10deg);
        & + li {
          transform: rotateY(0) translateY(40px);
        }
      }
    }
  }
}
</style>
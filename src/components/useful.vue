<template>
  <section id="useful">
    <div class="container">
      <h2>
        Technology
        <strong>Utility of BEMOSS™</strong>
      </h2>
      <div class="content-wrapper">
        <div class="content">
          <h3 class="inner-title">Targeted Buildings &amp; Load</h3>
          <p>With respect to load types, there are three major loads in commercial buildings: HVAC, lighting and plug loads. According to the data from EIA published in 2008 , electricity use by HVAC equipment, i.e., space heating, cooling and ventilation accounts for 30% of the total electricity consumption in buildings. Lighting loads constitute the majority share of electricity use at 38%. Electricity use by plug loads, i.e., office equipment, computers, etc. accounts for 6% of total electricity use in buildings. Other loads include water heating, refrigeration, elevators, etc. The figure below illustrates electricity use in buildings by load type.</p>
          <img src="../assets/target_1.png" alt srcset />
          <p>With respect to load types, there are three major loads in commercial buildings: HVAC, lighting and plug loads. According to the data from EIA published in 2008 , electricity use by HVAC equipment, i.e., space heating, cooling and ventilation accounts for 30% of the total electricity consumption in buildings. Lighting loads constitute the majority share of electricity use at 38%. Electricity use by plug loads, i.e., office equipment, computers, etc. accounts for 6% of total electricity use in buildings. Other loads include water heating, refrigeration, elevators, etc. The figure below illustrates electricity use in buildings by load type.</p>
          <img src="../assets/target_2.png" alt srcset />
        </div>
        <div id="parallaxSide" class="side-content">
          <h3 class="inner-title">Supported Communication Technologies and Protocols</h3>
          <p>Various technologies are available that allow communications between BEMOSS™ and associated load controllers in a building. These include wired technologies, like: Power Line Communication (PLC), Ethernet and Serial (RS-485); as well as, wireless ones, like: ZigBee, Wi-Fi, Z-wave and EnOcean.</p>
          <p>The full version of BEMOSS™ supports the following prevalent communication technologies: Ethernet (IEEE 802.3), Serial (RS-485), ZigBee (IEEE 802.15.4) and Wi-Fi (IEEE 802.11), as summarized in the Table below.</p>
          <img src="../assets/supported-tech.png" alt srcset />
          <p>Devices communicating using the same communication technology may utilize different data exchange protocols. For a building energy management system, there are many protocols that are popular or becoming popular. These are open standard protocols like: BACnet, Modbus, KNX, M-bus, Web, OpenADR and Smart Energy (SE), etc.</p>
          <p>BEMOSS™ v3.5 supports the following protocols: BACnet, Modbus, Web, OpenADR and SE protocols, as summarized below.</p>
          <img src="../assets/supported_tech.png" alt srcset />
        </div>
        <div class="content">
          <h3 class="inner-title">List of Supported Hardware</h3>
          <p>This “BEMOSS™ v3.5” release supports selected HVAC, lighting and plug load controllers, as shown in the table below. Please note that these devices are accessible only on the local network and require local server hardware hosting BEMOSS. For information on devices with cloud accessibility, please visit BEMControls website.</p>
          <img src="../assets/supportedH.png" alt srcset />
        </div>
        <div ref="stopper" class="pt-180 content">
          <div class>
            <h3 class="inner-title">HVAC Controllers</h3>
            <img src="../assets/havc.png" alt srcset />
          </div>
          <div class>
            <h3 class="inner-title">Lighting Load Controllers</h3>
            <img src="../assets/lightning.png" alt srcset />
          </div>
          <div class>
            <h3 class="inner-title">Plug Load Controllers</h3>
            <img src="../assets/plug.png" alt srcset />
          </div>
          <div class>
            <h3 class="inner-title">Sensors</h3>
            <img src="../assets/sensors.png" alt srcset />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      acc: 1500
    };
  },
  methods: {
    scrollAnim() {
      let thisSection = document.getElementById("useful");
      if (
        window.pageYOffset + window.innerHeight / 2 >
        this.$refs.stopper.offsetTop
      ) {
        document.getElementById("parallaxSide").removeAttribute("style");
        document.getElementById("parallaxSide").classList.value += " passive";
        window.removeEventListener("scroll", this.scrollAnim);
      } else if (
        window.pageYOffset + window.innerHeight >
        thisSection.offsetTop
      ) {
        if (this.acc > 300) {
          document.getElementById("parallaxSide").style.opacity = `1`;
          document.getElementById(
            "parallaxSide"
          ).style.transform = `translateY(${this.acc}px)`;
          this.acc -= 10;
        } else {
          document.getElementById(
            "parallaxSide"
          ).style.transform = `translateY(300px)`;
          window.removeEventListener("scroll", this.scrollAnim);
        }
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.scrollAnim);
  }
};
</script>

<style lang="scss">
#useful {
  font-family: "Overlock", cursive;
  .container:hover strong {
    transform: translateY(-10px);
  }
  .container {
    padding: 50px 0 0;
    h2 {
      color: #6200ff;
      transition: all 0.5s;
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
    .inner-title {
      font-family: "Fredoka One", cursive;
      color: #6200ff;
      font-size: 22px;
    }
    .content-wrapper {
      padding: 100px;
      display: flex;
      flex-wrap: wrap;
      p {
        margin: 50px 0;
      }
      .content {
        flex: 1 1 44%;
        margin: 3%;
        max-width: 44%;
        &.pt-180 {
          display: flex;
          flex-wrap: wrap;
          flex: 1 1 100%;
          max-width: 100%;

          > div {
            margin: 20px;
            text-align: center;
            width: calc(50% - 40px);
          }
        }
      }
      .side-content {
        transform: translateY(1500px);
        flex: 1 1 44%;
        opacity: 0;
        transition: transform 0.6s, opacity 1s;
        margin: 3%;
        max-width: 44%;
        &.passive {
          opacity: 1;
          transform: translateY(300px);
        }
      }
    }
  }
}
</style>
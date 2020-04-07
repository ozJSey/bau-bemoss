<template>
  <div id="mainBanner">
    <header>
      <nav>
        <ul>
          <li>
            <a href>Features</a>
          </li>
          <li>
            <a href>Set Up</a>
          </li>
          <li>
            <a href>Functions</a>
          </li>
          <li>
            <a href>Web App</a>
          </li>
        </ul>
      </nav>
    </header>
    <div ref="banner" class="banner">
      <div class="title">
        <h1 class="colage" ref="collage"></h1>
        <p class="project" ref="project">BEMOSS</p>
        <p class="project">Energy Management Software</p>
      </div>

      <span class="indicator">
        To application
        <span>
          <font-awesome-icon icon="arrow-down" />
        </span>
      </span>
      <button class="metal radial">
        <font-awesome-icon icon="power-off" />
      </button>
      <div ref="moreInfo" class="more-info">
        <p>More Information</p>
        <div class="mouse"></div>
      </div>
      <img ref="bannerBg" class="banner-bg" src="../assets/bau.jpg" alt srcset />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collage: "BAHCESEHIR\nUniversity"
    };
  },
  props: {
    msg: String
  },
  mounted() {
    let index = 0;
    var a = setInterval(() => {
      this.$refs.collage.innerText += this.collage.split("")[index];
      if (this.$refs.collage.innerText.length > this.collage.length - 1) {
        document.querySelector("header").classList += " top-0";
        this.$refs.moreInfo.classList += " bottom-10";
        clearInterval(a);
      }
      index++;
    }, 200);
    setTimeout(() => {
      this.$refs.bannerBg.classList += " active";
    }, 1000);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#mainBanner {
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
}

.indicator {
  position: absolute;
  top: 170px;
  right: 92px;
  font-size: 25px;
  color: #bada55;
}
.metal {
  position: absolute;
  top: 220px;
  right: 50px;
  outline: 0;
  font: bold 6em/2em sans-serif;
  text-align: center;
  color: #666;
  text-shadow: hsla(0, 0%, 40%, 0.5) 0 -1px 0, hsla(0, 0%, 100%, 0.6) 0 2px 1px;
  border-radius: 50px;
  background-color: #565656;

  transition: color 0.2s;
  &.radial {
    width: 100px;
    height: 100px;
    margin-left: auto;
    line-height: 100px;
    border-radius: 50px;
    border: 0;
    outline: 0;
    box-shadow: 0 0 2px #fff, 0 0 10px #fff, 0 0 16px #fff, 0 0 8px #6200ff,
      0 0 10px #6200ff, 0 0 12px #6200ff, 0 0 14px #6200ff,
      0 0 15px rgba(182, 255, 0, 0.5), inset 0 0 1px rgba(255, 255, 255, 0.5),
      inset 0 0 1px rgba(255, 255, 255, 0.5),
      inset 0 0 2px rgba(255, 255, 255, 0.5), inset 0 0 5px #6200ff,
      0 0 10px rgba(182, 255, 0, 0.5);
    background-image: -webkit-radial-gradient(
        50% 0,
        8% 50%,
        hsla(0, 0%, 100%, 0.5) 0,
        hsla(0, 0%, 100%, 0) 100%
      ),
      -webkit-radial-gradient(50% 100%, 12% 50%, hsla(0, 0%, 100%, 0.6) 0, hsla(
              0,
              0%,
              100%,
              0
            )
            100%),
      -webkit-radial-gradient(0 50%, 50% 7%, hsla(0, 0%, 100%, 0.5) 0, hsla(
              0,
              0%,
              100%,
              0
            )
            100%),
      -webkit-radial-gradient(100% 50%, 50% 5%, hsla(0, 0%, 100%, 0.5) 0, hsla(
              0,
              0%,
              100%,
              0
            )
            100%),
      -webkit-repeating-radial-gradient(50% 50%, 100% 100%, hsla(0, 0%, 0%, 0) 0, hsla(
              0,
              0%,
              0%,
              0
            )
            3%, hsla(0, 0%, 0%, 0.1) 3.5%),
      -webkit-repeating-radial-gradient(50% 50%, 100% 100%, hsla(0, 0%, 100%, 0)
            0, hsla(0, 0%, 100%, 0) 6%, hsla(0, 0%, 100%, 0.1) 7.5%),
      -webkit-repeating-radial-gradient(50% 50%, 100% 100%, hsla(0, 0%, 100%, 0)
            0, hsla(0, 0%, 100%, 0) 1.2%, hsla(0, 0%, 100%, 0.2) 2.2%),
      -webkit-radial-gradient(50% 50%, 200% 50%, #e5e5e5 5%, #d8d8d8 30%, #999
            100%);
  }
  &.radial::before,
  &.radial::after {
    content: "";
    top: 0;
    left: 0;
    position: absolute;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    background-image: -webkit-radial-gradient(
        50% 0,
        10% 50%,
        hsla(0, 0%, 0%, 0.1) 0,
        hsla(0, 0%, 0%, 0) 100%
      ),
      -webkit-radial-gradient(50% 100%, 10% 50%, hsla(0, 0%, 0%, 0.1) 0, hsla(
              0,
              0%,
              0%,
              0
            )
            100%),
      -webkit-radial-gradient(0 50%, 50% 10%, hsla(0, 0%, 0%, 0.1) 0, hsla(
              0,
              0%,
              0%,
              0
            )
            100%),
      -webkit-radial-gradient(100% 50%, 50% 6%, hsla(0, 0%, 0%, 0.1) 0, hsla(
              0,
              0%,
              0%,
              0
            )
            100%);
    transform: rotate(65deg);
  }
  &.radial:after {
    transform: rotate(-65deg);
  }
}

.svg-inline--fa.fa-w-16 {
  width: 0.3em;
}

.metal:hover {
  cursor: pointer;
  color: #bada55;
  text-shadow: #bada55 0 -1px 0, #bada55 0 2px 1px, #bada55 0 0 5px,
    #bada55 0 0 20px;
  box-shadow: inset #bada55 0 0 0 4px, inset #bada55 0 -1px 5px 4px,
    inset #bada55 0 -1px 0 1px, inset #bada55 0 2px 1px 1px, #bada55 0 0 2px 1px,
    #bada55 0 -5px 2px 1px, #bada55 0 1px 2px 1px;
  transition: all 0.7s ease;
}
.metal:active {
  text-shadow: none;
  box-shadow: none;
}

.banner {
  font-family: "Fredoka One", cursive;
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.67);
  background-image: linear-gradient(
    245deg,
    #592ef5 20%,
    rgba(255, 255, 255, 0.7) 20% 74%
  );
  background-size: 200% 200%;
  background-position: 100% 100%;
  display: flex;
  animation: ex 1s linear 2s 1 forwards, next ease-in 2s 1s 1 forwards;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: linear-gradient(50deg, transparent 60%, white 80% 100%);
  }
  .title {
    max-width: 70%;
    padding: 200px 100px;
    color: #592ef5;
    word-break: break-word;
    .colage {
      font-size: 100px;
      margin: 0.3em 0em 1em;
    }
    .project {
      margin-bottom: 0.3em;
      opacity: 0;
      font-size: 45px;
      color: #bada55;
      margin-top: 70px;
      animation: init 1s ease-in 5s 1 forwards;

      &:first-of-type {
        margin-left: -70px;
        animation: initLeft 0.7s ease-in 4.5s 1 forwards;
      }
      &:last-of-type {
        font-family: "Overlock", cursive;
      }
    }
  }
}
.more-info {
  font-family: "Overlock", cursive;
  position: absolute;
  display: flex;
  align-items: center;
  bottom: -100px;
  transition: bottom 0.4s ease-out;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  color: #bada55;
  margin-top: 100px;
  .mouse {
    position: relative;
    padding: 20px 12px;
    margin-left: 20px;
    background-color: #eee;
    border-radius: 20px;
    border: 2px solid #222;
    &::after {
      content: "";
      position: absolute;
      top: 8px;
      left: 10px;
      border-radius: 4px;
      width: 4px;
      height: 10px;
      background-color: #222;
      animation: mousesc 1.3s infinite;
    }
  }
  &.bottom-10 {
    bottom: 10px;
  }
}
header {
  font-family: "Overlock", cursive;
  z-index: 2;
  position: absolute;
  width: 100%;
  top: -100px;
  text-shadow: 4px 10px 20px rgba(0, 0, 0, 0.2);
  transition: top 0.4s cubic-bezier(0.075, -0.82, 0.165, 1);
  left: 0;
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    li {
      margin: 20px 20px;
      a {
        padding: 20px 50px;
        position: relative;
        color: #bada55;
        text-decoration: none;

        &::before {
          content: "";
          position: absolute;
          left: -10px;
          background-color: #bada55;
          top: 50%;
          height: 3px;
          width: 50px;
          transition: all 0.4s;
        }
        &:hover::before {
          left: 50%;
          width: 100%;
          transform: translateX(-50%);
        }
      }
    }
  }
  &.top-0 {
    top: 0;
  }
}
.banner-bg {
  position: absolute;
  max-width: 100%;
  height: 100%;
  bottom: 0;
  opacity: 0;
  bottom: -100vh;
  z-index: -1;
  transition: opacity 1s ease, bottom 0.6s ease-in;
  &.active {
    bottom: 0;
    opacity: 0.6;
  }
}
@keyframes init {
  80% {
    opacity: 0.8;
  }
  to {
    margin-top: 0;
    opacity: 1;
  }
}
@keyframes initLeft {
  80% {
    opacity: 0.8;
  }
  to {
    margin-top: 0;
    margin-left: 0;
    opacity: 1;
  }
}
@keyframes ex {
  to {
    background-position: 0 0;
    background-image: linear-gradient(
      180deg,
      #592ef5 20%,
      rgba(255, 255, 255, 0.7) 20% 74%
    );
  }
}
@keyframes next {
  to {
    background-position: 5% 25%;
  }
}
@keyframes mousesc {
  80% {
    top: 10px;
  }
}
</style>

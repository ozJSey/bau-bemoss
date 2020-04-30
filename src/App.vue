<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>-->
    <vue-page-transition name="overlay-up">
      <router-view />
    </vue-page-transition>
  </div>
</template>

<style lang="scss">
.overlay-bottom {
  background: #6200ff !important;
  z-index: 9;
}
@import url("https://fonts.googleapis.com/css2?family=Fredoka+One&family=Overlock&display=swap");
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
}
img {
  max-width: 100%;
  height: auto;
  display: inline-block;
}
</style>

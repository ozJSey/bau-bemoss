<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Fredoka+One&family=Overlock&display=swap");
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

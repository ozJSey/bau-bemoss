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

<script>
import firebase from "firebase";
firebase.initializeApp({
  apiKey: "AIzaSyBZG0FyBL_7ken77zLG1I1iogOs6C0Q8I8",
  authDomain: "bemoss-e8288.firebaseapp.com",
  databaseURL: "https://bemoss-e8288.firebaseio.com",
  projectId: "bemoss-e8288",
  storageBucket: "bemoss-e8288.appspot.com",
  messagingSenderId: "865894909056",
  appId: "1:865894909056:web:9f9340309bcf401c809265",
  measurementId: "G-TVGXQ8D9ZG"
});
import store from "../src/store/index";
export default {
  store
};
</script>

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

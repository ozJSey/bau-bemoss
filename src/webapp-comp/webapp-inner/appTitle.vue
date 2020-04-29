<template>
  <div class="title">
    <h3>{{message}}</h3>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      default: "",
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss">
.title {
  display: block;
  max-width: 100%;
  text-align: center;
  h3 {
    color: #6200ff;
    margin: 3% 15%;
    font-size: 36px;
    font-family: "Fredoka One", cursive;
  }
}
</style>
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
@mixin mobile {
  @media (max-width: 768px) {
    @content;
  }
}
.title {
  display: block;
  max-width: 100%;
  text-align: center;
  h3 {
    color: #6200ff;
    margin: 3% 15%;
    font-size: 36px;
    font-family: "Fredoka One", cursive;
    @include mobile {
      font-size: 25px;
      margin: 50px 15px;
    }
  }
}
</style>
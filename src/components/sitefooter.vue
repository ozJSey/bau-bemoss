<template>
  <footer>
    <p>
      All rights are reserved by the rightful owners
      <a href="http://www.bemoss.org/">BEMOSS™</a> Virginia Tech Faculty.
      <code>This website is avilable for pull-requests if asked. I am willing to contribute.</code>
    </p>
    <p>This website is purely for the utility of our capstone(graduation) project, which aims to utilize the system and willing to integrate it within our faculty.</p>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
@mixin mobile {
  @media (max-width: 768px) {
    @content;
  }
}
footer {
  font-family: "Overlock", cursive;
  color: white;
  padding: 50px;
  @include mobile {
    padding: 30px 16px;
    p {
      font-size: 14px;
    }
    code {
      font-size: 12px;
    }
  }
  background: #6200ff;
  a {
    color: #bada55;
  }
  code {
    line-height: 28px;
    margin-bottom: 0;
    padding: 5px;
    background: linear-gradient(
      to left,
      rgba(186, 218, 85, 0.8) 20%,
      rgba(255, 255, 255, 0.1) 60%
    );
  }
}
</style>
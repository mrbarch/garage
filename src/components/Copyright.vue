<template>
  <div>
    <div class="copyright">
      <p class="copyright-text">
        Copyright© 2021. All rights reserved.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Copyright"
}
</script>

<style lang="scss">
.copyright {
  background: linear-gradient(271.59deg, #3D5969 1.64%, #040E25 61.77%);
  color: #ffffff;
  height: 2.5rem;
  position: relative;
  margin-top: -2.5rem;
  &-text {
    font-family: Roboto-Light, sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 1.2rem;
    line-height: 1.4rem;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.2rem;
  }
}
</style>

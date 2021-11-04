<template>
  <div>
    <div class="specialization">
      <div class="container">
        <div class="specialization__block">
          <div class="specialization__block-left">
            <h2 class="specialization__block-left-title">
              What we doing?
            </h2>
            <p class="specialization__block-left-subtitle">
              Our team provides highly qualified technological support at all stages of creating your product
            </p>
          </div>
          <div class="specialization__block-right">
            <p class="specialization__block-right-text">
              <span>Marketing</span> - creating promotional pages, launching advertising campaigns
            </p>
            <p class="specialization__block-right-text">
              <span> MVP</span> - creation of a product with minimal functionality for startups
            </p>
            <p class="specialization__block-right-text">
              <span>R&D</span> - creating your product completely slave
            </p>
            <p class="specialization__block-right-text">
              <span>Crypto</span> - difficult blockchain projects, NFT and marketplaces
            </p>
            <p class="specialization__block-right-text">
              <span>Scaling</span> - bringing your products to new platforms and increasing their performance
            </p>
            <p class="specialization__block-right-text">
              <span>Support</span> - ensuring smooth operation of your products
            </p>
          </div>
        </div>
        <div class="specialization__bottom">
          <div class="specialization__bottom-text">
            <p class="h2">It's time to get to know <span>our technologies</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Specialization"
}
</script>

<style lang="scss">
.specialization {
  position: relative;
  top: -2.5rem;
  background-color: #E5E5E5;
  height: 47rem;

  &__block {
    display: flex;
    justify-content: space-between;
    width: 130rem;

    &-left {
      &-title {
        padding-top: 12.2rem;
        color: #3A5565;
        text-transform: uppercase;
      }

      &-subtitle {
        color: #181818;
        font-size: 1.8rem;
        width: 55rem;
        padding-top: 1.2rem;
      }
    }

    &-right {
      width: 65rem;
      padding-top: 12.1rem;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      height: 29rem;

      &-text {
        font-size: 1.8rem;
        color: #181818;
        width: 52rem;

        &:nth-child(5) {
          width: 55rem;
        }

        span {
          font-family: Roboto-Bold, sans-serif;

          font-weight: bold;
        }
      }
    }
  }

  &__bottom {
    &:before {
      content: '';
      position: absolute;
      background: #CA4141;
      width: 73.1rem;
      height: 12rem;
      top: 40rem;
      left: 0;
      z-index: 2;
    }
    &-text {
      text-transform: uppercase;
      color: #ffffff;
      display: flex;
      position: absolute;
      left: 35.3rem;
      bottom: -.6rem;
      z-index: 3;

      span {
        color: #16253A;
      }
    }
  }
}
</style>

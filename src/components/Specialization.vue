<template>
  <div>
    <div class="specialization">
      <div class="container">
        <div class="specialization__block">
          <div class="specialization__block-left">
            <h2 class="specialization__block-left-title" id="specialization">
              What we do?
            </h2>
            <p class="specialization__block-left-subtitle">
              We carry out turnkey development, work as a white-label and sign NDA on your terms. Our team provides
              highly qualified technological support at all stages of creating your product. </p>
          </div>
          <div class="specialization__block-right" v-scrollanimation-show>
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
              <span>Crypto</span> - building of decentralised app's, NFT marketplaces, DeFi and GameFi projects, preparation for ICO/IDO
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
            <p class="h2">It's time to look at <span>our cases</span></p>
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
  background-color: #FFFFFF;
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
      left: 42.9rem;
      bottom: -.7rem;
      z-index: 3;

      span {
        color: #16253A;
      }
    }
  }
}

@media screen and (max-width: 480px) {
  .specialization {
    position: relative;
    top: -2.5rem;
    background-color: #FFFFFF;
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
        width: 48.7rem;
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
}

@media screen and (max-width: 480px) {
  .specialization {
    position: relative;
    top: -2.5rem;
    background-color: #FFFFFF;
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

  @media screen and (max-width: 480px) {
    .specialization {
      height: 53rem;

      &__block {
        display: flex;
        flex-direction: column;
        width: 44rem;

        &-left {
          &-title {
            padding-top: 5.2rem;
          }

          &-subtitle {
            font-size: 2rem;
            width: 44rem;
            padding-top: 0rem;
          }
        }

        &-right {
          width: 44rem;
          padding-top: 5.1rem;
          height: 29rem;

          &-text {
            font-size: 1.8rem;
            color: #181818;
            width: 44rem;

            &:nth-child(5) {
              width: 44rem;
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
          width: 54.8rem;
          height: 10.5rem;
          top: 53rem;
          left: 0;
          z-index: 2;
        }

        &-text {
          text-transform: uppercase;
          color: #16253A;
          display: flex;
          position: absolute;
          left: 2rem;
          top: 55rem;
          z-index: 3;

          span {
            color: #16253A;
          }
        }
      }
    }
  }
}

</style>

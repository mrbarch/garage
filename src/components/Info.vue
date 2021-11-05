<template>
  <div>
    <div class="info">
      <div class="container">
        <div class="info-bg">GARAGE</div>
        <div class="info__block">
          <div class="info__block-left">
            <div class="info__block-left-item">
              <p class="info__block-left-title h3">
                Optimising process
              </p>
              <div class="info__block-left-bottom">
                <img src="./../assets/img/analystic-team.png" alt="design-team" class="info__block-left-bottom-img">
                <p class="info__block-left-bottom-text">
                  Our analysts can help to build a strategy, optimize the budget and deadline, organize the development
                  process and launch the project
                </p>
              </div>
            </div>

            <div class="info__block-left-item">
              <p class="info__block-left-title h3">
                Strong development team
              </p>
              <div class="info__block-left-bottom">
                <img src="./../assets/img/dev-team.png" alt="design-team" class="info__block-left-bottom-img dev-img">
                <p class="info__block-left-bottom-text">
                  Our developers have a huge experience in the development of websites, applications and CRM- systems
                  for business. So you will receive an optimized product wery fast
                </p>
              </div>
            </div>

            <div class="info__block-left-item">
              <p class="info__block-left-title h3">
                Great design team
              </p>
              <div class="info__block-left-bottom">
                <img src="./../assets/img/design-team.png" alt="design-team"
                     class="info__block-left-bottom-img design-img">
                <p class="info__block-left-bottom-text">
                  Our designers can make the most complex project easy to use for your users. They are a wizards of UX
                  and UI
                </p>
              </div>
            </div>

            <div class="info__block-left-item">
              <p class="info__block-left-title h3">
                Unbelievable marketing team
              </p>
              <div class="info__block-left-bottom">
                <img src="./../assets/img/marketing-team.png" alt="marketing-team"
                     class="info__block-left-bottom-img marketing-img">
                <p class="info__block-left-bottom-text">
                  We combining marketing with technologies and provide a full range of services from planning and
                  development to SEO and promotion.
                </p>
              </div>
            </div>
          </div>
          <div class="info__block-right">
            <div class="info__block-right-text">
              GARAGE was founded in 2017 year for help companies to achieve their business goals on the Web in the best
              way. Our designers, UI/UX specialists, web developers and digital marketers work together to create
              beautiful, well-organized, and unique solutions.
              <br>
              <br>
              Every website or app from our company is secure and built on latest versions of open source content
            </div>
            <button class="btn-white info__block-right-btn">Just start a work</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Info"
}
</script>

<style lang="scss">
.dev-img {
  width: 8.719rem !important;
}

.design-img {
  width: 9rem !important;
}

.marketing-img {
  width: 8.719rem !important;
}


.info {
  background: linear-gradient(271.59deg, #3D5969 1.64%, #040E25 61.77%);
  height: 91rem;
  position: relative;
  z-index: 1;
  &-bg {
    position: absolute;
    font-family: VIVITA-Medium, sans-serif;
    font-weight: 400;
    font-size: 28.8rem;
    line-height: 34.6rem;
    z-index: 0;
    opacity: 0.1;
    left: 38rem;
    top: 28rem;
  }

  &__block {
    padding-top: 8rem;
    display: flex;
    justify-content: space-between;
    width: 120rem;
    &-left {
      &-item {
        padding-bottom: 4.4rem;

        &:nth-child(2) {
          padding-bottom: 5.9rem;
        }

        &:nth-child(3) {
          padding-bottom: 4rem;
        }
      }

      &-title {
        color: #64869A;
      }

      &-bottom {
        display: flex;
        justify-content: space-between;
        width: 53.7rem;
        padding-top: 3.6rem;

        &-text {
          font-size: 1.8rem;
          width: 37rem;
        }

        &-img {
          width: 8.43rem;
        }
      }
    }
    &-right {
      padding-top: 6.3rem;
      &-text {
        font-size: 1.8rem;
        width: 55rem;
      }
      &-btn {
        margin-top: 8.4rem;
        font-family: Roboto-Regular, sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 2rem;
        line-height: 2.3rem;
        color: #1D1D1D;
        padding: .8rem 2rem;
        width: 19rem;
      }
    }
  }
}
@media screen and (max-width: 480px) {

  .info {
    height: 127rem;
    &-bg {
      display: none;
    }
    &__block {
      padding-top: 8rem;
      display: flex;
      flex-direction: column;
      width: 120rem;
      &-left {
        &-item {
          padding-bottom: 6.4rem;
          &:nth-child(2) {
            padding-bottom: 6.9rem;
          }
          &:nth-child(3) {
            padding-bottom: 7rem;
          }
        }

        &-bottom {
          width: 48.7rem;
          padding-top: 2.6rem;

          &-text {
            font-size: 1.8rem;
            width: 37rem;
          }

          &-img {
            width: 8.43rem;
          }
        }
      }
      &-right {
        padding-top: 3.3rem;
        &-text {
          font-size: 2rem;
          width: 47rem;
        }
        &-btn {
          margin-top: 4.4rem;
          padding: .8rem 1.8rem;
        }
      }
    }
  }
}
</style>

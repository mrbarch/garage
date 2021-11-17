<template>
  <div style="position:relative;">
    <div class="info" >
      <div class="container">
        <div class="info-bg">GARAGE</div>
        <div class="info__block">
          <div class="info__block-left">

            <div class="info__block-left-item" v-scrollanimation-welcome1>
              <p class="info__block-left-title h3">
                Process optimization
              </p>
              <div class="info__block-left-bottom">
                <img src="./../assets/img/analytic-team.svg" alt="design-team" class="info__block-left-bottom-img">
                <p class="info__block-left-bottom-text">
                  Our analysts can help you build a strategy, optimize your budget and deadlines, organize the
                  development process and launch a project.
                </p>
              </div>
            </div>

            <div class="info__block-left-item" v-scrollanimation-welcome2>
              <p class="info__block-left-title h3">
                Strong development team
              </p>
              <div class="info__block-left-bottom">
                <img src="./../assets/img/dev-team.svg" alt="design-team" class="info__block-left-bottom-img dev-img">
                <p class="info__block-left-bottom-text">
                  Our developers have huge experience in developing websites and services, applications and CRM systems
                  for business. So you will receive an optimized product very quickly.
                </p>
              </div>
            </div>

            <div class="info__block-left-item" v-scrollanimation-welcome3>
              <p class="info__block-left-title h3">
                Great design team
              </p>
              <div class="info__block-left-bottom">
                <img src="./../assets/img/design-team.svg" alt="design-team"
                     class="info__block-left-bottom-img design-img">
                <p class="info__block-left-bottom-text">
                  Our designers can make the most complex project easy to use for your users. They are a wizards of UX
                  and UI
                </p>
              </div>
            </div>

            <div class="info__block-left-item" v-scrollanimation-welcome4>
              <p class="info__block-left-title h3">
                Incredible marketing team
              </p>
              <div class="info__block-left-bottom">
                <img src="./../assets/img/marketing-team.svg" alt="marketing-team"
                     class="info__block-left-bottom-img marketing-img">
                <p class="info__block-left-bottom-text">
                  We combine marketing with technologies and provide a full range of services from planning and
                  development to SEO and promotion.
                </p>
              </div>
            </div>
          </div>
          <div class="info__block-right">
            <div class="info__block-right-text">
              GARAGE was founded in 2017 to help companies achieve their online business goals in the best possible way.
              Our designers, UI / UX specialists, web developers and digital marketers work together to create
              beautiful, well-organized and unique IT solutions.
              <br>
              <br>
              Every website or application of our company is secure and built on the latest versions of open source
              content.
            </div>
            <button class="btn-white info__block-right-btn" @click="showPopup">Let's get started</button>
          </div>
        </div>
        <div class="modal-show-info" v-if="showModalInfo" @click.self="onClickOutsideInfo">
          <UserForm style="position:relative; left: 67rem; top: 20rem" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserForm from "./UserForm";

export default {
  name: "Info",
  data() {
    return {
      showModalInfo: false,
    }
  },
  components: {
    UserForm
  },
  methods: {
    showPopup() {
      this.showModalInfo = true
    },
    onClickOutsideInfo () {
      this.showModalInfo = false
    },
  }
}
</script>

<style lang="scss">

.modal-show-info {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 11;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 6rem;
  border-radius: 5px;
  box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.7);
}

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
  z-index: 1;

  &-bg {
    position: absolute;
    font-family: VIVITA-Medium, sans-serif;
    font-weight: 400;
    font-size: 28.8rem;
    line-height: 34.6rem;
    z-index: -1;
    opacity: 0.1;
    left: 2rem;
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
        z-index: 3;
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
      width: 44rem;

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

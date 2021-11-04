<template>
  <div>
    <div class="guaranted">
      <div class="container">
        <p class="guaranted__title h2">
          Welcome to GARAGE
        </p>
        <div class="guaranted__subtitle">
          <p>
            We are GARAGE. The team of highly qualified engineers and creators
            that helps your business to launch and grow
          </p>
        </div>
        <h5 class="guaranted__text">
          We guaranted for you
        </h5>
        <div class="guaranted__skills-block">
          <div class="guaranted__item">
            <img src="./../assets/img/ui-ux.png" alt="ui-ux" class="guaranted__item_img">
            <p class="guaranted__item_text">
              Perfect UX/UI Design
            </p>
          </div>

          <div class="guaranted__item">
            <img src="./../assets/img/dev-skills.png" alt="dev-skills" class="guaranted__item_img">
            <p class="guaranted__item_text">
              High skill development
            </p>
          </div>

          <div class="guaranted__item">
            <img src="./../assets/img/marketing.png" alt="marketing" class="guaranted__item_img">
            <p class="guaranted__item_text">
              Professional marketing
            </p>
          </div>
        </div>
        <div class="guaranted__bottom">
          <div class="guaranted__bottom-text">
            <p class="h2">GARAGE know <span>how Internet is works</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WelcomeToGarage"
}
</script>

<style lang="scss">
.guaranted {
  background-color: #E5E5E5;
  height: 55.3rem;
  position: relative;

  &__title {
    padding-top: 7.8rem;
    display: flex;
    justify-content: center;
    color: #3A5565;
    text-transform: uppercase;
  }

  &__subtitle {
    justify-content: center;
    width: 55rem;
    display: flex;
    margin: auto;
    text-align: center;
    padding-top: 1.8rem;
    p {
      color: #181818;
      font-size: 1.8rem;
      line-height: 2.1rem;
    }
  }
  &__text {
    color: #000000;
    display: flex;
    justify-content: center;
    padding-top: .8rem;
  }
  &__skills-block {
    display: flex;
    justify-content: space-between;
    width: 113rem;
    margin: 4rem auto;
    margin-left: 4rem;
  }
  &__item {
    color: #000000;
    font-size: 1.8rem;
    display: flex;
    height: 10rem;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    img {
      width: 8rem;
    }
    &:nth-child(1) {
      padding-top: 4rem !important;
      height: 13.5rem;
    }
    &:nth-child(2) {
      padding-top: 4rem !important;
      height: 13rem;
      padding-left: .7rem;
    }
    &:nth-child(3) {
      padding-top: 3rem !important;
      height: 14.3rem;
    }
  }
  &__bottom {
    padding-top: 3.8rem;
    display: flex;
    &:before {
      content: '';
      position: absolute;
      background: #CA4141;
      width: 74.2rem;
      height: 11.9rem;
      top: 48.5rem;
      right: 0;
      z-index: 2;
    }
    &-text {
      text-transform: uppercase;
      color: #16253A;
      display: flex;
      position: absolute;
      right: 37.8rem;
      z-index: 3;
      span {
        color: #ffffff;
      }
    }
  }
}
</style>

<template>
  <div>
    <header>
      <div class="header__container">
        <div class="header__block">
          <div class="media-screen">
            <Slide :isOpen="open">
              <span class="header__menu-list-item h3">About Us</span>
              <span class="header__menu-list-item h3">Services</span>
              <button class="btn-white header__menu-btn h3">
                Let’s Talk
              </button>
            </Slide>
          </div>
          <p class="header__logo">
            GARAGE
          </p>
          <div class="header__menu">
            <ul class="header__menu-list">
              <li class="header__menu-list-item h3">About Us</li>
              <li class="header__menu-list-item h3">Services</li>
            </ul>
            <button class="btn-white header__menu-btn h3">
              Let’s Talk
            </button>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import {Slide} from "vue-burger-menu";

export default {
  name: "Header",
  components: {
    Slide
  },
  data() {
    return {
      open: false
    };
  },
  methods: {},
}
</script>

<style lang="scss">
header {
  position: absolute;
}

.media-screen {
  display: none;
}

.header {
  &__container {
    width: 164rem;
    margin: 0 10rem 0 18rem;
  }

  &__block {
    display: flex;
    height: 10.3rem;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    font-family: VIVITA-Medium, sans-serif;
    font-weight: 400;
    font-size: 4.8rem;
    line-height: 5.8rem;
    color: #ffffff;
    margin: 0;
    z-index: 1;
  }

  &__menu {
    display: flex;
    justify-content: space-between;
    width: 54.4rem;

    &-list {
      display: flex;
      justify-content: space-between;
      margin: 0;
      align-items: center;
      width: 24.4rem;
      padding: 0;
    }

    &-btn {
      padding: 0 7.2rem;
      height: 4.3rem;
    }
  }
}

@media screen and (max-width: 480px) {
  .media-screen {
    display: block;
  }
  .header {
    &__container {
      width: 48.4rem;
      margin: 0 3rem 0 3rem;
    }
    &__logo {
      padding-top: 1.1rem;
    }

    &__menu {
      display: none;
      &-list {
        &-item {
          font-size: 3rem;
        }
      }

      &-btn {
        margin-left: 2rem;
        margin-top: 3rem;
        display: flex;
        align-items: center;
        padding: 0 2rem;
      }
    }
  }
  .bm-burger-bars {
    background-color: #fff;
  }
}

</style>

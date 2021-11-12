<template>
  <div>
    <header>
      <div class="header__container">
        <div class="header__block">
          <div class="media-screen">
            <Slide :isOpen="open">
              <a href="#welcome" class="header__menu-list-item h3">About Us</a>
              <a href="#specialization" class="header__menu-list-item h3">Services</a>
              <button class="btn-white header__menu-btn h3">
                Let’s Talk
              </button>
            </Slide>
          </div>
          <img src="./../assets/img/logo.svg" alt="logo" class="header__logo">
          <div class="header__menu">
            <div class="header__menu-list">
              <a class="header__menu-list-item h3" href="#welcome">About Us</a>
              <a class="header__menu-list-item h3" href="#specialization">Services</a>
            </div>
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
    width: 162rem;
    margin: 0 10rem 0 18rem;
  }

  &__block {
    display: flex;
    height: 10.3rem;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    width: 19.5rem;
    background-color: transparent;
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
      &-item {
        color: #ffffff;
        &:hover {
          color: lightgray;
        }
      }
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

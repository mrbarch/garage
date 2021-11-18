<template>
  <div style="position:relative;">
    <header>
      <div class="header__container">
        <div class="header__block">
          <div class="media-screen">
            <Slide :isOpen="open" :closeOnNavigation = true>
              <a href="#welcome" class="header__menu-list-item h3">About Us</a>
              <a href="#specialization" class="header__menu-list-item h3">Services</a>
              <a class="header__menu-list-item h3" href="#cases">Cases</a>
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
              <a class="header__menu-list-item h3" href="#cases">Cases</a>
            </div>
            <button @click="showPopupHeader" class="btn-white header__menu-btn h3">
              Let’s Talk
            </button>
          </div>
        </div>
      </div>
    </header>
    <div class="modal-show-header" @click.self="onClickOutsideHeader" v-if="showModalHeader">
      <UserForm style="position:relative; left: 67rem; top: 20rem"/>
    </div>
  </div>
</template>

<script>
import {Slide} from "vue-burger-menu";
import UserForm from "../components/UserForm";

export default {
  name: "Header",
  components: {
    Slide,
    UserForm
  },

  data() {
    return {
      open: false,
      showModalHeader: false,
    };
  },

  methods: {
    showPopupHeader() {
      this.showModalHeader = true
    },
    onClickOutsideHeader() {
      this.showModalHeader = false
    },
    showMenu() {
      this.open = false
    },
    hideMenu() {
      this.open = true
    }
  },
}
</script>

<style lang="scss">

.modal-show-header {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 6rem;
  border-radius: 5px;
  box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.7);
}


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
    width: 164rem;
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
    width: 69.4rem;

    &-list {
      display: flex;
      justify-content: space-between;
      margin: 0;
      align-items: center;
      width: 37.4rem;
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

    &__block {
      width: 51rem;
    }

    &__logo {
      padding: 4.4rem 2.5rem 0 0;

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

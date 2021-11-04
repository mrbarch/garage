<template>
  <div>
    <header>
      <div class="header__container">
        <div class="header__block">
          <p class="header__logo">
            GARAGE
          </p>
          <div class="header__menu">
            <ul class="header__menu-list">
              <li class="header__menu-list-item h3">About Us</li>
              <li class="header__menu-list-item h3">Portfolio</li>
              <li class="header__menu-list-item h3">Services</li>
              <li class="header__menu-list-item h3"></li>
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
export default {
  name: "Header"
}
</script>

<style lang="scss">
header {
  position: absolute;
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
    z-index: 1000;
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
      width: 44.4rem;
      padding: 0;
    }
    &-btn {
      padding: 0 7.2rem;
      height: 4.3rem;
    }
  }
}

</style>

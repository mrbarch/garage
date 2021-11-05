<template>
  <div>
    <div class="startups">
      <div class="container">
        <div class="startups__block">
          <div>
            <h1 class="startups__title startups__title-media">STARTUPS ARE BORN HERE</h1>
            <p class="startups__subtitle h3">IT solutions for good ideas</p>
            <ul class="startups__list">
              <li class="startups__list-item h5">Promo sites</li>
              <li class="startups__list-item h5">Product development</li>
              <li class="startups__list-item h5">Support</li>
            </ul>
            <div class="startups__btn btn-white">Just start a work</div>
          </div>
          <img src="./../assets/img/bg-header.svg" alt="bg-header" class="startups__block-img">
        </div>
        <div class="startups__btn-more">
          <img src="./../assets/img/btn-more.png" alt="btn-more">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StartUps"
}
</script>

<style lang="scss">
.startups {
  background: linear-gradient(271.59deg, #3D5969 1.64%, #040E25 61.77%);
  height: 73.5rem;
  width: 100%;
  padding-top: 34.5rem;

  &:before {
    content: '';
    position: absolute;
    background: #CA4141;
    width: 84.2rem;
    height: 15.8rem;
    top: 32.5rem;
  }

  &__block {
    display: flex;
    justify-content: space-between;
    width: 145.8rem;
    position: relative;

    &-img {
      position: relative;
      top: -12.5rem;
      width: 79.3rem;
    }
  }

  &__btn-more {
    padding-top: 3.7rem;
    display: flex;
    justify-content: center;

    img {
      width: 3rem;
    }
  }

  &__title {
    position: relative;
  }

  &__subtitle {
    font-family: Roboto-Light, sans-serif;
    font-weight: 300;
    padding-top: 4rem;
    margin: 0;
  }

  &__list {
    display: flex;
    justify-content: space-between;
    width: 48.2rem;
    padding: 5.3rem 0 11.3rem 0;
    position: relative;

    &-item {
      &:after {
        content: '';
        height: 1rem;
        border-radius: 5px;
        padding-left: 1rem;
        background: #CA4141;
        position: absolute;
        margin: .6rem 0 0 3.3rem;
      }

      &:last-child {
        &:after {
          background: transparent;
        }
      }
    }
  }

  &__btn {
    font-family: Roboto-Regular, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.3rem;
    width: 15rem;
    padding: .8rem 2rem;
  }
}

@media screen and (max-width: 480px) {
  .startups__block-img {
    display: none;
  }
  .startups {
    height: 53.5rem;
    width: 100%;
    padding-top: 22rem;

    &:before {
      top: 19.5rem;
      width: 54.76rem;
    }

    &__block {
      width: 48rem;
    }

    &__btn-more {
      padding-top: 9.7rem;

      img {
        width: 2.2rem;
      }
    }

    &__title {
      position: relative;

      &-media {
        font-size: 3.8rem;
      }
    }

    &__subtitle {
      margin: auto;
      display: flex;
      padding-top: 5rem;
      justify-content: center;
    }

    &__list {
      padding: 3.3rem 0 5.3rem 0;

      &-item {
        &:last-child {
          &:after {
            display: none;
          }
        }
      }
    }

    &__btn {
      margin-top: 2rem;
      display: flex;
      justify-content: center;
      margin: auto;
    }
  }
}
</style>

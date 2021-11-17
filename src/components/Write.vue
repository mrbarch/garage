<template>
  <div>
    <div class="write">
      <div class="container">
        <div class="write__block">
          <div class="write__block-left">
            <h2 class="write__block-left-title" v-scrollanimation-show>Contact us right now</h2>
            <p class="write__block-left-subtitle" v-scrollanimation-show>
              For 4 years of work, we have assembled a very qualified team of IT-engineers. We have implemented dozens
              of successful and complex projects in the field of e-commerce, sales, services, marketing and other areas.
              All of our clients are very satisfied. We will be glad to see you among them.
            </p>
            <a href="https://t.me/garagedev" class="write__block-left-btn btn-white" target="_blank">Contact us on Telegram</a>
          </div>
          <UserForm/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserForm from "./UserForm";

export default {
  name: "Write",
  components: {
    UserForm
  }
}
</script>

<style lang="scss">
.swiper-container {
  z-index: 0!important;
}
.active-error {
  opacity: 0;
}

.before-enter-show {
  opacity: 0;
  transition: 5s;
}

.enter-show {
  opacity: 1;
}


.form-input {
  outline: none;
  background-color: transparent;
  border: none;
  width: 34.6rem;
  height: 3rem;
  content: '';
  border-bottom: 1px solid #ffffff;
  font-size: 1.8rem;
  font-family: Roboto-Light, sans-serif;
  line-height: 2.1rem;
  color: #F7F7F7;
  padding-left: 1.9rem;

  &::placeholder {
    font-size: 1.8rem;
    font-family: Roboto-Light, sans-serif;
    line-height: 2.1rem;
    color: #F7F7F7;
    padding-left: 0;
  }
}

.write {
  position: relative;
  top: -2.5rem;
  background-color: #FFFFFF;
  height: 47.6rem;

  &__block {
    display: flex;
    justify-content: space-between;
    position: relative;
    width: 71rem;

    &-left {
      &-title {
        padding-top: 7.5rem;
        margin: 0;
        color: #3A5565;
        text-transform: uppercase;
      }

      &-subtitle {
        font-family: Roboto-Light, sans-serif;
        color: #181818;
        font-size: 1.8rem;
        width: 55rem;
        padding: 4rem 0 6.6rem 0;
      }

      &-btn {
        color: #ffffff;
        background: #4064E3;
        font-size: 2rem;
        line-height: 2.3rem;
        padding: .8rem 2.2rem !important;

        &:hover {
          color: #4064E3;
          background-color: #ffffff;
        }
      }
    }
  }
}

@media screen and (max-width: 480px) {
  .write {
    height: 103.6rem;

    &__block {
      flex-direction: column;
      width: 44rem;

      &-left {
        &-btn {
          width: 38.3rem;
          margin-left: 2.3rem !important;
          display: flex;
          justify-content: center;
          margin: auto;
        }

        &-title {
          padding-top: 7.5rem;
          width: 40rem;
        }

        &-subtitle {
          font-size: 2rem;
          line-height: 2.4rem;
          width: 44rem;
          padding-top: 4rem;
        }
      }

      &-right {
        &-form {
          left: 2.3rem;
          top: 48rem;
          height: 44rem;

          &-btn {
            margin-top: 3.8rem;
          }
        }
      }
    }
  }
}
</style>

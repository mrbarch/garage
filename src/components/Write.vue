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
            <!--            <button class="write__block-left-btn btn-white">Look at portfolio</button>-->
          </div>
          <div class="write__block-right">
            <div class="write__block-right-form">
              <div class="write__block-right-form-text">
                Contact us and we will help you find and implement the best IT solution for your business
              </div>
              <input type="text" placeholder="Your name" class="write__block-right-form-name form-input">
              <input type="text" placeholder="Subject" class="write__block-right-form-company form-input">
              <input type="text" placeholder="Email" class="write__block-right-form-email form-input">
              <p class="write__block-right-form-answer">We will get back to you as soon as possible!</p>
              <button class="write__block-right-form-btn btn-white">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Write"
}
</script>

<style lang="scss">
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
        padding-top: 4rem;
      }

      &-btn {
        color: #ffffff;
        background: #4064E3;
        font-size: 2rem;
        line-height: 2.3rem;
        margin-top: 8rem;
        padding: .8rem 2.2rem !important;

        &:hover {
          color: #4064E3;
          background-color: #ffffff;
        }
      }
    }

    &-right {
      &-form {
        position: absolute;
        top: -9rem;
        background: #CA4141;
        border-radius: 10px;
        height: 48rem;
        width: 35rem;
        padding: 4rem 4rem 3.8rem 4rem;

        &-text {
          font-size: 2rem;
          line-height: 2.3rem;
          font-weight: 400;
          font-family: Roboto-Regular, sans-serif;
        }

        &-name {
          margin-top: 7.5rem;
          margin-bottom: 3.8rem;
        }

        &-company {
          margin-bottom: 3.8rem;
        }

        &-email {
        }

        &-answer {
          font-family: Roboto-Regular, sans-serif;
          font-size: 1.8rem;
          padding-top: 2.2rem;
        }

        &-btn {
          border: none;
          outline: none;
          border-radius: 3px;
          display: flex;
          justify-content: center;
          margin: auto;
          font-size: 2rem;
          line-height: 2.3rem;
          padding: .7rem .7rem !important;
          margin-top: 7.8rem;
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
          margin-top: 5rem !important;
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

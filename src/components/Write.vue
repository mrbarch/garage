<template>
  <div>
    <div class="write">
      <div class="container">
        <div class="write__block">
          <div class="write__block-left">
            <h2 class="write__block-left-title">Just write to GARAGE right now</h2>
            <p class="write__block-left-subtitle">
              For 4 years of work, we have assembled a very skill team of IT engineers. We have created more than 50
              successful and complex projects in the field of e-commerce, sales, services, marketing and other areas.
              Our clients are very satisfied. So check out our portfolio
            </p>
            <button class="write__block-left-btn btn-white">Look at portfolio</button>
          </div>
          <div class="write__block-right">
            <div class="write__block-right-form">
              <div class="write__block-right-form-text">
                Сontact us, and in the near future your business will receive the best solution on the Internet
              </div>
              <input type="text" placeholder="Your name" class="write__block-right-form-name form-input">
              <input type="text" placeholder="Company" class="write__block-right-form-company form-input">
              <input type="text" placeholder="Email" class="write__block-right-form-email form-input">
              <p class="write__block-right-form-answer">We will answer to you very soon</p>
              <button class="write__block-right-form-btn">Contact Me, please</button>
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
  background-color: #E5E5E5;
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
        color: #ffffff !important;
        background: #4064E3 !important;
        font-size: 2rem;
        line-height: 2.3rem;
        margin-top: 8rem;
        padding: .8rem 2.2rem !important;
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

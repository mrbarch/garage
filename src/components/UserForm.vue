<template>
  <div>
    <div class="write__block-right">
      <div class="write__block-right-form">
        <div class="write__block-right-form-text">
          Contact us and we will help you find and implement the best IT solution for your business
        </div>
        <input type="text" placeholder="Your name" class="write__block-right-form-name form-input">
        <input type="text" placeholder="Subject" class="write__block-right-form-company form-input">
        <input type="email" placeholder="Email" v-model="email" class="write__block-right-form-email form-input" >

        <span class="write__block-right-form-email-span" v-if="!validEmail">Invalid email format</span>

        <p class="write__block-right-form-answer">We will get back to you as soon as possible!</p>
        <button class="write__block-right-form-btn btn-white" @click="isEmailValid">Send</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserForm",
  data() {
    return {
      email: '',
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      validEmail: true
    }
  },
  methods: {
    isEmailValid() {
      return (this.email === "") ? " " : (this.reg.test(this.email)) ? this.validEmail = true : this.validEmail = false
    },
  }
}
</script>

<style lang="scss">
.write__block {
  &-right {
    &-form {
      z-index: 5;
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
        margin-bottom: 1rem;
        position: relative;
        &-span {
          font-size: 1.6rem;
          line-height: 1.6rem;
          height: 1rem;
          position: absolute;
        }
      }

      &-answer {
        font-family: Roboto-Regular, sans-serif;
        font-size: 1.8rem;
        padding-top: 3rem;
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
        margin-top: 1.8rem;
      }
    }
  }
}
</style>

<template>
  <div>
    <div class="technology">
      <div class="container">
        <div class="technology__block">
          <div class="technology__block-left">
            <ul class="technology__block-left-list">
              <li class="h5 technology__block-left-list-item">
                <div class="technology__block-left-list-round"></div>
                <div class="technology__block-left-list-title">Laravel</div>
              </li>

              <li class="h5 technology__block-left-list-item">
                <div class="technology__block-left-list-round"></div>
                <div class="technology__block-left-list-title">Vue.JS</div>
              </li>

              <li class="h5 technology__block-left-list-item">
                <div class="technology__block-left-list-round"></div>
                <div class="technology__block-left-list-title">Node.JS</div>
              </li>

              <li class="h5 technology__block-left-list-item">
                <div class="technology__block-left-list-round"></div>
                <div class="technology__block-left-list-title">php</div>
              </li>

              <li class="h5 technology__block-left-list-item">
                <div class="technology__block-left-list-round"></div>
                <div class="technology__block-left-list-title">react</div>
              </li>

              <li class="h5 technology__block-left-list-item">
                <div class="technology__block-left-list-round"></div>
                <div class="technology__block-left-list-title">python</div>
              </li>

              <li class="h5 technology__block-left-list-item">
                <div class="technology__block-left-list-round"></div>
                <div class="technology__block-left-list-title">Swift</div>
              </li>
            </ul>
          </div>
          <div class="technology__block-right">
            <p class="technology__block-right-text">
              What technologies we use for creating your websites
            </p>
            <br>
            <br>
            <p class="technology__block-right-text">
              The pool of technologies of our engineers will solve any problems of your business on the Internet
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Technology"
}
</script>

<style lang="scss">
  .technology {
    background: linear-gradient(271.59deg, #3D5969 1.64%, #040E25 61.77%);
    height: 31.7rem;
    top: -2.5rem;
    position: relative;
    &__block {
      padding-top: 8rem;
      display: flex;
      justify-content: space-between;
      width: 120rem;
      &-left {
        padding-top: 4.2rem;
        &-list {
          width: 56.4rem;
          padding: 0;
          flex-wrap: wrap;
          height: 14rem;
          display: flex;
          flex-direction: column;
          &-item {
            display: flex;
            align-items: center;
            padding-bottom: 2.5rem;
          }
          &-round {
            content: '';
            background: #CA4141;
            height: 1rem;
            width: 1rem;
            border-radius: 5px 5px;
          }
          &-title {
            padding-left: 3rem;
          }
        }
      }
      &-right {
        font-size: 1.8rem;
        &-text {
          width: 55rem;
        }
      }
    }
  }

  @media screen and (max-width: 480px) {
    .technology {
      height: 49.7rem;
      &__block {
        padding-top: 8rem;
        display: flex;
        flex-direction: column;
        width: 44rem;
        &-left {
          padding-top: 4.2rem;
          &-list {
            width: 44.4rem;
          }
        }
        &-right {
          padding-top: 2rem;
          font-size: 2rem;
          &-text {
            width: 44rem;
          }
        }
      }
    }
  }
</style>

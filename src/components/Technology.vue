<template>
  <div>
    <div class="technology">
      <div class="container">
        <div class="technology__block">
          <swiper :options="swiperOptions">
            <swiper-slide>
              <div class="technology__block-bg">
                <div class="technology__block-text">

                  <div class="technology__block-item technology__block-item-first">
                    <div class="technology__block-item-title">
                      Заказчик
                    </div>
                    <h4 class="technology__block-item-text">
                      Крупная торговая компания
                    </h4>
                  </div>

                  <div class="technology__block-item technology__block-item-second">
                    <div class="technology__block-item-title">
                      Статус
                    </div>
                    <h4 class="technology__block-item-text">
                      Завершен в 2021 году.
                      Проект под NDA.
                    </h4>
                  </div>

                  <div class="technology__block-item technology__block-item-third">
                    <div class="technology__block-item-title">
                      Описание проекта
                    </div>
                    <h4 class="technology__block-item-text">
                      Автоматизированная аналитическая система. Парсинг и анализ товарных предложений мировых
                      маркетплейсов
                      (Amazon, Alibaba, AliExpress, и т.д.) Парсинг 10 млн товаров в день (категории, цены, наличие и
                      т.д.),
                      аналитика Big Data, сравнение предложений, построение диаграмм и прогнозирование трендов.
                    </h4>
                  </div>

                  <div class="technology__block-item technology__block-item-fourth">
                    <div class="technology__block-item-title">
                      Технологии
                    </div>
                    <h4 class="technology__block-item-text">
                      Python, php, vue.js, mongodb
                    </h4>
                  </div>

                  <div class="technology__block-item technology__block-item-fifth">
                    <div class="technology__block-item-title">
                      Участники проекта
                    </div>
                    <h4 class="technology__block-item-text">
                      Команда из 9 специалистов
                    </h4>
                  </div>
                </div>
              </div>
              <div class="technology__block-bottom">
                <div class="technology__block-arrows">
                  <img src="./../assets/img/arrow-slider-left.svg" alt="arrow-slider-left"
                       class="technology__block-arrow-left technology__block-arrow-common"
                       slot="button-prev">
                  <div class="technology__block-arrow-title">Analytic system</div>
                  <img src="./../assets/img/arrow-slider-right.svg" alt="arrow-slider-right"
                       class="technology__block-arrow-right technology-next__block-arrow-common"
                       slot="button-next">
                </div>
              </div>
            </swiper-slide>

            <swiper-slide class="technology-next">
              <div class="technology-next-unit">
                <div class="technology-next__block-bg">
                  <img src="./../assets/img/slide-2-bg.png" alt="slide-2-bg">
                </div>
                <div class="technology-next__block-text">
                  <div class="technology-next__block-item technology-next__block-item-buttons">
                    <h2>
                      Название проекта
                    </h2>
                    <div class="technology-next__block-arrows">
                      <img src="./../assets/img/arrow-slider-left.svg" alt="arrow-slider-left"
                           class="technology__block-arrow-left technology-next__block-arrow-common"
                           slot="button-prev">
                      <img src="./../assets/img/arrow-slider-right.svg" alt="arrow-slider-right"
                           class="technology__block-arrow-right technology-next__block-arrow-common"
                           slot="button-next">
                    </div>
                  </div>

                  <div class="technology-next__block-item technology-next__block-item-first">
                    <div class="technology-next__block-item-title">
                      Заказчик
                    </div>
                    <h4 class="technology-next__block-item-text">
                      Крупная торговая компания
                    </h4>
                  </div>

                  <div class="technology-next__block-item technology-next__block-item-second">
                    <div class="technology-next__block-item-title">
                      Статус
                    </div>
                    <h4 class="technology-next__block-item-text">
                      Завершен в 2021 году.
                      Проект под NDA.
                    </h4>
                  </div>

                  <div class="technology-next__block-item technology-next__block-item-third">
                    <div class="technology-next__block-item-title">
                      Описание проекта
                    </div>
                    <h4 class="technology-next__block-item-text">
                      Автоматизированная аналитическая система. Парсинг и анализ товарных предложений мировых
                      маркетплейсов
                      (Amazon, Alibaba, AliExpress, и т.д.) Парсинг 10 млн товаров в день (категории, цены, наличие и
                      т.д.),
                      аналитика Big Data, сравнение предложений, построение диаграмм и прогнозирование трендов.
                    </h4>
                  </div>

                  <div class="technology-next__block-item technology-next__block-item-fourth">
                    <div class="technology-next__block-item-title">
                      Технологии
                    </div>
                    <h4 class="technology-next__block-item-text">
                      Python, php, vue.js, mongodb
                    </h4>
                  </div>

                  <div class="technology-next__block-item technology-next__block-item-fifth">
                    <div class="technology-next__block-item-title">
                      Участники проекта
                    </div>
                    <h4 class="technology-next__block-item-text">
                      Команда из 9 специалистов
                    </h4>
                  </div>

                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Swiper, SwiperSlide, directive} from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "Technology",
  data() {
    return {
      swiperOptions: {
        slideToClickedSlide: false,
        spaceBetween: 0,
        slidesPerView: 'auto',
        freeMode: false,
        loop: true,
        navigation: {
          nextEl: '.technology__block-arrow-right',
          prevEl: '.technology__block-arrow-left'
        }
      }
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  }
}
</script>

<style lang="scss">
.swiper-wrapper {
  transform: translate3d(-1920 px, 0px, 0px
  ) !important;

}

.swiper-slide {
  width: 1920px !important;
}

.technology {
  background: linear-gradient(271.59deg, #3D5969 1.64%, #040E25 61.77%);
  top: -2.5rem;
  height: 77rem;
  position: relative;

  &__block {
    height: 54rem;

    &-bg {
      top: 12rem;
      position: relative;
      background: url('./../assets/img/slide-1-bg.png') no-repeat;
      background-size: cover;
      width: 120rem !important;
      height: 42rem;

      &-next-slide {
        top: 8rem;
        position: relative;
        background: url('./../assets/img/slide-2-bg.png') no-repeat;
        background-size: cover;
        width: 56rem !important;
        height: 50rem;
      }
    }

    &-text {
      display: flex;
      flex-wrap: wrap;
      width: 55rem;
      float: right;
      padding: 5rem 5rem 5.5rem 0;
    }

    &-item {
      &-text {
        font-family: Roboto-Light, sans-serif;
        font-weight: 300;
        margin: 0;
        padding-top: .5rem;
      }

      &-title {
        font-family: Roboto-Medium, sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 2rem;
        line-height: 2.3rem;
      }

      &-first {
        padding-right: 6rem;
      }

      &-third {
        padding-top: 3rem;
      }

      &-second {
        width: 24.5rem;
      }

      &-fourth {
        padding: 3.3rem 6.4rem 0 0;
      }

      &-fifth {
        padding: 3.3rem 0 0 0;
      }
    }

    &-bottom {
      padding-top: 14rem;
    }

    &-arrows {
      width: 120rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &-arrow {
      &-common {
        width: 1.6rem;
        border: 1px solid #CA4141;
        padding: 2.1rem;
        cursor: pointer;

        &:hover {
          background-color: #CA4141;
        }
      }

      &-right {

      }

      &-title {
        font-family: Roboto-Medium, sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 2rem;
        line-height: 2.3rem;
      }

      &-left {

      }
    }
  }
}

.technology-next {
  top: 8rem;
  height: 100rem;
  position: relative;

  &-unit {
    display: flex;
    justify-content: space-between;
    width: 120rem;
  }

  &__block {
    height: 54rem;

    &-bg {
      width: 56rem;
      img {
        width: 56rem;
      }
    }

    &-text {
      display: flex;
      flex-wrap: wrap;
      width: 57rem;
      float: right;
      padding: 0 5rem 5.5rem 7rem;
    }

    &-item {
      &-buttons {
        padding-bottom: 7.4rem;
        display: flex;
        width: 57rem;
        justify-content: space-between;

        h2 {
          text-transform: uppercase;
          margin: 0;
          padding-top: 1.5rem;
        }
      }

      &-text {
        font-family: Roboto-Light, sans-serif;
        font-weight: 300;
        margin: 0;
        padding-top: .5rem;
      }

      &-title {
        font-family: Roboto-Medium, sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 2.4rem;
        line-height: 2.8rem;
      }

      &-first {
        padding-right: 6rem;
      }

      &-third {
        padding-top: 3rem;
      }

      &-second {
        width: 24.5rem;
      }

      &-fourth {
        padding: 3.3rem 6.4rem 0 0;
      }

      &-fifth {
        padding: 3.3rem 0 0 0;
      }
    }

    &-bottom {
      padding-top: 14rem;
    }

    &-arrows {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 13.5rem;
      align-self: baseline;
    }

    &-arrow {
      &-common {
        width: 1.6rem;
        border: 1px solid #CA4141;
        padding: 2.1rem;
        cursor: pointer;

        &:hover {
          background-color: #CA4141;
        }
      }

      &-right {

      }

      &-title {
        font-family: Roboto-Medium, sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 2rem;
        line-height: 2.3rem;
      }

      &-left {

      }
    }
  }
}
</style>

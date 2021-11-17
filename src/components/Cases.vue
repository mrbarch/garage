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
                      Client
                    </div>
                    <h4 class="technology__block-item-text">
                      Large trading company
                    </h4>
                  </div>

                  <div class="technology__block-item technology__block-item-second">
                    <div class="technology__block-item-title">
                      Status
                    </div>
                    <h4 class="technology__block-item-text">
                      completed in 2020.
                      Project under NDA.
                    </h4>
                  </div>

                  <div class="technology__block-item technology__block-item-third">
                    <div class="technology__block-item-title">
                      Description
                    </div>
                    <h4 class="technology__block-item-text">
                      Development of a parser and analytical system for processing product offer data from the world's
                      largest marketplaces (Amazon, Alibaba, AliExpress, etc.). Parsing data on 10 million products per
                      day (categories, prices, availability, etc.), Big Data analytics, comparison
                      of offers, building charts and forecasting trends.
                    </h4>
                  </div>

                  <div class="technology__block-item technology__block-item-fourth">
                    <div class="technology__block-item-title">
                      Technologies
                    </div>
                    <h4 class="technology__block-item-text">
                      Python, PHP, Vue.js, MongoDB
                    </h4>
                  </div>

                  <div class="technology__block-item technology__block-item-fifth">
                    <div class="technology__block-item-title">
                      Team
                    </div>
                    <h4 class="technology__block-item-text">
                      9 specialists
                    </h4>
                  </div>
                </div>
              </div>
              <div class="technology__block-bottom">
                <div class="technology__block-arrows">
                  <img src="./../assets/img/arrow-slider-left.svg" alt="arrow-slider-left"
                       class="technology__block-arrow-left technology__block-arrow-common"
                       slot="button-prev">
                  <div class="technology__block-arrow-title">Automated analytical system</div>
                  <img src="./../assets/img/arrow-slider-right.svg" alt="arrow-slider-right"
                       class="technology__block-arrow-right technology__block-arrow-common"
                       slot="button">
                </div>
              </div>
            </swiper-slide>

            <swiper-slide>
              <div class="technology__block-bg technology__block-bg-second-slide">
                <div class="technology__block-text">
                  <div class="technology__block-item technology__block-item-first second-slide-item-first">
                    <div class="technology__block-item-title">
                      Client
                    </div>
                    <h4 class="technology__block-item-text">
                      OBI hypermarket chain <br>
                      (570 stores worldwide), Germany
                    </h4>
                  </div>

                  <div class="technology__block-item technology__block-item-second">
                    <div class="technology__block-item-title">
                      Status
                    </div>
                    <h4 class="technology__block-item-text">
                      completed in 2021, under maintenance, project under partial NDA.
                    </h4>
                  </div>

                  <div class="technology__block-item technology__block-item-third">
                    <div class="technology__block-item-title">
                      Description
                    </div>
                    <h4 class="technology__block-item-text">
                      CRM-system for working with contractors and clients of OBI hypermarkets, team management system,
                      multi-level access system, project workflow, including parsing and online signing of documents.
                    </h4>
                  </div>

                  <div class="technology__block-item technology__block-item-fourth">
                    <div class="technology__block-item-title">
                      Technologies
                    </div>
                    <h4 class="technology__block-item-text">
                      PHP, Laravel, Vue.js, MySQL
                    </h4>
                  </div>

                  <div class="technology__block-item technology__block-item-fifth">
                    <div class="technology__block-item-title">
                      Team
                    </div>
                    <h4 class="technology__block-item-text">
                      6 specialists
                    </h4>
                  </div>
                </div>
              </div>
              <div class="technology__block-bottom">
                <div class="technology__block-arrows">
                  <img src="./../assets/img/arrow-slider-left.svg" alt="arrow-slider-left"
                       class="technology__block-arrow-left technology__block-arrow-common"
                       slot="button-prev">
                  <div class="technology__block-arrow-title">CRM for OBI</div>
                  <img src="./../assets/img/arrow-slider-right.svg" alt="arrow-slider-right"
                       class="technology__block-arrow-right technology__block-arrow-common"
                       slot="button">
                </div>
              </div>
            </swiper-slide>

            <swiper-slide>
              <div class="technology__block-bg technology__block-bg-third-slide">
                <div class="technology__block-text">
                  <div class="technology__block-item technology__block-item-first third-slide-item-first">
                    <div class="technology__block-item-title">
                      Client
                    </div>
                    <h4 class="technology__block-item-text">
                      SovComBank, Russia
                    </h4>
                  </div>

                  <div class="technology__block-item technology__block-item-second">
                    <div class="technology__block-item-title">
                      Status
                    </div>
                    <h4 class="technology__block-item-text">
                      completed in 2019
                    </h4>
                  </div>

                  <div class="technology__block-item technology__block-item-third">
                    <div class="technology__block-item-title">
                      Description
                    </div>
                    <h4 class="technology__block-item-text">
                      A corporate website for factoring with a personal account and an online system for automatic
                      selection of factoring tariffs.
                    </h4>
                  </div>

                  <div class="technology__block-item technology__block-item-fourth third-slide-item-fourth">
                    <div class="technology__block-item-title">
                      Technologies
                    </div>
                    <h4 class="technology__block-item-text">
                      PHP, HTML5, CSS, MySQL
                    </h4>
                  </div>

                  <div class="technology__block-item technology__block-item-fifth">
                    <div class="technology__block-item-title">
                      Team
                    </div>
                    <h4 class="technology__block-item-text">
                      5 specialists
                    </h4>
                  </div>
                </div>
              </div>
              <div class="technology__block-bottom">
                <div class="technology__block-arrows">
                  <img src="./../assets/img/arrow-slider-left.svg" alt="arrow-slider-left"
                       class="technology__block-arrow-left technology__block-arrow-common"
                       slot="button-prev">
                  <div class="technology__block-arrow-title">Corporate website for the bank Sovcombank.ru</div>
                  <img src="./../assets/img/arrow-slider-right.svg" alt="arrow-slider-right"
                       class="technology__block-arrow-right technology__block-arrow-common"
                       slot="button">
                </div>
              </div>
            </swiper-slide>

            <swiper-slide>
              <div class="technology__block-bg technology__block-bg-fourth-slide">
                <div class="technology__block-text">
                  <div class="technology__block-item technology__block-item-first fourth-slide-item-first">
                    <div class="technology__block-item-title">
                      Client
                    </div>
                    <h4 class="technology__block-item-text">
                      Autowini.com Autotrading Company, Korea
                    </h4>
                  </div>

                  <div class="technology__block-item technology__block-item-second">
                    <div class="technology__block-item-title">
                      Status
                    </div>
                    <h4 class="technology__block-item-text third-slide-item-third">
                      completed in 2018,
                      joint project.
                    </h4>
                  </div>

                  <div class="technology__block-item technology__block-item-third">
                    <div class="technology__block-item-title">
                      Description
                    </div>
                    <h4 class="technology__block-item-text">
                      Korea's largest auto trading platform. Completion of the registration system, development of the
                      administration system, UI design, business analysis, participation in the development of the
                      marketplace.
                    </h4>
                  </div>

                  <div class="technology__block-item technology__block-item-fourth third-slide-item-fourth">
                    <div class="technology__block-item-title">
                      Technologies
                    </div>
                    <h4 class="technology__block-item-text">
                      PHP, HTML5, CSS, MySQL
                    </h4>
                  </div>

                  <div class="technology__block-item technology__block-item-fifth">
                    <div class="technology__block-item-title">
                      Team
                    </div>
                    <h4 class="technology__block-item-text">
                      8 specialists
                    </h4>
                  </div>
                </div>
              </div>
              <div class="technology__block-bottom">
                <div class="technology__block-arrows">
                  <img src="./../assets/img/arrow-slider-left.svg" alt="arrow-slider-left"
                       class="technology__block-arrow-left technology__block-arrow-common"
                       slot="button-prev">
                  <div class="technology__block-arrow-title">Car marketplace</div>
                  <img src="./../assets/img/arrow-slider-right.svg" alt="arrow-slider-right"
                       class="technology__block-arrow-right technology__block-arrow-common"
                       slot="button">
                </div>
              </div>
            </swiper-slide>

            <swiper-slide>
              <div class="technology__block-bg technology__block-bg-fifth-slide">
                <div class="technology__block-text">
                  <div class="technology__block-item technology__block-item-first fourth-slide-item-first">
                    <div class="technology__block-item-title">
                      Client
                    </div>
                    <h4 class="technology__block-item-text">
                      Architectural Visualization Agency veroreality.com, Netherlands
                    </h4>
                  </div>

                  <div class="technology__block-item technology__block-item-second">
                    <div class="technology__block-item-title">
                      Status
                    </div>
                    <h4 class="technology__block-item-text">
                      completed in 2019
                    </h4>
                  </div>

                  <div class="technology__block-item technology__block-item-third">
                    <div class="technology__block-item-title">
                      Description
                    </div>
                    <h4 class="technology__block-item-text">
                      Promo Website and VR application for presenting future architectural ideas to clients and developers. Concept development, design and full technical implementation.
                    </h4>
                  </div>

                  <div class="technology__block-item technology__block-item-fourth third-slide-item-fourth">
                    <div class="technology__block-item-title">
                      Technologies
                    </div>
                    <h4 class="technology__block-item-text">
                      PHP, HTML5, CSS, MySQL
                    </h4>
                  </div>

                  <div class="technology__block-item technology__block-item-fifth">
                    <div class="technology__block-item-title">
                      Team
                    </div>
                    <h4 class="technology__block-item-text">
                      5 specialists
                    </h4>
                  </div>
                </div>
              </div>
              <div class="technology__block-bottom">
                <div class="technology__block-arrows">
                  <img src="./../assets/img/arrow-slider-left.svg" alt="arrow-slider-left"
                       class="technology__block-arrow-left technology__block-arrow-common"
                       slot="button-prev">
                  <div class="technology__block-arrow-title">Promo Website and VR App</div>
                  <img src="./../assets/img/arrow-slider-right.svg" alt="arrow-slider-right"
                       class="technology__block-arrow-right technology__block-arrow-common"
                       slot="button">
                </div>
              </div>
            </swiper-slide>

            <swiper-slide>
              <div class="technology__block-bg technology__block-bg-sixth-slide">
                <div class="technology__block-text">
                  <div class="technology__block-item technology__block-item-first sixth-slide-item-first">
                    <div class="technology__block-item-title">
                      Client
                    </div>
                    <h4 class="technology__block-item-text">
                      Sales network, more <br>
                      than 100 parkings,<nobr>Germany</nobr>
                    </h4>
                  </div>

                  <div class="technology__block-item technology__block-item-second sixth-slide-item-second">
                    <div class="technology__block-item-title">
                      Status
                    </div>
                    <h4 class="technology__block-item-text">
                      completed in 2020.
                      Project under NDA
                    </h4>
                  </div>

                  <div class="technology__block-item technology__block-item-third">
                    <div class="technology__block-item-title">
                      Description
                    </div>
                    <h4 class="technology__block-item-text">
                      Application for automating parkings in Germany. License plate recognition, time and place control, payment system, CRM system.
                    </h4>
                  </div>

                  <div class="technology__block-item technology__block-item-fourth six-slide-item-fourth">
                    <div class="technology__block-item-title">
                      Technologies
                    </div>
                    <h4 class="technology__block-item-text">
                      Python, React, C++, MongoDB
                    </h4>
                  </div>

                  <div class="technology__block-item technology__block-item-fifth">
                    <div class="technology__block-item-title">
                      Team
                    </div>
                    <h4 class="technology__block-item-text">
                      5 specialists
                    </h4>
                  </div>
                </div>
              </div>
              <div class="technology__block-bottom">
                <div class="technology__block-arrows">
                  <img src="./../assets/img/arrow-slider-left.svg" alt="arrow-slider-left"
                       class="technology__block-arrow-left technology__block-arrow-common"
                       slot="button-prev">
                  <div class="technology__block-arrow-title">Application for parking automation</div>
                  <img src="./../assets/img/arrow-slider-right.svg" alt="arrow-slider-right"
                       class="technology__block-arrow-right technology__block-arrow-common"
                       slot="button">
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
  name: "Cases",
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
    @media screen and (max-width: 480px) {
      padding-top: 5rem;
    }

    &-bg {
      top: 12rem;
      position: relative;
      background: url('./../assets/img/slide-1-bg.png') no-repeat;
      background-size: cover;
      width: 120rem !important;
      height: 42rem;

      &-second-slide {
        top: 12rem;
        position: relative;
        background: url('./../assets/img/slide-2-bg.png') no-repeat;
        background-size: cover;
        width: 120rem !important;
        height: 42rem;
      }

      &-third-slide {
        top: 12rem;
        position: relative;
        background: url('./../assets/img/slide-3-bg.png') no-repeat;
        background-size: cover;
        width: 120rem !important;
        height: 42rem;
      }

      &-fourth-slide {
        top: 12rem;
        position: relative;
        background: url('./../assets/img/slide-4-bg.png') no-repeat;
        background-size: cover;
        width: 120rem !important;
        height: 42rem;
      }
      &-fifth-slide {
        top: 12rem;
        position: relative;
        background: url('./../assets/img/slide-5-bg.png') no-repeat;
        background-size: cover;
        width: 120rem !important;
        height: 42rem;
      }
      &-sixth-slide {
        top: 12rem;
        position: relative;
        background: url('./../assets/img/slide-6-bg.png') no-repeat;
        background-size: cover;
        width: 120rem !important;
        height: 42rem;
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
      @media screen and (max-width: 480px) {
        width: 47.8rem;
      }
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

.second-slide-item-first {
  padding-right: 4rem !important;
}

.third-slide-item-first {
  padding-right: 13rem !important;
}

.third-slide-item-fourth {
  padding-right: 9.2rem !important;
}
.fourth-slide-item-first {
  width: 27.5rem;
  padding-right: 2rem !important;
}
.sixth-slide-item-first {
  width: 22rem;
  padding-right: 7.5rem;
}
.sixth-slide-item-second {
  width: 16rem;
}
.six-slide-item-fourth {
  padding-right: 6rem;
}
.third-slide-item-third {
  width: 18.5rem;
}
</style>

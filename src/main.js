import Vue from 'vue'
import App from './App.vue'
import store from './store'


import showDirective from './directives/showBlock'
import welcome2 from './directives/welcome-2'
import welcome1 from './directives/welcome-1'
import welcome3 from './directives/welcome-3'
import welcome4 from './directives/welcome-4'

Vue.directive('scrollanimation-show', showDirective)
Vue.directive('scrollanimation-welcome2', welcome2)
Vue.directive('scrollanimation-welcome1', welcome1)
Vue.directive('scrollanimation-welcome3', welcome3)
Vue.directive('scrollanimation-welcome4', welcome4)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store, // store: store // en es6 no hace falta escribir key:value cuando son iguales
  render: h => h(App)
}).$mount('#app')

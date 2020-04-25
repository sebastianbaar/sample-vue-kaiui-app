import Vue from 'vue'
import App from './App.vue'
import VueKaiUI from "vue-kaiui";

Vue.config.productionTip = false

Vue.use(VueKaiUI)

new Vue({
  render: h => h(App),
}).$mount('#app')

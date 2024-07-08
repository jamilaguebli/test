import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue } from 'bootstrap-vue'
import store from './store'

Vue.config.productionTip = false

Vue.use(BootstrapVue)

const app = new Vue({store,  render: h => h(App)}) ;
app.$mount('#app')

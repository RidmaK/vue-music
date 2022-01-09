import Vue from 'vue'
import App from './App.vue'
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import SearchArea from './components/SearchArea.vue'
import ResultArea from './components/ResultArea.vue'

Vue.component('app-nav',Navbar)
Vue.component('app-home',Home)
Vue.component('app-searcharea',SearchArea)
Vue.component('app-resultarea',ResultArea)
new Vue({
  el: '#app',
  render: h => h(App)
})

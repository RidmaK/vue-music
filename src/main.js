import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import SearchArea from './components/SearchArea.vue'
import ResultArea from './components/ResultArea.vue'
import About from './components/About.vue'
import Track from './components/Track.vue'

Vue.use(VueRouter)
Vue.component('app-nav',Navbar)
Vue.component('app-home',Home)
Vue.component('app-searcharea',SearchArea)
Vue.component('app-resultarea',ResultArea)

const routes = [
  {path:'/',component:Home},
  {path:'/about',component:About},
  {path:'/track',name:'track',component:Track}
];

const router =new VueRouter({
  routes,
  mode:'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

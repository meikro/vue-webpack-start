import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routeConfig from './route-config'


Vue.use(VueRouter)
Vue.use(VueResource)

// create router
const router = new VueRouter()
router.map(routeConfig)
const App = Vue.extend(require('./app.vue'))
router.start(App, '#app')
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routes from './route.config'
import VueResource from 'vue-resource'
import 'bootstrap/dist/css/bootstrap.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI);

/*const routes = ;*/

const router = new VueRouter(
  routes
);

/* eslint-disable no-new */
// 这灵活得亮瞎了
/*new Vue({
 el: '#app',
 template: '<App/>',
 router,
 components: { App }
 });

 new Vue(Vue.util.extend({
 router
 }, App)).$mount('#app');

 new Vue({
 el:'#app',
 router,
 render:h => h(App)
 });*/
var app = new Vue({
  el: '#app',
  router,
  ...App,
});

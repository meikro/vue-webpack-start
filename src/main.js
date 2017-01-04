import Vue from 'vue'
import VueRouter from 'vue-router'
import Env from '../config/env';
import $ from 'expose?$!jquery'
import routeConfig from './route-config'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueRouter)

const App = Vue.extend(require('./app.vue'))


// 开启debug模式
Vue.config.debug = true;

// 路由配置
let router = new VueRouter({
    // 是否开启History模式的路由,默认开发环境开启,生产环境不开启。如果生产环境的服务端没有进行相关配置,请慎用
    //history: Env != 'production'
});

router.map(routeConfig);

/*router.beforeEach(() => {
    window.scrollTo(0, 0);
});

router.afterEach(() => {

});

router.redirect({
    '*': "/"
});*/

router.start(App, '#app')
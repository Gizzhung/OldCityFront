// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import global_ from './components/Global/global'
import Header from '@/components/header'
import Index from '@/components/index'

import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

import VueQuillEditor from 'vue-quill-editor'


Vue.use(VueAxios, axios);
Vue.use(VueQuillEditor);
Vue.prototype.$axios = axios;
Vue.prototype.$GLOBAL = global_;


Vue.config.productionTip = false
Vue.component('Header', Header)
Vue.component('Index', Index)
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
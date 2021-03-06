// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import global_ from './components/Global/global'
import Header from '@/components/layout/header'
import Footer from '@/components/footer'
import Index from '@/components/index'

import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css'
import datePicker from 'vue-bootstrap-datetimepicker'
import VueUploadComponent from 'vue-upload-component'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import CKEditor from '@ckeditor/ckeditor5-vue'


import VueQuillEditor, { Quill } from 'vue-quill-editor'

// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
Vue.use(Viewer)

import { ImageDrop } from 'quill-image-drop-module'
import ImageResize from 'quill-image-resize-module'
Quill.register('modules/imageDrop', ImageDrop)
Quill.register('modules/imageResize', ImageResize)

import { ImageExtend } from 'quill-image-extend-module'
Quill.register('modules/ImageExtend', ImageExtend)

import VTooltip from 'v-tooltip'
Vue.use(VTooltip)

Vue.use(VueQuillEditor)



Vue.use(VueAxios, axios);
Vue.use(CKEditor);
Vue.prototype.$axios = axios;
Vue.prototype.$GLOBAL = global_;

Vue.config.productionTip = false
Vue.component('Header', Header)
Vue.component('date-picker', datePicker)
Vue.component('file-upload', VueUploadComponent)
Vue.component('Footer', Footer)
Vue.component('Index', Index)
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
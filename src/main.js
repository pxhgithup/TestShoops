// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUi from './lib/mui-master/dist/js/mui'
//mui
import './lib/mui-master/dist/css/mui.css'
import 'mint-ui/lib/style.css';
import './assets/styles/iconfont.css'
//适配手机屏幕
import './assets/styles/reset.css'
import './assets/styles/border.css'
//解决点击延时
import mfastClick from 'fastclick'

mfastClick.attach(document.body)

Vue.config.productionTip = false
import {Swipe, SwipeItem} from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import pushUtils from './utils/pushUtil'
import axios from 'axios'
import {Button} from 'vant';
import 'vant/lib/index.css';

Vue.use({Button})


Vue.prototype.$pushUtils = pushUtils
Vue.prototype.$MintUi = MintUi
Vue.prototype.$Axios = axios
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})

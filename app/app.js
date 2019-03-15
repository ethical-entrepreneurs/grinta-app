import Vue from 'nativescript-vue';

import Welcome from './pages/Welcome';

Vue.config.silent = false;

new Vue({
  render: h => h('frame', [h(Welcome)])
}).$start();

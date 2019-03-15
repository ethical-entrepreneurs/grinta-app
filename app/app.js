import Vue from 'nativescript-vue';

import Dashboard from './pages/Dashboard';

Vue.config.silent = false;

new Vue({
  render: h => h('frame', [h(Dashboard)])
}).$start();

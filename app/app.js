import Vue from 'nativescript-vue';

import Welcome from './pages/Welcome';

// Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;

new Vue({

  render: h => h('frame', [h(Welcome)])

}).$start();

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

import store from './vuex/store.js'
import App from './App'
import router from './router'

Vue.use(iView);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  	el: '#app',
  	router,
  	store,
  	components: { App },
  	template: '<App/>'
});
router.beforeEach((to,from,next)=>{
	next();
});

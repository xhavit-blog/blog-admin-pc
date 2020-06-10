import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './router';
import App from './App.vue';

// config
Vue.config.productionTip = false;

// plugin
Vue.use(VueRouter);

// start app
new Vue({
    router,
    render: h => h(App),
}).$mount('#app');

// lib
import Vue from 'vue'

// app
import App from './App.vue'
import router from './router'
import store from './store'

// styles
import '@/styles';

// settings
import '@/config/setting'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

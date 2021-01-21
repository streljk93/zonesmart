// lib
import Vue from 'vue'

// add global components
import {ValidationObserver, ValidationProvider} from 'vee-validate'
import './validation'

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

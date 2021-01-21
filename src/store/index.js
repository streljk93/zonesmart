// libs
import Vue from 'vue'
import Vuex from 'vuex'

// modules
import auth from '@/store/modules/auth'
import orders from '@/store/modules/orders'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
      auth,
      orders,
  }
})

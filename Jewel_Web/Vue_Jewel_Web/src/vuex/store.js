import Vue from 'vue'
import Vuex from 'vuex'
import cookie from './cookie'

Vue.use(Vuex)

const state = {
  isLoading: false,
  direction: 'forward'
}

export default new Vuex.Store({
  state,
  modules: {
    cookie
  },
  mutations: {
    UPDATE_LOADING (state, status) {
      state.isLoading = status
    },
    UPDATE_DIRECTION (state, direction) {
      state.direction = direction
    }
  }
})

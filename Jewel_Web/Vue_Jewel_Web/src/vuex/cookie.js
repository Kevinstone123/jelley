import Cookies from 'js-cookie'

const cookie = {
  state: {
    language: Cookies.get('language') || ''
  },
  mutations: {
    TOGGLE_LANGUAGE: (state, view) => {
      Cookies.set('language', view)
    }
  },
  actions: {
    ToggleLanguage: ({ commit }, view) => {
      commit('TOGGLE_LANGUAGE', view)
    }
  }
}

export default cookie

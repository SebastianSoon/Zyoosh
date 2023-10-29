import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      isDark: false,
      user: {},
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    toggleTheme(state) {
      state.isDark = !state.isDark;
    }
  },
  getters: {
    isAdmin(state) {
      return state.user.type === 'admin';
    },
  }
})

export default store;
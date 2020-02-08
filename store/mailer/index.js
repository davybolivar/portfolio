import actions from './actions'

export default {
  namespaced: true,

  state: {
    loading: false,
    status: 0 // 0:none; 1:sent; -1:failed
  },

  getters: {
    getLoading: (state) => state.loading,
    getStatus: (state) => state.status
  },

  mutations: {
    SET_LOADING: (st, bool) => {
      st.loading = bool
    },
    SET_STATUS: (st, status) => {
      st.status = status
    }
  },

  actions
}

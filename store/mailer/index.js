import mailerActions from './actions'

export const state = () => ({
  loading: false,
  status: 0 // 0:none; 1:sent; -1:failed
})

export const getters = {
  getLoading: (state) => state.loading,
  getStatus: (state) => state.status
}

export const mutations = {
  SET_LOADING: (st, bool) => {
    st.loading = bool
  },
  SET_STATUS: (st, status) => {
    st.status = status
  }
}

export const actions = mailerActions

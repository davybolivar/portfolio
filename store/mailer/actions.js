export default {
  // Send email
  async sendEmail({ commit }, payload) {
    commit('SET_LOADING', true)
    try {
      await this.$axios.$post('/send-email', payload)
      commit('SET_STATUS', 1)
    } catch (err) {
      commit('SET_STATUS', -1)
    } finally {
      commit('SET_LOADING', false)
    }
  }
}

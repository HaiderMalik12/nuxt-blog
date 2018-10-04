const state = () => ({
  posts: []
})
const getters = {}
const mutations = {
  SET_POSTS(state, payload) {
    state.posts = payload
  }
}
const actions = {
  setPosts({ commit }, payload) {
    commit('SET_POSTS', payload)
  }
}

const postModule = {
  state,
  getters,
  mutations,
  actions
}
export default postModule

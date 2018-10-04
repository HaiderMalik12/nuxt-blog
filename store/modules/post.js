const state = () => ({
  posts: [],
  singlePost: {}
})
const getters = {}
const mutations = {
  SET_POSTS(state, payload) {
    state.posts = payload
  },
  SET_POST(state, payload) {
    state.singlePost = Object.assign({}, state.singlePost, payload)
  }
}
const actions = {
  setPosts({ commit }, payload) {
    commit('SET_POSTS', payload)
  },
  setPost({ commit }, payload) {
    commit('SET_POST', payload)
  }
}

const postModule = {
  state,
  getters,
  mutations,
  actions
}
export default postModule

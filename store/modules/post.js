const state = () => ({
  posts: [
    {
      id: '1',
      title: 'Learn NodeJs',
      description:
        'he industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. I'
    },
    {
      id: '2',
      title: 'Learn NuxtJs',
      description:
        'he industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. I'
    },
    {
      id: '3',
      title: 'Learn VueJs',
      description:
        'he industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. I'
    }
  ]
})
const getters = {}
const actions = {}
const mutations = {}

const postModule = {
  state,
  getters,
  mutations,
  actions
}
export default postModule

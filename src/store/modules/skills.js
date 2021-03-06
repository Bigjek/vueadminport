const skills = {
  namespaced: true,
  state: {
    data: []
  },
  getters: {
    skills: ({ data }) => (data)
  },
  mutations: {
    addNewSkill(state, skill) {
      // state.data.push(skill)
    },
    addNew(state, skill) {
      state.data.push(skill)
    },
    removeSavedSkill(state, skillId) {
      state.data = state.data.filter(skill => (skill.id !== skillId))
    }
  },
  actions: {
    fetchSkills({ state, rootGetters }) {
      const { $http } = rootGetters
      $http.get('about').then(response => {
        state.data = response.body
      }, response => {
        console.error(response)
      })
    },
    fetchAdd({ state, rootGetters, commit }, dataparams) {
      const { $http } = rootGetters
      $http.post('about', dataparams).then((response) => {
        state.data = response.body
        // commit(['addNew'])
      }, response => { console.error('нет ', dataparams) })
    }
  }
}

export default skills

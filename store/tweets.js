export const state = () => {
  return {
    res: []
  }
}

export const actions = {
  async load ({ commit }, query) {
    console.log(query)
    const res = await this.$axios.$get(`api/test${query}`)
    commit('LOAD', res)
  }
}

export const mutations = {
  LOAD (state, payload) {
    state.res = payload
  }
}

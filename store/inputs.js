export const state = () => {
  return {
    keyword: null,
    topic: null,
    start: null,
    end: null
  }
}

export const getters = {}

export const actions = {
  update ({ commit }, payload) {
    commit('UPDATE', payload)
  }
}

export const mutations = {
  UPDATE (state, payload) {
    state[payload.key] = payload.value
  }
}

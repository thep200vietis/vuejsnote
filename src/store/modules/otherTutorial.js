// import somethigns
const state = {
    count: [0, 0, 0]
}

const getters = {
    showState(state) {
        return state.count
    }
}

const mutations = {
    increment(state) {
        state.count.push(0, 0)	
    }
}

const actions = {
    increment({commit}) {
        commit('increment')
    }
}

export default {
    namespaced: true,
    state,
    getters, 
    mutations,
    actions
}
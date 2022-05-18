const state = {
    mname: 'Thep'
}

const mutations = {
    changeName(state, val) {
        state.mname = val
    }	
}

const actions = {
    changeName({commit}, val) {
        commit('changeName', val)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
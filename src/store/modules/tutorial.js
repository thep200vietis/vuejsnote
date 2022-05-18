// import something
const state = {
    count: [1, 2, 3, 4, 5]
}

const getters = {
    show(state) {
        return function(val) {
            let newArr = []
            for(let i = 0; i < 5; i++) {
                if(state.count[i] < val) {
                    newArr.push(state.count[i])
                }
            }
            return newArr;
        }
    }
}

const mutations = {
    increment(state, val) {
        state.count.push(val)
    }
}

const actions = {
    increment({commit}, val) {
        commit('increment', val)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
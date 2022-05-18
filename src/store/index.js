import Vue from 'vue';
import Vuex from 'vuex'
import tutorial from './modules/tutorial'
import otherTutorial from './modules/otherTutorial'
import name from './modules/name'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        tuto: tutorial,
        otuto: otherTutorial,
        name: name,
    }
}) 
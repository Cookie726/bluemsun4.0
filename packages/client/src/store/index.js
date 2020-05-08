import Vue from 'vue'
import Vuex from 'vuex'
import common from './modules/common.js'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        common
    },
    getters
})

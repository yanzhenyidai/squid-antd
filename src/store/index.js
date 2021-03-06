import Vue from 'vue'
import Vuex from 'vuex'

import menu from './modules/menu'
import tag from './modules/tag'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        menu,
        tag
    }
})

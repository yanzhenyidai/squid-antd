import {constantRouterMap} from '@/router'
// import axios from 'axios'

const state = {
    menus: []
}

const mutations = {
    SET_ROUTES: (state, routes) => {
        state.menus = routes
    }
}

const actions = {
    generator({ commit }) {
        return new Promise(resolve => {
            // let accessedRoutes = constantRouterMap

            // axios.post("/fUser/findByMenu").then((result) => {
            //     accessedRoutes = constantRouterMap || result.data

                commit('SET_ROUTES', constantRouterMap)
                resolve(constantRouterMap)
            // })
        })
    }
}

const getters = {
    menus: state => state.menus
}

export default {
    state,
    mutations,
    actions,
    getters
}

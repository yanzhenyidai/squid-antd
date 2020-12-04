import {constantRouterMap, defaultRouterMap} from '@/router'
// import axios from 'axios'

const state = {
    addMenus: [],
    menus: []
}

const mutations = {
    SET_ROUTES: (state, routes) => {
        state.addMenus = routes
        state.menus = defaultRouterMap.concat(routes)
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

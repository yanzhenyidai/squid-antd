const state = {
    dynamicTags: [{
        'path': '/index/',
        'name': "欢迎页",
        'closable': false
    }]
}

const actions = {
    addTag({commit}, tag) {
        commit('ADD_TAG', {tag})
    },
    removeTag({commit}, tag) {

       return  new Promise(resolve => {
           commit('REMOVE_TAG', {tag})
            resolve(state.dynamicTags)
        })



    }
}

const mutations = {
    ADD_TAG: (state, {tag}) => {
        if (state.dynamicTags.some(v => v.path === tag.path)) return
        state.dynamicTags.push(tag)
    },
    REMOVE_TAG: (state, {tag}) => {
        state.dynamicTags.splice(state.dynamicTags.indexOf(tag), 1)
    }
}

const getters = {
    dynamicTags: state => state.dynamicTags
}

export default {
    state,
    actions,
    mutations,
    getters
}

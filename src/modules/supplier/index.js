const state = {
    list:[],
    selected:{}
}

const mutations = {
    'SET_SUPPLIERS' (state, suppliers){
        state.list = suppliers;
    }
}

import getters from './getters'
import actions from './actions'

export default { state, mutations, getters, actions }

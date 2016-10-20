const state = {
    list:[],
    selected:{}
}

const mutations = {
    'SET_PRODUCTS' (state, products){
        state.list = products;
    },
}

import actions from './actions'
import getters from './getters'

export default { state, mutations, actions, getters }

const state = {
    list:[],
    selected:{}
}

const mutations = {
    'SET_USERS' (state,users){
        state.list = users;
    }
}

import actions from './actions';
import getters from './getters';

export default { state, mutations, actions, getters }

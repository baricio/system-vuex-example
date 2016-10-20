const state = {
    user:{
        name: '',
        email: '',
    },
    token: ''
}

const mutations = {
    'SET_LOGIN' (state, login){
        state.user.name = login.user.name;
        state.user.email = login.user.email;
        state.token = login.token;
    }
}

import actions from './actions'
import getters from './getters'

export default { state, mutations, actions, getters }

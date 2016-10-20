import Vue from 'vue'
import Vuex from 'vuex'

import login from './modules/login/index'
import product from './modules/product/index'
import supplier from './modules/supplier/index'
import user from './modules/user/index'

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        login,product, supplier, user
    }
})

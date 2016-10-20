import vue from 'vue'

export default{
    loadUsers(context){
        vue.http.get('/users.json').then(
            (response)=>{
                context.commit('SET_USERS',response.data);
            },
            (error)=>{
                console.log('error ao buscar json');
            }
        )
    },
    removeUsers(context){
        context.commit('SET_USERS', []);
    }
}

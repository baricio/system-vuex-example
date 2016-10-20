import vue from 'vue'

export default{
    doLogin(context){
        vue.http.get('/login.json').then(
            (response)=>{
                console.log(response);
                context.commit('SET_LOGIN', response.data);
            },
            (error)=>alert('erro ao buscar json')
        )
    },
    doLogout(context){
        let login = {
            user:{
                name:'',
                email:''
            },
            token:''
        }
        context.commit('SET_LOGIN', login);
    }
}

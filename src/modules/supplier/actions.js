import vue from 'vue'

export default{
    loadSuppliers(context){
        vue.http.get('/suppliers.json').then(
            (response)=>{
                context.commit('SET_SUPPLIERS',response.data);
            },
            (error)=>{
                console.log('error ao buscar suppliers json');
            }
        )
    },
    removeSuppliers(context){
        context.commit('SET_SUPPLIERS', []);
    }
}

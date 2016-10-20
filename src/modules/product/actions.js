import vue from 'vue'

export default{
    loadProducts(context){
        vue.http.get('/products.json').then(
            (response)=>{
                context.commit('SET_PRODUCTS', response.data);
            },
            (error)=>alert(error.statusText)
        )
    },
    removeProducts(context){
        context.commit('SET_PRODUCTS', []);
    },
}

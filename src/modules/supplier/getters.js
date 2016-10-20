export default{
    hasSuppliers: (state) =>{
        console.log('hasSuppliers',state.list);
        return state.list.length > 0;
    },
    getSuppliers: (state)=>{
        console.log('getSuppliers',state.list);
        return state.list;
    }
}

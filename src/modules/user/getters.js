export default{
    hasUsers:(state)=>{
        return state.list.length > 0
    },
    getUsers:(state)=>{
        return state.list;
    }
}

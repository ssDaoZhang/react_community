function list(state={
                  loading:true,
                  data:[], 
                }, action){
  switch(action.type){
    case "LIST_UPDATA":
      return{
        data:state.data,
        loading:true
      };
    case "LIST_UPDATA_SUCCESS":
      return{
        data:action.data.data,
        loading:false
      };
    case "LIST_UPDATA_ERROR":
      return{
        data:[],
        loading:false
      };
    default:
          return state;
  }
}
export default list;
function details (state={
  data:{
    create_at:'',
    author:{
      loginname:"",
      avatar_url:""
    },
    reply_count:'',
    replies:"",
    good:true,
    tab:""
  },
  loading:true
}, action){
  switch(action.type){
    case "DETAILS_UPDATA":
      return{
        data:state.data,
        loading:true
      };
    case "DETAILS_UPDATA_SUCCESS":
      return{
        data:action.data.data,
        loading:false
      };
    case "DETAILS_UPDATA_ERROR":
      return{
        data:action.data.data,
        loading:false
      };
    default:
          return state;
  }
}
export default details;
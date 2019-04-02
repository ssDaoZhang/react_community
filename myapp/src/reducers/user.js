function user(state={
  data:{
    avatar_url:"",
    create_at:"",
    loginname:"",
    score:"",
    recent_replies:[],
    recent_topics:[]
  },
  loading: true  
}, action){
  switch(action.type){
    case"USER_UPDATA":
      return{
        loading:true,
        data:state.data
      };
    case"USER_UPDATA_SUCCESS":
    return{
      loading:false,
      data:action.data.data
    };
    case"USER_UPDATA_ERROR":
    return{
      loading:false,
      data:action.data.data
    };
    default:
          return state;
  }
}
export default user;
import React, {Component} from 'react';
import Mheader from "../components/mainheader/mainheader";
import Mfooter from "../components/mainfooter/mainfooter";
import {Avatar, Row, Col} from "antd";
import Otag from "../components/Otag/Otag";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import "./user.scss";
import Userlist from "./userlist";
class User extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.getData(this.props, this.state);
  }
  shouldComponentUpdate(nextProps, nextState){
    let id = this.props.match.params;
    let next_id = nextProps.match.params;
    if(next_id != id){
      this.getData(nextProps, nextState);
      return false;
    }
    return true;
  }
  getData = (props) => {
   let {id} = props.match.params;
   this.props.dispatch( async (dispatch) => {
     dispatch({
       type:"USER_UPDATA"
     });
     try{
       let res = await (await fetch(`https://cnodejs.org/api/v1/user/${id}`, {
                   method: 'GET',
                 })).json();
       dispatch({
         type:"USER_UPDATA_SUCCESS",
         data:res
       });
     }catch(e){
       dispatch({
         type:"USER_UPDATA_ERROR",
         data:e
       });
       console.log('出错啦！！！', e);
     }
   });
  }
  render(){
    let { avatar_url, 
          loginname, 
          score, 
          create_at, 
          recent_topics,
          recent_replies
        } = this.props.data;
    let {loading} = this.props;
    return(
    <div className="warp">
    <Mheader/>
      <div  className="in-main-warp">
        <div className="in-main">
          <Avatar src={avatar_url} className="user_avatar"/>
          <Row style={{paddingBottom:"6px"}}>
            <Col style={{textAlign:"center" ,color:"gold",  height:"24px", lineHeight:"24px"}} md={8} xs={24}>{`用户名：${loginname}`}</Col>
            <Col style={{textAlign:"center", color:"gold",  height:"24px", lineHeight:"24px"}} md={8} xs={24}>{`用户积分：${score}`}</Col>
            <Col style={{textAlign:"center", color:"gold",  height:"24px", lineHeight:"24px"}} md={8} xs={24}>{`创建时间：${create_at.split("T")[0]}`}</Col>
          </Row>
          <Userlist loading={loading} title={'最近创建的话题'} data={recent_topics} />
          <Userlist loading={loading} title={'最近创建的话题'} data={recent_replies} />
        </div>
      </div> 
    <Mfooter/>
    </div> 
    );
  }
}
export default connect(state => state.user)(User);
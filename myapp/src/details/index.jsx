import React, {Component} from 'react';
import Mheader from "../components/mainheader/mainheader";
import Mfooter from "../components/mainfooter/mainfooter";
import {Card, Avatar} from "antd";
import Otag from "../components/Otag/Otag";
import {Link} from 'react-router-dom';
import Replylist from "./reolylist";
import Detaliss from "./details";
import {connect} from "react-redux";
import './det.scss';

class Details extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.getData(this.props, this.state);
  }
  getData = (props) => {
   let {id} = props.match.params;
   // console.log('ID:', id);
   this.props.dispatch( async (dispatch) => {
     dispatch({
       type:"DETAILS_UPDATA"
     });
     try{
       let res = await (await fetch(`https://cnodejs.org/api/v1/topic/${id}`, {
                   method: 'GET',
                 })).json();
       dispatch({
         type:"DETAILS_UPDATA_SUCCESS",
         data:res
       });
     }catch(e){
       dispatch({
         type:"DETAILS_UPDATA_ERROR",
         data:e
       });
       console.log('出错啦！！！', e);
     }
   });
  }

  render(){
    console.log("22222:",this.props);
    let {data, loading} = this.props;
    return(
    <div className="warp">
    <Mheader/>
      <div  className="in-main-warp">
        <div className="in-main">
          <Detaliss 
            data={data}
          />
          <Replylist 
              loading = {loading}
              replyCount = {data.reply_count}
              replies = {data.replies}
          />       
        </div>
      </div> 
    <Mfooter/>
    </div> 
    );
  }
}
export default connect(state => state.details)(Details);
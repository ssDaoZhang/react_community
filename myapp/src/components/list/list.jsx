import React,{Component} from 'react';
import data from "../../data.js";
import {List, Avatar } from "antd";
import {Link} from "react-router-dom";
import './list.scss';
import Otag from "../Otag/Otag";
import {connect} from "react-redux";
let {Item} = List;

 class Mlist extends Component{
   constructor(props){
     super(props);
     this.state = {
       page:1,
     };
     this.pageListFlag = true;
   }
   componentDidMount(){
    this.getData(this.props, this.state);
   }
  //  componentWillReceiveProps(nextProps){
  //   if(nextProps.tab !== this.props.tab){
  //     this.getData(nextProps, this.state);
  //   }
  //  }
  shouldComponentUpdate(nextProps,nextState){
    this.pageListFlag = false;
    if(nextState.page != this.state.page){
      this.getData(nextProps, nextState);
      return false;
    }
    if(nextProps.tab !== this.props.tab ){
      this.state.page = 1;
      this.getData(nextProps, {page:1});
      return false;
    } 
    return true;
  }
   getData = (props, state) => {
    let {tab} = props;
    let {page} = state;

    this.props.dispatch( async (dispatch) => {
      dispatch({
        type:"LIST_UPDATA"
      });
      try{
        let res = await (await fetch(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${page}&limit=10`, {
                    method: 'GET',
                  })).json();
        console.log('11111：', res);
        dispatch({
          type:"LIST_UPDATA_SUCCESS",
          data:res
        });
      }catch(e){
        dispatch({
          type:"LIST_UPDATA_ERROR",
          data:e
        });
        console.log('出错啦！！！', e);
      }
    });
   }

   pageNum = (current) => {
     console.log(current);
    this.setState({
      page:current
    });
   }
  render(){
    let {loading, data} = this.props;
    let {tab} = this.state;
    let pagination = {
        current:this.state.page,
        pageSize:10,
        total:1000,
        onChange:this.pageNum
    };
    return(
      <List className="list-warp" 
            pagination = {this.pageListFlag?false:pagination}
            loading={loading}
            dataSource={data}
            renderItem={ item => (
                <Item className="main-list"
                      actions={[`回复:${item.reply_count}`, `访问:${item.visit_count}`]}>
                  <Item.Meta  avatar={<Avatar src={item.author.avatar_url}/>} 
                              title={<div><Otag data={item}/><Link to={`/details/${item.id}`}>
                                <span>{item.title}</span></Link></div>}
                              description={<p><Link to={`/user/${item.author.loginname}`}>{item.author.loginname}</Link>
                                  发表于:{item.create_at.split("T")[0]}
                                </p>}
                              />
                </Item>
            )}
            ></List>
    );
  }
} 
export default connect(state => state.list)(Mlist);
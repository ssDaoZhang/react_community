import React, {Component} from 'react';
import Mheader from "../components/mainheader/mainheader";
import Mfooter from "../components/mainfooter/mainfooter";
import {Link} from "react-router-dom";
import "./index.scss";
import {Menu, Row, Col} from "antd";

import Mlist from '../components/list/list';
let {Item} = Menu;

class Index extends Component{
  constructor(props){
    super(props);
    this.state = {
      now : this.getFlag(this.props.location.pathname)
    }
  }
  getFlag = (pathname) => {
    return pathname.split("/")[2];
  }
  shouldComponentUpdate(nextProps,nextState){
    let now = this.getFlag(nextProps.location.pathname);
    if(now !== this.state.now){
      this.setState({
        now
      });
      return false;
    }
    return true;
  }
  render(){
    console.log('首页：',this.props);
    let tab = this.props.match.params.id;
    let {now} = this.state;
    return(
      <div className="warp">
        <Mheader />
        <div className="in-main-warp"> 
        <Row className="in-main">
        <Col md={6}>
          <Menu className="in-menu" id="iN-menu"
                selectedKeys={[now]}>
            <Item key="all"><Link to="/index/all">全部</Link></Item>
            <Item key="good"><Link to="/index/good">精华</Link></Item>
            <Item key="ask"><Link to="/index/ask">问答</Link></Item>
            <Item key="share"><Link to="/index/share">分享</Link></Item>
            <Item key="job"><Link to="/index/job">招聘</Link></Item>
            <Item key="dev"><Link to="/index/dev">测试</Link></Item>
          </Menu>
          </Col> 
          <Col className="in-context"
            md={18}
            >
            <Mlist tab={tab}/>
          </Col>
        </Row>
        </div>
        <Mfooter/>
      </div> 
    );
  }
}
export default Index;
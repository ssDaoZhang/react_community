import React, {Component} from "react";
import { Menu, Icon } from 'antd';
import {Link, withRouter} from 'react-router-dom';
const {Item} = Menu;
class Nav extends Component{
    constructor(props){
      super(props);
      this.state = {
        now : this.getFlag(this.props.location.pathname)
      }
    }
    getFlag = (pathname) => {
      return pathname.split("/")[1];
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
  let {mode, id} = this.props;
  let {now} = this.state;
  console.log(now);
  return(
    <Menu mode={mode} theme="light" id={id}
        selectedKeys={[now]}
      >
      <Item key="index"><Link to='/index/all'><Icon type="home"></Icon>首页</Link></Item>
      <Item key="book"><Link to='/book'> <Icon type="book"></Icon>教程</Link></Item>
      <Item key="about"><Link to='/about'><Icon type="info-circle"></Icon>关于</Link></Item>
    </Menu>
  );
  }
}
export default withRouter(
  (props) => {
    let {mode, id, location} = props;
    return <Nav mode={mode} id={id} location={location}/>
  }
);

import React from "react";
import './mainf.scss';
import { Layout, Row, Col, Divider, Menu, Icon, Dropdown, Button } from 'antd';
import {Link} from 'react-router-dom';
import Nav from "../nav/nav";
const {
  Header, Footer, Sider, Content,
} = Layout;
const {Item} = Menu;

function Mheader (){
  return(
    <Header>
 
    <Row className="mheader-warp">
      <Col md={6} xs={24}>    
        <h1 className='headericon'>
          Joke
        </h1>
      </Col>
      <Col md={18} xs={0} className="mheader-nav">
        <Divider type="vertical" className="mheader-diver"/>
        <Nav mode={"horizontal"} id={"header-navlist1"}/>
      </Col>
      <Col md={0} xs={24} className="header-xsNav">
        <Dropdown overlay={<Nav mode={"vertical"} id={"header-navlist2"} 
            trigger={["click", "touchend"]}/>}
            placement="bottomRight"
            >
          <Button><Icon type='bars'></Icon></Button>
        </Dropdown>
      </Col>
    </Row>
    </Header>
  );
}
export default Mheader;
  
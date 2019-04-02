import React, {Component} from "react";
import {Card, Avatar} from "antd";
import Otag from "../components/Otag/Otag";
import {Link} from 'react-router-dom';
// import {connect} from "react-redux";

class Detaliss extends Component{
  constructor(props){
    super(props);
  }
  render(){
    let {data, loading} = this.props;
    return(
      <Card 
      loading={loading}
      title = {<div><h1>{data.title}</h1>
        <div className="details__tag">
        <Otag className="details__tag__item" data={data}/>
        <Avatar className="details__tag__item" src={data.author.avatar_url}/>
        <Link className="details__tag__item" to={`/user/${data.author.loginname}`}>
              {data.author.loginname}</Link>
          <span className="details__tag__item"> 发表于:{data.create_at.split("T")[0]}</span>
        </div>  
      </div>}>
        <div
           dangerouslySetInnerHTML={{
            __html:data.content
          }}
        ></div>
    </Card>
    );
  }
}
export default Detaliss;
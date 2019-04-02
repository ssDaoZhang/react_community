import React, {Component} from 'react';
import Mheader from "../components/mainheader/mainheader";
import Mfooter from "../components/mainfooter/mainfooter";
import {Link} from "react-router-dom";
import Mlist from '../components/list/list';
import data from './data';
import Comme from '../components/comme/comme';


class About extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="warp">
        <Mheader/>
        <Comme data={data}/>  
        <Mfooter/>
      </div> 
    );
  }
}

export default About;


import React from 'react';
import {Tag} from "antd";

const tabObj ={
  share : {color: "red", str: "分享"},
  dev: {color: "cyan",str:"测试"},
  ask:{color: "blue", str:"问答"},
  job:{color:"purple", str:"招聘"}
}
const tagSyle = (good, top, tab) => {
  if(good){
    return {
      color:"volcano",
      str:"精华"
    }
  }else if(top){
    return {
      color:"magenta",
      str:"置顶"
    }
  }else{
    return tabObj[tab];
  }
}

export default function(props){
  let{top, good, tab} = props.data;
  let tagS = tagSyle(good, top, tab);
  return(
    <Tag color={tagS.color}>{tagS.str}</Tag>
  );
}
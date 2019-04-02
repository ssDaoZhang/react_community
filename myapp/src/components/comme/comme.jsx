import React from "react";
import {Card} from "antd";
import "./comme.scss";
export default function(props){
  let {data} = props;
  return(
    <div  className="in-main-warp">
    <div className="in-main">
      {
        data.map( (ele, index) => {
          return(
            <Card title={ele.title}
              type="inner"
              key={ele.title}
              loading={false}>
              <div dangerouslySetInnerHTML={{
                __html:ele.content
              }}></div> 
            </Card>)
        })
      }
    </div>
  </div>
  )
}
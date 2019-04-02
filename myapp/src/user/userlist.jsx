import React from "react";
import {Card, List, Avatar} from "antd";
import {Link} from "react-router-dom";
import "./user.scss";
export default function(props){
  let { title, loading, data } = props;
  console.log(props);
  return(
    <Card
    loading={loading}
      title={title}
      type='inner'
    >
    <List
        dataSource = {data}
        loading={loading}
        renderItem = {item => (
          <List.Item key={item.id} className="user_list">
            <Avatar src={item.author.avatar_url}/>
                            <Link className="user" to={"/user/"+item.author.loginname}>{item.author.loginname}</Link>
                            <h4><Link to={"/details/"+item.id}>{item.title}</Link></h4>
                            {item.last_reply_at?<time>{"最后回复: "+item.last_reply_at.split("T")[0]}</time>:""}
          </List.Item>
        )}
      >
      </List>
    </Card>
  );
}
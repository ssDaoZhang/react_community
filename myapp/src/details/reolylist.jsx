import React from "react";
import {Link} from "react-router-dom";
import {Card, List, Avatar} from "antd";
export default function(props){
  let {replyCount, replies, loading} = props;
  console.log(replies);
  return(
    <Card
      loading={loading}
      title={`${replyCount}条回复`}
      type="inner"
    >
      <List
        dataSource={replies}
        itemLayout="vertical"
        renderItem = {(item) => (
          <List.Item 
            key={item.id}  
            extra={item.ups.length > 0 ? `有${item.ups.length}人点赞`: ''}
            >
            <List.Item.Meta 
              avatar={<Avatar src={item.author.avatar_url}/>}
              description={
                <div><Link to={`/user/${item.author.loginname}`}>{item.author.loginname}</Link>
                  <span style={{marginLeft:'8px'}}>发表于:{item.create_at.split("T")[0]}</span>
                </div>}
            />
            <div dangerouslySetInnerHTML={
                {
                    __html: item.content
                }
            }>
            </div>
          </List.Item>
        )}
      >
    </List>
    </Card>
  );
}
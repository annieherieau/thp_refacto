import { Card, Icon, Row } from "antd"
import { Col } from "antd/es"
import React from "react"
import PostCard from "./PostCard"

export default function PostsList({posts}){
  return(
    <Row type="flex" justify="center">
          <Col sm={18} xs={24}>
            <Col span={24} className="container text-center">
              <h2>
                <Icon type="save" />
                <span className="span-icon">Publications</span>
              </h2>
              {posts.map((post, i)=><PostCard post={post} key={i} />)}
              
              {/* <Card bordered className="card-pubs" onClick={() => this.openPreview(1)}>
                <img src={posts[1].imageUrl} width={200} height={200} alt={posts[1].imageUrl} />
              </Card> */}
          
            </Col>
          </Col>
        </Row>
  )
}
import { Icon, Row } from "antd"
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
            </Col>
          </Col>
        </Row>
  )
}
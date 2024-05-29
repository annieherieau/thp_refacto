import { Col, Input, Modal, Row } from "antd";
import React, { useState } from "react";
import MentionsTagsComponent from "../MentionsTagsComponent";

export default function UploadModal({ visible, closeModal }) {
  const [description, setDescription] = useState("");
  const [hashtags, setHashtags] = useState("");
  const [mentions, setMentions] = useState("");
  const uploadPicture = () => {
    alert(
      "J'upload une image avec la description : " +
        description +
        " et les hashtags " +
        hashtags +
        " et les mentions " +
        mentions
    );
  };

  return (
    <Modal
      title="Upload a picture"
      okText="Upload"
      visible={visible}
      onOk={uploadPicture}
      onCancel={closeModal}
    >
      <Row type="flex" justify="center" className="input-container">
        <Col span={20}>
          <b>Description:</b>
          <Input
            id="description"
            title="Description"
            type="text"
            value={description}
            onChange={(event)=>setDescription(event.target.value)}
          />
        </Col>
      </Row>
      <MentionsTagsComponent
        id="mentions"
        type="mentions"
        value={mentions}
        title="Mention a user"
        setValue={(value)=>setMentions(value)}
      />
      <MentionsTagsComponent
        id="Hashtags"
        type="tags"
        value={hashtags}
        title="Hashtags"
        setValue={(value)=>setHashtags(value)}
      />
    </Modal>
  );
}

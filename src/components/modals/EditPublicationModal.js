import React, { useState } from "react";
import MentionsTagsComponent from "../../MentionsTagsComponent";

export default function EditPublicationModal({
  open,
  onOk,
  onCancel,
  post,
  profileData,
}) {

  const [publication, setPublication] = useState(post);

  const handleChange = (event) => {
    const value = event.target.value;
    switch (event.target.id) {
      case "description":
        setPublication({ ...publication, description: value });
        break;
      case "mentions":
        setPublication({ ...publication, mentions: value });
        break;
      case "tags":
        setPublication({ ...publication, tags: value });
        break;
      default:
        break;
    }
  };

  return(
    <Modal title="Upload a picture" okText="Upload" visible={open} onOk={this.uploadPicture} onCancel={onCancel}>
    <Row type="flex" justify="center" className="input-container">
      <Col span={20}>
        <b>Description:</b>
        <Input id="description" title="Description" type="text" value={publication.description} onChange={handleChange} />
      </Col>
    </Row>
    <MentionsTagsComponent id="mentions" type="mentions" value={publication.mentions} title="Mention a user" setValue={this.updateMentions} />
    <MentionsTagsComponent id="tags" type="tags" value={publication.hashtags} title="Hashtags" setValue={this.updateHashtags} />
  </Modal>
  )
}

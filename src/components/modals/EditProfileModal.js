import React, {useState } from "react";
import { Col, Input, Modal, message } from "antd";
import { Row } from "antd/es";

export default function EditProfileModal({
  visible,
  closeModal,
  profileInfos,
  onUpdate
}) {
  const [updatedProfile, setUpdatedProfile] = useState(profileInfos);
  const handleUpdate = (e) => {
    onUpdate(e);
    // TODO changer les Data
    closeModal();
    message.success("Profile well updated", 3);
  };

  return (
    <Modal
      title="Edit your account"
      okText="Update"
      visible={visible}
      onOk={handleUpdate}
      onCancel={closeModal}
    >
      <Row type="flex" justify="center" className="input-container">
        <Col span={20}>
          <b>EMail</b>
          <Input
            id="email"
            type="text"
            value={updatedProfile.email}
            onChange={(e) =>
              setUpdatedProfile({ ...updatedProfile, email: e.target.value })
            }
          />
        </Col>
      </Row>
      <Row type="flex" justify="center" className="input-container">
        <Col span={20}>
          <b>Firstname</b>
          <Input
            id="firstname"
            type="text"
            value={updatedProfile.firstname}
            onChange={(e) =>
              setUpdatedProfile({
                ...updatedProfile,
                firstname: e.target.value,
              })
            }
          />
        </Col>
      </Row>
      <Row type="flex" justify="center" className="input-container">
        <Col span={20}>
          <b>Lastname</b>
          <Input
            id="lastname"
            type="text"
            value={updatedProfile.lastname}
            onChange={(e) =>
              setUpdatedProfile({ ...updatedProfile, lastname: e.target.value })
            }
          />
        </Col>
      </Row>
      <Row type="flex" justify="center" className="input-container">
        <Col span={20}>
          <b>Phone number</b>
          <Input
            id="phoneNumber"
            type="text"
            value={updatedProfile.phoneNumber}
            onChange={(e) =>
              setUpdatedProfile({
                ...updatedProfile,
                phoneNumber: e.target.value,
              })
            }
          />
        </Col>
      </Row>
    </Modal>
  );
}

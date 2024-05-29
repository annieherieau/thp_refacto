import React, { useContext, useState } from "react";
import { Col, Input, Modal, message } from "antd";
import { Row } from "antd/es";
import { ProfileContext } from "../../profileContext";

export default function EditProfileModal({
  visible,
  closeModal,
  profileInfos,
}) {
  const [profile, setProfile] = useState(profileInfos);
  useContext
  const updateProfile = () => {
    console.log(profile);
    // TODO changer les Data
    closeModal();
    message.success("Profile well updated", 3);
  };

  return (
      <Modal
        title="Edit your account"
        okText="Update"
        visible={visible}
        onOk={updateProfile}
        onCancel={closeModal}
      >
        <Row type="flex" justify="center" className="input-container">
          <Col span={20}>
            <b>EMail</b>
            <Input
              id="email"
              type="text"
              value={profile.email}
              onChange={(e) =>
                setProfile({ ...profile, email: e.target.value })
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
              value={profile.firstname}
              onChange={(e) =>
                setProfile({ ...profile, firstname: e.target.value })
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
              value={profile.lastname}
              onChange={(e) =>
                setProfile({ ...profile, lastname: e.target.value })
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
              value={profile.phoneNumber}
              onChange={(e) =>
                setProfile({ ...profile, phoneNumber: e.target.value })
              }
            />
          </Col>
        </Row>
      </Modal>
  );
}

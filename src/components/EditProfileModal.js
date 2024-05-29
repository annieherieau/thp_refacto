import React, { useState } from "react";
import { Col, Input, Modal, message } from "antd";
import { Row } from "antd/es";


export default function EditProfileModal({
  visible,
  closeModal,
  profileInfos,
}) {
  const [profile, setProfile] = useState(profileInfos);

  const handleChange = (event) => {
    const value = event.target.value;
    switch (event.target.id) {
      case "email":
        setProfile({ ...profile, email: value });
        break;
      case "firstname":
        setProfile({ ...profile, firstname: value });
        break;
      case "lastname":
        setProfile({ ...profile, lastname: value });
        break;
      case "phoneNumber":
        setProfile({ ...profile, phoneNumber: value });
        break;
      default:
        break;
    }
  }

  const updateProfile =()=>{
    console.log(profile);
    // TODO changer les Data
    closeModal();
    message.success("Profile well updated", 3);
  }
 
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
          />
        </Col>
      </Row>
    </Modal>
  );
}

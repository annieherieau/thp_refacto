import React, { useContext, useState } from "react";
import { Col, Input, Modal } from "antd";
import { Row } from "antd/es";
import { ProfileContext } from "../../profileContext";

export default function EditProfileModal({
  visible,
  closeModal,
  profileInfos,
}) {

  const profile = useContext(ProfileContext);
  const [updatedProfile, setUpdatedProfile] = useState(profileInfos);
  const handleUpdate = () => {
    closeModal();
    profile.setProfile(updatedProfile);
    profile.updateProfile();
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

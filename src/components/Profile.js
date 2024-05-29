import React, { useState } from "react";
import { Avatar, Button, Card, Icon, Row } from "antd";
import { Col } from "antd/es";
import EditProfileModal from "./EditProfileModal";
import UploadModal from "./UploadModal";

export default function Profile({ profileData }) {
  const [profileModal, setProfileModal] = useState(false);
  const [uploadModal, setUploadModal] = useState(false);
  const formatDate = (date) => {
    const newDate = new Date(date);
    return `${newDate.getDate()}/${
      newDate.getMonth() + 1
    }/${newDate.getFullYear()}`;
  };

  return (
    <>
      <Row type="flex" align="middle" justify="center">
        <Col sm={16} xs={24}>
          <Card bordered>
            <Row type="flex" align="middle" justify="center">
              <Col md={14} sm={16} xs={24}>
                <Row type="flex" justify="space-between">
                  <Col span={10} className="text-center">
                    <Avatar
                      size={100}
                      icon="user"
                      className="profil-pic"
                      src={profileData.profilePicture}
                    />
                    <h3>{`${profileData.firstname} ${profileData.lastname}`}</h3>
                  </Col>
                  <Col span={10}>
                    <p>
                      <Icon type="user" className="p-icon" />
                      {profileData.username}
                    </p>
                    <p>
                      <Icon type="mail" className="p-icon" />
                      {profileData.email}
                    </p>
                    <p>
                      <Icon type="phone" className="p-icon" />
                      {profileData.phoneNumber}
                    </p>
                    <p>
                      <Icon type="calendar" className="p-icon" />
                      {formatDate(profileData.createdAt)}
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col md={10} sm={16} xs={24} className="text-center">
                <Button
                  type="ghost"
                  icon="setting"
                  onClick={() => setProfileModal(true)}
                >
                  Edit account
                </Button>
                <br />
                <br />
                <Button
                  type="ghost"
                  icon="upload"
                  onClick={() => setUploadModal(true)}
                >
                  Upload a picture
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <EditProfileModal visible={profileModal} closeModal={() => setProfileModal(false)} profileData={profileData} />
      <UploadModal visible={uploadModal} closeModal={()=> setUploadModal(false)} />
    </>
  )
}

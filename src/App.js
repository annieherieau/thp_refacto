// Kata written by Matthieu BRAULT for the next-react formation from TheHackingProject
import React, { Component } from 'react';
// import { Avatar, Button, Card, Col, Icon, Row } from 'antd/es';
// import MentionsTagsComponent from './MentionsTagsComponent';
import PostsList from './components/PostsList';
import Profile from './components/Profile';


class App extends Component {
  constructor() {
    super();
    this.state = {
      editProfilModal: false,
      editPublicationModal: false,
      previewItem: 0,
      uploadModal: false,
      description: '',
      hashtags: '',
      mentions: '',
      email: 'myprofile@thp.fr',
      phoneNumber: '0601020304',
      firstname: 'TheHacking',
      lastname: 'Project',
      profileData: {
        username: 'RefactoProject',
        email: 'myprofile@thp.fr',
        phoneNumber: '0601020304',
        createdAt: '2020-02-23T07:50:17.335Z',
        firstname: 'TheHacking',
        lastname: 'Project',
        profilePicture: "https://res.cloudinary.com/dbu3s1gn0/image/upload/v1715775845/portfolio/icons/node-js.svg",
        posts: [
          {
            imageUrl: 'https://res.cloudinary.com/dbu3s1gn0/image/upload/t_square/v1715775844/portfolio/icons/javascript.svg',
            description: 'This is a Javascript logo',
            hashtags: ['#Javascript', '#reactJS'],
            mentions: ['TheHackingProject'],
            id: 1,
          },
          {
            imageUrl: 'https://www.tuannguyen.tech/wp-content/uploads/2019/01/react.png',
            description: 'This is the React logo',
            hashtags: ['#React', '#formation'],
            mentions: ['THP'],
            id: 2,
          },
          {
            imageUrl: 'https://avatars2.githubusercontent.com/u/25484553?s=200&v=4',
            description: 'The Hacking Project logo',
            hashtags: ['#THP', '#TheHackingProject'],
            mentions: ['youhou', 'week7'],
            id: 3,
          }
        ]
      }
    }
    // this.formatDate = this.formatDate.bind(this);
    // this.uploadPicture = this.uploadPicture.bind(this);
    this.updateHashtags = this.updateHashtags.bind(this);
    this.updateMentions = this.updateMentions.bind(this);
    // this.updateProfile = this.updateProfile.bind(this);
  }

  // formatDate(date) {
  //   const newDate = new Date(date);
  //   return `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`;
  // }

  // openPreview(postNumber) {
  //   this.setState({
  //     previewItem: postNumber,
  //     previewPublicationModal: true,
  //   });
  // }



  updateMentions(value) {
    this.setState({ mentions: value });
  }

  updateHashtags(value) {
    this.setState({ hashtags: value })
  }

  // updateProfile() {
  //   let tmp = this.state.profileData;
  //   tmp.email = this.state.email;
  //   tmp.firstname = this.state.firstname;
  //   tmp.lastname = this.state.lastname;
  //   tmp.phoneNumber = this.state.phoneNumber;
  //   this.setState({ profileData: tmp, editProfilModal: false });
  //   message.success('Profile well updated', 3);
  // }

  render() {
    return (
      <div style={{ margin: 50 }}>

        {/* <Modal title="Upload a picture" okText="Upload" visible={this.state.uploadModal} onOk={this.uploadPicture} onCancel={() => this.setState({ uploadModal: false })}>
          <Row type="flex" justify="center" className="input-container">
            <Col span={20}>
              <b>Description:</b>
              <Input id="description" title="Description" type="text" value={this.state.description} onChange={(e) => this.setState({ description: e.target.value })} />
            </Col>
          </Row>
          <MentionsTagsComponent type="mentions" value={this.state.mentions} title="Mention a user" setValue={this.updateMentions} />
          <MentionsTagsComponent type="tags" value={this.state.hashtags} title="Hashtags" setValue={this.updateHashtags} />
        </Modal> */}
        {/* <Modal title="Edit your account" okText="Update" visible={this.state.editProfilModal} onOk={this.updateProfile} onCancel={() => this.setState({ editProfilModal: false })}>
          <Row type="flex" justify="center" className="input-container">
            <Col span={20}>
              <b>EMail</b>
              <Input id="email" type="text" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
            </Col>
          </Row>
          <Row type="flex" justify="center" className="input-container">
            <Col span={20}>
              <b>Firstname</b>
              <Input id="firstname" type="text" value={this.state.firstname} onChange={(e) => this.setState({ firstname: e.target.value })} />
            </Col>
          </Row>
          <Row type="flex" justify="center" className="input-container">
            <Col span={20}>
              <b>Lastname</b>
              <Input id="lastname" type="text" value={this.state.lastname} onChange={(e) => this.setState({ lastname: e.target.value })} />
            </Col>
          </Row>
          <Row type="flex" justify="center" className="input-container">
            <Col span={20}>
              <b>Phone number</b>
              <Input id="email" type="text" value={this.state.phoneNumber} onChange={(e) => this.setState({ phoneNumber: e.target.value })} />
            </Col>
          </Row>
        </Modal> */}
        {/* <Row type="flex" align="middle" justify="center">
          <Col sm={16} xs={24}>
            <Card bordered>
              <Row type="flex" align="middle" justify="center">
                <Col md={14} sm={16} xs={24}>
                  <Row type="flex" justify="space-between">
                    <Col span={10} className="text-center">
                      <Avatar size={100} icon="user" className="profil-pic" src={this.state.profileData.profilePicture} />
                      <h3>{`${this.state.profileData.firstname} ${this.state.profileData.lastname}`}</h3>
                    </Col>
                    <Col span={10}>
                      <p>
                        <Icon type="user" className="p-icon" />
                        {this.state.profileData.username}
                      </p>
                      <p>
                        <Icon type="mail" className="p-icon" />
                        {this.state.profileData.email}
                      </p>
                      <p>
                        <Icon type="phone" className="p-icon" />
                        {this.state.profileData.phoneNumber}
                      </p>
                      <p>
                        <Icon type="calendar" className="p-icon" />
                        {this.formatDate(this.state.profileData.createdAt)}
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col md={10} sm={16} xs={24} className="text-center">
                  <Button type="ghost" icon="setting" onClick={() => this.setState({ editProfilModal: true })}>Edit account</Button>
                  <br />
                  <br />
                  <Button type="ghost" icon="upload" onClick={() => this.setState({ uploadModal: true })}>Upload a picture</Button>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row> */}
        <Profile profileData={this.state.profileData}/>
        <PostsList posts={this.state.profileData.posts}/>
      </div>
    )
  }
}

export default App;

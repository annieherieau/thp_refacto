// Kata written by Matthieu BRAULT for the next-react formation from TheHackingProject
import React, { Component } from "react";
// import { Avatar, Button, Card, Col, Icon, Row } from 'antd/es';
// import MentionsTagsComponent from './MentionsTagsComponent';
import PostsList from "./components/PostsList";
import Profile from "./components/Profile";
import profileData from "./data/profileData";



class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  

  }

  render() {
    return (
      <div style={{ margin: 50 }}>
        <Profile profileInfos={profileData} />
        <PostsList posts={profileData.posts} />
      </div>
    );
  }
}

export default App;

// Kata written by Matthieu BRAULT for the next-react formation from TheHackingProject
import React, { useState } from "react";
import profileData from "./data/profileData.json";
import Profile from "./components/Profile";
import PostsList from "./components/PostsList";
import { ProfileContext } from "./profileContext";

export default function App() {
  const [profile, setProfile] = useState(profileData);
  const updateProfile = (event) => {
    console.log(event.target.parentNode.parentNode);
  };
  return (
    <ProfileContext.Provider value={profileData}>
      <div style={{ margin: 50 }}>
        <Profile profileInfos={profileData} onUpdate={updateProfile} />
        <PostsList posts={profileData.posts} />
      </div>
    </ProfileContext.Provider>
  );
}

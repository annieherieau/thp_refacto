// Kata written by Matthieu BRAULT for the next-react formation from TheHackingProject
import React, { useContext, useState } from "react";
import profileData from "./data/profileData.json";
import Profile from "./components/Profile";
import PostsList from "./components/PostsList";
import { ProfileContext } from "./profileContext";

export default function App() {
  const profile = useContext(ProfileContext);
  const [currentProfile, setProfile] = useState(profileData);
  return (
    <ProfileContext.Provider value={{ ...profile, currentProfile, setProfile }}>
      <div style={{ margin: 50 }}>
        <Profile profileInfos={currentProfile} />
        <PostsList posts={currentProfile.posts} />
      </div>
    </ProfileContext.Provider>
  );
}

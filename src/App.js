// Kata written by Matthieu BRAULT for the next-react formation from TheHackingProject
import React, { useEffect, useState } from "react";
import profileData from "./data/profileData.json";
import Profile from "./components/Profile";
import PostsList from "./components/PostsList";
import { ProfileContext } from "./profileContext";

export default function App() {
  const [profile, setProfile] = useState(profileData);

  return (
    <ProfileContext.provider value={profile}>
      <div style={{ margin: 50 }}>
        <Profile profileInfos={profile} />
        <PostsList posts={profile.posts} />
      </div>
    </ProfileContext.provider>
  );
}

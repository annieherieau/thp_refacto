// Kata written by Matthieu BRAULT for the next-react formation from TheHackingProject
import React from "react";
import profileData from "./data/profileData";
import Profile from "./components/Profile";
import PostsList from "./components/PostsList";

export default function App() {
  const profileInfos = {...profileData};
  delete profileInfos.posts;
  return (
    <div style={{ margin: 50 }}>
      <Profile profileInfos={profileInfos} />
      <PostsList posts={profileData.posts} />
    </div>
  );
}

import React from "react";
import profileData from "../data/profileData.json";

export const ProfileContext = React.createContext({
  profileData: profileData,
  updateProfile: () => {
    console.log("yes");
  },
});

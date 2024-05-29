import { createContext } from "react";
import profileData from './data/profileData.json'
export const ProfileContext = createContext({
  profileData: {},
  setProfileData: (updatedProfile) => {
    console.log(updatedProfile)
    console.log("yes");
  },
});

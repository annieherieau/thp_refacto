import { createContext } from "react";
import updateProfile from "./components/updateProfile";

export const ProfileContext = createContext({
  profile: null,
  setProfile: null,
  updateProfile: (updatedProfile) => updateProfile(updatedProfile),
});

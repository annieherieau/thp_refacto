import { message } from "antd";
import { createContext } from "react";

export const ProfileContext = createContext({
  profile: null,
  setProfile: null,
  updateProfile: () => {
    message.success("Profile well updated", 3);
  },
});

import { TypeUser } from "./../../types/TypeUser";
import { createSlice } from "@reduxjs/toolkit";
import { setAuthToken } from "@/libs/api";

const initialState: TypeUser = {
  id: 0,
  full_name: "",
  username: "",
  email: "",
  photo_profile: "",
  bio: "",
  follower: [],
  following: [],
  threads: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    AUTH_LOGIN: (_, action) => {
      const payload = action.payload;

      setAuthToken(payload.token);

      localStorage.setItem("token", payload.token);

      const user: any = {
        id: payload.user.id,
        full_name: payload.user.full_name,
        username: payload.user.username,
        email: payload.user.email,
        photo_profile: payload.user.photo_profile,
        bio: payload.user.bio,
        // follower: payload.follow.user.follower,
        // following: payload.follow.user.following,
      };
      return user;
    },

    AUTH_USER_BY_JWT: (_, action) => {
      const payload = action.payload;

      const user: any = {
        id: payload.id,
        full_name: payload.full_name,
        username: payload.username,
        email: payload.email,
        photo_profile: payload.photo_profile,
        bio: payload.bio,
        follower: payload.follower,
        following: payload.following,
      };
      return user;
    },

    AUTH_CHECK: (_, action) => {
      const payload = action.payload;

      const user: any = {
        id: payload.id,
        full_name: payload.full_name,
        username: payload.username,
        email: payload.email,
        photo_profile: payload.photo_profile,
        bio: payload.bio,
        follower: payload.follower,
        following: payload.following,
        threads: payload.threads,
        replies: payload.replies,
      };
      return user;
    },

    AUTH_ERROR: () => {
      localStorage.removeItem("token");
    },

    AUTH_LOGOUT: () => {
      localStorage.removeItem("token");
    },
  },
});

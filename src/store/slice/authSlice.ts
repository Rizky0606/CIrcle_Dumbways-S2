import { TypeUser } from "./../../types/TypeUser";
import { createSlice } from "@reduxjs/toolkit";
import { setAuthToken } from "@/libs/api";

const initialState: TypeUser = {
  id: 0,
  full_name: "",
  username: "",
  email: "",
  photo_profile: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    AUTH_LOGIN: (state, action) => {
      const payload = action.payload;
      setAuthToken(payload.token);

      localStorage.setItem("token", payload.token);

      const user: TypeUser = {
        id: payload.id,
        full_name: payload.full_name,
        username: payload.username,
        email: payload.email,
        photo_profile: payload.photo_profile,
      };
      return user;
    },

    AUTH_CHECK: (state, action) => {
      const payload = action.payload;

      const user: TypeUser = {
        id: payload.id,
        full_name: payload.full_name,
        username: payload.username,
        email: payload.email,
        photo_profile: payload.photo_profile,
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

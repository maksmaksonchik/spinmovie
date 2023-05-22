import { createSlice } from "@reduxjs/toolkit";
import { TUser } from "../../models/TUser";
import { userApi } from "../../services/userApi/userApi";

type UserState = {
  user: TUser | null;
  isAuth: boolean;
}

const initialState: UserState = {
  user: null,
  isAuth: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout(state) {
      localStorage.removeItem('token')
      state.user = null;
      state.isAuth = false;
    },
  },
  extraReducers: (builder) => {
    builder
    .addMatcher(userApi.endpoints.login.matchFulfilled, (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
    })
    .addMatcher(userApi.endpoints.registration.matchFulfilled, (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
    })
    .addMatcher(userApi.endpoints.check.matchFulfilled, (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
    })
  },
})

export const userReducer = userSlice.reducer;

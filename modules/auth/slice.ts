import {createSlice} from "@reduxjs/toolkit";
import {
  addRecommAction,
  emailCheckAction,
  loginAction,
  logoutAction,
  signupAction,
  updateTokenAction,
} from "./thunk";
import {AuthState, User} from "./type";

const initialState: AuthState = {
  login: {loading: false, data: null, error: null},
  signup: {loading: false, data: null, error: null},
  addRecomm: {loading: false, data: null, error: null},
  emailCheck: "ok",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetSignUp: (state) => {
      state.signup = {loading: false, data: null, error: null};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAction.pending, (state) => {
        state.login.loading = true;
        state.login.data = null;
        state.login.error = null;
      })
      .addCase(loginAction.fulfilled, (state, {payload}) => {
        state.login.loading = false;
        state.login.data = payload;
        state.login.error = null;
      })
      .addCase(loginAction.rejected, (state, {payload}) => {
        state.login.loading = true;
        state.login.data = null;
        state.login.error = payload;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.login.loading = false;
        state.login.data = null;
        state.login.error = null;
      })
      .addCase(logoutAction.rejected, (state, {payload}) => {
        state.login.loading = true;
        state.login.data = null;
        state.login.error = payload;
      })
      .addCase(signupAction.pending, (state) => {
        state.signup.loading = true;
        state.signup.data = null;
        state.signup.error = null;
      })
      .addCase(signupAction.fulfilled, (state, {payload}) => {
        state.signup.loading = false;
        state.signup.data = payload;
        state.signup.error = null;
      })
      .addCase(signupAction.rejected, (state, {payload}) => {
        state.signup.loading = true;
        state.signup.data = null;
        state.signup.error = payload;
      })
      .addCase(addRecommAction.pending, (state) => {
        state.addRecomm.loading = true;
        state.addRecomm.data = null;
        state.addRecomm.error = null;
      })
      .addCase(addRecommAction.fulfilled, (state, {payload}) => {
        state.addRecomm.loading = false;
        state.addRecomm.data = payload.name;
        state.addRecomm.error = null;
      })
      .addCase(addRecommAction.rejected, (state, {payload}) => {
        state.addRecomm.loading = true;
        state.addRecomm.data = null;
        state.addRecomm.error = payload;
      })
      .addCase(emailCheckAction.fulfilled, (state, {payload}) => {
        state.emailCheck = payload;
      })
      .addCase(updateTokenAction.fulfilled, (state, {payload}) => {
        (state.login.data as User).webPushToken = payload;
      });
  },
});

const auth = authSlice.reducer;
export const {resetSignUp} = authSlice.actions;

export default auth;

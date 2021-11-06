import { createAsyncThunk } from '@reduxjs/toolkit';
import { AddRecommResult, AuthPayload, MyKnownError, SignupResult, User } from './type';
import { toastPopAction } from '../ui';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_SERVER_HOST;
axios.defaults.withCredentials = true;

//NOTE: 로그인
export const loginAction = createAsyncThunk<
  User,
  AuthPayload['login'],
  { rejectValue: MyKnownError }
>('auth/login', async (loginData, { rejectWithValue, dispatch }) => {
  try {
    const { data } = await axios.post<User>('seller/auth/login', loginData);
    await toastPopAction(dispatch, `${data.name}님 반갑습니다.`);
    return data;
  } catch (e) {
    console.error(e);
    await toastPopAction(dispatch, e.response.data);
    return rejectWithValue({ message: e.response.data });
  }
});

//NOTE: 로그아웃
export const logoutAction = createAsyncThunk<
  User,
  AuthPayload['logout'],
  { rejectValue: MyKnownError }
>('auth/logout', async ({ email, name }, { rejectWithValue, dispatch }) => {
  try {
    const { data } = await axios.get(`seller/auth/logout?email=${email}`);

    await toastPopAction(dispatch, `다시뵈어요! ${name}님`);
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});

//NOTE: 회원가입
export const signupAction = createAsyncThunk<
  SignupResult,
  AuthPayload['signup'],
  { rejectValue: MyKnownError }
>('auth/signup', async (signupData, { rejectWithValue, dispatch }) => {
  try {
    const { data } = await axios.post(`seller/auth/regist`, signupData);

    await toastPopAction(dispatch, `반갑습니다! ${signupData.manager}님`);
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});

//NOTE: 추천인 등록
export const addRecommAction = createAsyncThunk<
  AddRecommResult,
  AuthPayload['addRecomm'],
  { rejectValue: MyKnownError }
>('auth/addRecomm', async (recommenderData, { rejectWithValue, dispatch }) => {
  try {
    const { data } = await axios.post(`seller/auth/recommender`, recommenderData);
    await toastPopAction(dispatch, `${data.name}님을 추천하였습니다.`);
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});

//NOTE: 이메일 중복확인
export const emailCheckAction = createAsyncThunk<
  'ok' | 'exist',
  string,
  { rejectValue: MyKnownError }
>('auth/emailCheck', async (email, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(`seller/auth/email?email=${email}`);
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});

//NOTE: 웹푸시 토큰
export const updateTokenAction = createAsyncThunk<
  string,
  AuthPayload['updateToken'],
  { rejectValue: MyKnownError }
>('auth/updateToken', async (payload, { rejectWithValue }) => {
  try {
    const { data } = await axios.patch(`seller/auth/webToken`, payload);
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});

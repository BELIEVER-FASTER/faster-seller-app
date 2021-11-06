import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Category, Color, Store } from '../../utils/data';
import { MyKnownError } from '../product';

axios.defaults.baseURL = process.env.REACT_APP_SERVER_HOST;
axios.defaults.withCredentials = true;

//NOTE: 스토어 데이터 조회
export const loadStoreListAct = createAsyncThunk<
  Store[],
  null,
  { rejectValue: MyKnownError }
>('ui/loadStore', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get<Store[]>(`seller/data/store`);
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});

//NOTE: 색상 데이터 조회
export const loadColorListAct = createAsyncThunk<
  Color[],
  null,
  { rejectValue: MyKnownError }
>('ui/loadColor', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get<Color[]>(`seller/data/color`);
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});

//NOTE: 카테고리 데이터 조회
export const loadCategoryListAct = createAsyncThunk<
  Category[],
  null,
  { rejectValue: MyKnownError }
>('ui/loadCategory', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get<Category[]>(`seller/data/category`);
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});

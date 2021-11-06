import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Category, Color, Store } from '../../utils/data';
import { loadStoreListAct, loadColorListAct, loadCategoryListAct } from './thunk';

export type UIState = {
  toastPopUp: { open: boolean; visible: boolean; message: string | null };
  storeList: Store[];
  colorList: Color[];
  categoryList: Category[];
};

const initialState: UIState = {
  toastPopUp: { message: null, open: false, visible: false },
  storeList: [],
  colorList: [],
  categoryList: [],
};

const uiSlice = createSlice({
  name: 'uiSlice',
  initialState,
  reducers: {
    toastOpen(state, action: PayloadAction<string>) {
      state.toastPopUp = { message: action.payload, open: true, visible: true };
    },
    toastClose(state) {
      state.toastPopUp.visible = false;
    },
    toastInitialize(state) {
      state.toastPopUp = { message: null, open: false, visible: false };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loadStoreListAct.fulfilled, (state, { payload }) => {
        state.storeList = payload;
      })
      .addCase(loadColorListAct.fulfilled, (state, { payload }) => {
        state.colorList = payload;
      })
      .addCase(loadCategoryListAct.fulfilled, (state, { payload }) => {
        state.categoryList = payload;
      });
  },
});

const ui = uiSlice.reducer;
export const { toastClose, toastInitialize, toastOpen } = uiSlice.actions;
export default ui;

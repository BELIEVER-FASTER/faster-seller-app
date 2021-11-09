import {createAsyncThunk} from "@reduxjs/toolkit";
import {toastPopAction} from "../ui/hook";
import axios from "axios";
import {MyKnownError, ProductDetail, ProductListItem, ProductPayload} from "./type";
import {hasMoreData, isMoreLoading} from "./slice";

axios.defaults.baseURL = process.env.REACT_APP_SERVER_HOST;
axios.defaults.withCredentials = true;

const delay = async () => {
  await new Promise((res) => {
    setTimeout(() => {
      res(1);
    }, 350);
  });
};

//NOTE: 상품 리스트
export const loadProductListAction = createAsyncThunk<
  ProductListItem[],
  ProductPayload["loadProductList"],
  {rejectValue: MyKnownError}
>("product/loadProductList", async (loadListData, {rejectWithValue, dispatch}) => {
  try {
    const {data} = await axios.get<ProductListItem[]>(
      `seller/product${loadListData.page ? `?page=${loadListData.page}&` : "?"}${
        loadListData.sort ? `sort=${loadListData.sort}&` : ""
      }${loadListData.keyword ? `keyword=${loadListData.keyword}` : ""}`
    );
    dispatch(hasMoreData(data.length === 14));
    dispatch(isMoreLoading(loadListData.page ? loadListData.page !== 1 : false));

    return data;
  } catch (e) {
    // console.error(e);
    await toastPopAction(dispatch, e.response.data);
    return rejectWithValue({message: e.response.data});
  }
});

//NOTE: 진열상태 수정
export const toggleActiveAction = createAsyncThunk<
  string,
  ProductPayload["toggleActive"],
  {rejectValue: MyKnownError}
>("product/toggleActive", async ({productId, isActive}, {rejectWithValue, dispatch}) => {
  try {
    const {data} = await axios.patch<string>(`seller/product/visible/${productId}`, {
      isActive,
    });
    return data;
  } catch (e) {
    // console.error(e);
    await toastPopAction(dispatch, e.response.data);
    return rejectWithValue({message: e.response.data});
  }
});

//NOTE: 상품 디테일 조회
export const loadDetailAction = createAsyncThunk<
  ProductDetail,
  ProductPayload["loadDetail"],
  {rejectValue: MyKnownError}
>("product/loadDetail", async ({type, productId}, {rejectWithValue, dispatch}) => {
  try {
    const {data} = await axios.get<ProductDetail>(
      `seller/product/${productId}?type=${type}`
    );
    await delay();
    return data;
  } catch (e) {
    // console.error(e);
    await toastPopAction(dispatch, e.response.data);
    return rejectWithValue({message: e.response.data});
  }
});

//NOTE: 상품 비교용 조회
export const loadExistAction = createAsyncThunk<
  ProductDetail,
  number,
  {rejectValue: MyKnownError}
>("product/loadExist", async (productId, {rejectWithValue}) => {
  try {
    const {data} = await axios.get<ProductDetail>(
      `seller/product/${productId}?type=exist`
    );
    return data;
  } catch (e) {
    // console.error(e);
    return rejectWithValue({message: e.response.data});
  }
});

//NOTE: 상품 등록
export const addProductAction = createAsyncThunk<
  ProductDetail,
  ProductPayload["addProduct"],
  {rejectValue: MyKnownError}
>("product/addProduct", async (addProductData, {rejectWithValue, dispatch}) => {
  try {
    const {data} = await axios.post<ProductDetail>(`seller/product/new`, addProductData);

    await toastPopAction(dispatch, `${addProductData.name}상품등록이 완료되었습니다.`);
    return data;
  } catch (e) {
    // console.error(e);
    await toastPopAction(dispatch, e.response.data);
    return rejectWithValue({message: e.response.data});
  }
});

//NOTE: 상품 수정
export const updateProductAction = createAsyncThunk<
  ProductDetail,
  ProductPayload["updateProduct"],
  {rejectValue: MyKnownError}
>("product/updateProduct", async (updateProductData, {rejectWithValue, dispatch}) => {
  try {
    const {data} = await axios.patch<ProductDetail>(
      `seller/product/${updateProductData.ProductId}`,
      updateProductData
    );

    await toastPopAction(dispatch, `${updateProductData.name}상품수정이 완료되었습니다.`);
    return data;
  } catch (e) {
    // console.error(e);
    await toastPopAction(dispatch, e.response.data);
    return rejectWithValue({message: e.response.data});
  }
});

//NOTE: 상품 수정
export const removeProductAction = createAsyncThunk<
  string,
  ProductPayload["removeProduct"],
  {rejectValue: MyKnownError}
>("product/removeProduct", async ({ProductId, name}, {rejectWithValue, dispatch}) => {
  try {
    const {data} = await axios.delete<string>(`seller/product/${ProductId}`);

    await toastPopAction(dispatch, `${name}상품이 삭제되었습니다.`);
    return data;
  } catch (e) {
    // console.error(e);
    await toastPopAction(dispatch, e.response.data);
    return rejectWithValue({message: e.response.data});
  }
});

//NOTE: 총 상품 수량
export const loadProductCntAction = createAsyncThunk<
  number,
  ProductPayload["loadProductCnt"],
  {rejectValue: MyKnownError}
>("product/loadCnt", async ({keyword}, {rejectWithValue}) => {
  try {
    const {data} = await axios.get<number>(
      `seller/product/count${keyword ? `?keyword=${keyword}` : ""}`
    );

    return data;
  } catch (e) {
    // console.error(e);
    return rejectWithValue({message: e.response.data});
  }
});

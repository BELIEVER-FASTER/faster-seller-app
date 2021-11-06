import {createSlice} from "@reduxjs/toolkit";
import {
  addProductAction,
  loadDetailAction,
  loadExistAction,
  loadProductCntAction,
  loadProductListAction,
  ProductListItem,
  ProductState,
  removeProductAction,
  toggleActiveAction,
  updateProductAction,
} from ".";

const initialState: ProductState = {
  loadProductList: {loading: false, data: null, error: null},
  loadDetail: {loading: false, data: null, error: null},
  addProduct: {loading: false, data: null, error: null},
  updateProduct: {loading: false, data: null, error: null},
  existData: {loading: false, data: null, error: null},
  totalCnt: 0,
  loadMore: false,
  hasMore: true,
  page: 1,
  reloadBlock: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    resetDetail(state) {
      state.loadDetail = initialState.loadDetail;
    },
    resetRegist(state) {
      state.addProduct = initialState.addProduct;
    },
    isMoreLoading(state, {payload}) {
      state.loadMore = payload;
    },
    hasMoreData(state, {payload}) {
      state.hasMore = payload;
    },
    setPage(state, {payload}) {
      payload === "next" ? (state.page = state.page + 1) : (state.page = payload);
    },
    resetExist(state) {
      state.existData.data = null;
    },
    setReloadBlock(state, {payload}) {
      state.reloadBlock = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadProductListAction.pending, (state) => {
        state.loadProductList.data = state.page === 1 ? null : state.loadProductList.data;
        state.loadProductList.loading = true;
        state.loadProductList.error = null;
      })
      .addCase(loadProductListAction.fulfilled, (state, {payload}) => {
        state.loadProductList.loading = false;
        (state.loadProductList.data as ProductListItem[]) = state.loadMore
          ? (state.loadProductList.data as ProductListItem[]).concat(payload)
          : payload;
        state.loadProductList.error = null;
      })
      .addCase(loadProductListAction.rejected, (state, {payload}) => {
        state.loadProductList.loading = true;
        state.loadProductList.data = null;
        state.loadProductList.error = payload;
      })
      .addCase(toggleActiveAction.fulfilled, (state, {payload}) => {
        const idx = state.loadProductList.data?.findIndex(
          (v) => v.id === +payload
        ) as number;
        if (idx === -1) return;

        const isActive = (state.loadProductList.data as ProductListItem[])[idx].isActive;
        (state.loadProductList.data as ProductListItem[])[idx] = {
          ...(state.loadProductList.data as ProductListItem[])[idx],
          isActive: isActive === 1 ? 0 : 1,
          state: 2,
        };
      })
      .addCase(loadDetailAction.pending, (state) => {
        state.loadDetail.loading = true;
        state.loadDetail.data = null;
        state.loadDetail.error = null;
      })
      .addCase(loadDetailAction.fulfilled, (state, {payload}) => {
        state.loadDetail.loading = false;
        state.loadDetail.data = payload;
        state.loadDetail.error = null;
      })
      .addCase(loadDetailAction.rejected, (state, {payload}) => {
        state.loadDetail.loading = true;
        state.loadDetail.data = null;
        state.loadDetail.error = payload;
      })
      .addCase(addProductAction.pending, (state) => {
        state.addProduct.loading = true;
        state.addProduct.data = null;
        state.addProduct.error = null;
      })
      .addCase(addProductAction.fulfilled, (state, {payload}) => {
        state.loadProductList.data = [
          {
            id: payload.id,
            thumbnail: payload.thumbnail,
            name: payload.name,
            price: payload.price,
            createdAt: payload.createdAt,
            isActive: 1,
            state: 1,
            UpdatedProduct: null,
          },
          ...(state.loadProductList.data as ProductListItem[]),
        ];
        state.addProduct.loading = false;
        state.addProduct.data = payload;
        state.addProduct.error = null;
      })
      .addCase(addProductAction.rejected, (state, {payload}) => {
        state.addProduct.loading = true;
        state.addProduct.data = null;
        state.addProduct.error = payload;
      })
      .addCase(updateProductAction.pending, (state) => {
        state.updateProduct.loading = true;
        state.updateProduct.data = null;
        state.updateProduct.error = null;
      })
      .addCase(updateProductAction.fulfilled, (state, {payload}) => {
        state.updateProduct.loading = false;
        state.updateProduct.data = payload;
        state.updateProduct.error = null;

        const idx = state.loadProductList.data?.findIndex(
          (v) => v.id === (payload.ProductId as number)
        ) as number;
        if (idx === -1) return;

        (state.loadProductList.data as ProductListItem[])[idx] = {
          ...(state.loadProductList.data as ProductListItem[])[idx],
          state: 2,
          UpdatedProduct: {
            name: payload.name,
            price: payload.price,
            thumbnail: payload.thumbnail,
          },
        };
      })
      .addCase(updateProductAction.rejected, (state, {payload}) => {
        state.updateProduct.loading = true;
        state.updateProduct.data = null;
        state.updateProduct.error = payload;
      })
      .addCase(removeProductAction.fulfilled, (state, {payload}) => {
        state.totalCnt = state.totalCnt - 1;
        const idx = state.loadProductList.data?.findIndex(
          (v) => v.id === +payload
        ) as number;
        if (idx === -1) return;
        (state.loadProductList.data as ProductListItem[]) = (
          state.loadProductList.data as ProductListItem[]
        ).filter((prod) => prod.id !== +payload);
      })
      .addCase(loadProductCntAction.fulfilled, (state, {payload}) => {
        state.totalCnt = payload;
      })
      .addCase(loadExistAction.fulfilled, (state, {payload}) => {
        state.existData.data = payload;
      });
  },
});

const product = productSlice.reducer;

export const {
  resetDetail,
  hasMoreData,
  setReloadBlock,
  isMoreLoading,
  resetRegist,
  setPage,
  resetExist,
} = productSlice.actions;
export default product;

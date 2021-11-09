import {useCallback} from "react";
import {
  addProductAction,
  loadDetailAction,
  loadExistAction,
  loadProductCntAction,
  loadProductListAction,
  removeProductAction,
  toggleActiveAction,
  updateProductAction,
} from "./thunk";
import {ProductPayload} from "./type";
import {useAppDispatch, useAppSelector} from "../hooks";
import {resetDetail, resetExist, resetRegist, setPage, setReloadBlock} from "./slice";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useProduct() {
  const {
    reloadBlock,
    page,
    addProduct,
    loadProductList,
    loadDetail,
    hasMore,
    loadMore,
    totalCnt,
    existData,
  } = useAppSelector((state) => state.product);

  const dispatch = useAppDispatch();

  const loadProductListDispatch = useCallback(
    (data: ProductPayload["loadProductList"]) => {
      dispatch(loadProductListAction(data));
    },
    []
  );

  const toggleActiveDispatch = useCallback((data: ProductPayload["toggleActive"]) => {
    dispatch(toggleActiveAction(data));
  }, []);

  const loadDetailDispatch = useCallback((data: ProductPayload["loadDetail"]) => {
    dispatch(loadDetailAction(data));
  }, []);

  const loadExistDispatch = useCallback((data: number) => {
    dispatch(loadExistAction(data));
  }, []);

  const resetExistDispatch = useCallback(() => {
    dispatch(resetExist());
  }, []);

  const resetDetailDispatch = useCallback(() => {
    dispatch(resetDetail());
  }, []);

  const addProductDispatch = useCallback((data: ProductPayload["addProduct"]) => {
    dispatch(addProductAction(data));
  }, []);

  const updateProductDispatch = useCallback((data: ProductPayload["updateProduct"]) => {
    dispatch(updateProductAction(data));
  }, []);

  const removeProductDispatch = useCallback((data: ProductPayload["removeProduct"]) => {
    dispatch(removeProductAction(data));
  }, []);

  const loadProductCntDispatch = useCallback((data: ProductPayload["loadProductCnt"]) => {
    dispatch(loadProductCntAction(data));
  }, []);

  const setPageDispatch = useCallback((data: number | "next") => {
    dispatch(setPage(data));
  }, []);

  const setReloadBlockDispatch = useCallback((data: boolean) => {
    dispatch(setReloadBlock(data));
  }, []);

  const resetRegistDispatch = useCallback(() => {
    dispatch(resetRegist());
  }, []);
  return {
    page,
    resetRegistDispatch,
    existData,
    reloadBlock,
    totalCnt,
    addProduct,
    loadMore,
    hasMore,
    loadDetail,
    loadProductList,
    loadProductListDispatch,
    loadExistDispatch,
    resetExistDispatch,
    loadDetailDispatch,
    toggleActiveDispatch,
    addProductDispatch,
    updateProductDispatch,
    removeProductDispatch,
    loadProductCntDispatch,
    setPageDispatch,
    setReloadBlockDispatch,
    resetDetailDispatch,
  };
}

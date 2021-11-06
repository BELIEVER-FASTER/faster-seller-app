import _delay from 'lodash/delay';
import { useCallback } from 'react';
import { Dispatch } from 'redux';
import { loadCategoryListAct, loadColorListAct, loadStoreListAct } from '.';
import { useAppDispatch, useAppSelector } from '..';
import { toastOpen, toastInitialize, toastClose } from './slice';

export const toastPopAction = async (
  dispatch: Dispatch,
  message: string
): Promise<void> => {
  await dispatch(toastInitialize());
  await dispatch(toastOpen(message));
  await _delay(() => dispatch(toastClose()), 2000);
  await _delay(() => dispatch(toastInitialize()), 2300);
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useUI() {
  const { toastPopUp, storeList, colorList, categoryList } = useAppSelector(
    state => state.ui
  );
  const dispatch = useAppDispatch();

  const toastOpenDispatch = async (message: string) => {
    await dispatch(toastInitialize());
    await dispatch(toastOpen(message));
    await _delay(() => dispatch(toastClose()), 2000);
    await _delay(() => dispatch(toastInitialize()), 2300);
  };

  const loadStoreDispatch = useCallback(() => {
    dispatch(loadStoreListAct(null));
  }, []);

  const loadColorDispatch = useCallback(() => {
    dispatch(loadColorListAct(null));
  }, []);

  const loadCategoryDispatch = useCallback(() => {
    dispatch(loadCategoryListAct(null));
  }, []);

  return {
    toastPopUp,
    storeList,
    colorList,
    categoryList,
    toastOpenDispatch,
    loadStoreDispatch,
    loadColorDispatch,
    loadCategoryDispatch,
  };
}

export default useUI;

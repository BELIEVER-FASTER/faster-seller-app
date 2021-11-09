import {useCallback} from "react";
import {AuthPayload} from "./type";
import {useAppDispatch, useAppSelector} from "../hooks";
import {
  addRecommAction,
  emailCheckAction,
  loginAction,
  logoutAction,
  signupAction,
  updateTokenAction,
} from "./thunk";
import {resetSignUp} from "./slice";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useAuth() {
  const {signup, login, emailCheck} = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  const resetSignUpDispatch = useCallback(() => {
    dispatch(resetSignUp());
  }, []);

  const loginDispatch = useCallback((data: AuthPayload["login"]) => {
    dispatch(loginAction(data));
  }, []);
  const logoutDispatch = useCallback((data: AuthPayload["logout"]) => {
    dispatch(logoutAction(data));
  }, []);
  const signupDispatch = useCallback((data: AuthPayload["signup"]) => {
    dispatch(signupAction(data));
  }, []);
  const addRecommDispatch = useCallback((data: AuthPayload["addRecomm"]) => {
    dispatch(addRecommAction(data));
  }, []);
  const emailCheckDispatch = useCallback((data: string) => {
    dispatch(emailCheckAction(data));
  }, []);
  const updateTokenDispatch = useCallback((data: AuthPayload["updateToken"]) => {
    dispatch(updateTokenAction(data));
  }, []);

  return {
    signup,
    emailCheck,
    login,
    loginDispatch,
    logoutDispatch,
    signupDispatch,
    addRecommDispatch,
    emailCheckDispatch,
    updateTokenDispatch,
    resetSignUpDispatch,
  };
}

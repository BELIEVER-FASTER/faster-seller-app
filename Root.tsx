import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import Root from "./navigations/LoggedIn/Root";
import Root2 from "./navigations/NotLoggedIn/Root";
import Toast from "./components/Common/Toast";
import {useAuth} from "./modules/auth";
import SignUpFormProvider from "./hooks/SignUpFormProvider";

export default function RootApp() {
  const {login} = useAuth();
  return (
    <SignUpFormProvider>
      <NavigationContainer>
        {/* <Root2 /> */}
        {!login.data ? <Root2 /> : <Root />}
      </NavigationContainer>
      <Toast />
    </SignUpFormProvider>
  );
}

import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import Root from "./navigations/LoggedIn/Root";
import Root2 from "./navigations/NotLoggedIn/Root";
import Toast from "./components/Common/Toast";
import {useAuth} from "./modules/auth";

export default function RootApp() {
  const {login} = useAuth();
  return (
    <NavigationContainer>
      {!login.data ? <Root2 /> : <Root />}
      <Toast />
    </NavigationContainer>
  );
}

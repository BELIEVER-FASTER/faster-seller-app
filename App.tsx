import AppLoading from "expo-app-loading";
import {useAssets} from "expo-asset";
import {useFonts} from "expo-font";
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import Root from "./navigations/LoggedIn/Root";

export default function App() {
  const [loaded] = useFonts({
    Spoqa: require("./assets/fonts/SpoqaHanSansNeo-Regular.ttf"),
    SpoqaBold: require("./assets/fonts/SpoqaHanSansNeo-Bold.ttf"),
    SpoqaLight: require("./assets/fonts/SpoqaHanSansNeo-Light.ttf"),
    SpoqaMedium: require("./assets/fonts/SpoqaHanSansNeo-Medium.ttf"),
    SpoqaThin: require("./assets/fonts/SpoqaHanSansNeo-Thin.ttf"),
  });
  const [assets] = useAssets([require("./assets/images/loginBg.png")]);

  if (!loaded || !assets) return <AppLoading />;
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
}

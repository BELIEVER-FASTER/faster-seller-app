import AppLoading from "expo-app-loading";
import {useAssets} from "expo-asset";
import {useFonts} from "expo-font";
import {StatusBar} from "expo-status-bar";
import React from "react";
import {StyleSheet, Text, View} from "react-native";

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
    <View style={styles.container}>
      <Text style={styles.text}>안녕하세요</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "SpoqaBold",
    fontSize: 30,
  },
});

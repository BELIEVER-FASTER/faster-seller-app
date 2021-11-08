import React from "react";
import {Image, View} from "react-native";

export default function Loading(): JSX.Element {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fbfbfb",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={{width: "50%", height: 100, marginBottom: 100}}
        source={require("../../assets/images/loading.gif")}
      />
    </View>
  );
}

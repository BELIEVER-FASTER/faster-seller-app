import {useNavigation} from "@react-navigation/core";
import {StatusBar} from "expo-status-bar";
import React from "react";
import {Pressable, Text, View} from "react-native";

export default function SU1() {
  const navigation = useNavigation();
  const go2 = () => {
    navigation.navigate("SIGNUP2");
  };
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <StatusBar translucent style={"dark"} />
      <Pressable onPress={go2}>
        <Text style={{fontSize: 30}}>로그인정보</Text>
      </Pressable>
    </View>
  );
}

import {useNavigation} from "@react-navigation/core";
import React from "react";
import {Pressable, Text, View} from "react-native";

export default function SU2() {
  const navigation = useNavigation();
  const go2 = () => {
    navigation.navigate("LOGIN");
  };
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Pressable onPress={go2}>
        <Text style={{fontSize: 30}}>입점사정보</Text>
      </Pressable>
    </View>
  );
}

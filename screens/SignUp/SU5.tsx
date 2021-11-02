import {useNavigation} from "@react-navigation/core";
import React from "react";
import {Image, Keyboard, Text, TouchableWithoutFeedback, View} from "react-native";
import Button from "../../components/Common/Button";
import {MultiLineText, SignUpContainer} from "./styles";

export default function SU5() {
  const navigation = useNavigation();
  const go2 = () => {
    navigation.navigate("SIGNUP6");
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SignUpContainer>
        <View>
          {"가장 빠른 영업일에/매장으로 방문하여/인사드리겠습니다😊"
            .split("/")
            .map((v) => (
              <MultiLineText key={v}>{v}</MultiLineText>
            ))}
        </View>
        <Text style={{fontSize: 16, marginTop: 10}}>
          매장 방문하여 확인 후 회원가입이 승인됩니다!
        </Text>
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
          <Image source={require("../../assets/images/goodJob.png")} />
        </View>

        <Button title="회원가입 완료 🎉" onPress={go2} />
      </SignUpContainer>
    </TouchableWithoutFeedback>
  );
}

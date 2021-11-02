import {useNavigation} from "@react-navigation/core";
import React from "react";
import {Keyboard, TouchableWithoutFeedback, View} from "react-native";
import Button from "../../components/Common/Button";
import Input from "../../components/Common/Input";
import Hint from "./Hint";
import {SignUpContainer, SignUpTitle} from "./styles";

export default function SU3() {
  const navigation = useNavigation();
  const go2 = () => {
    navigation.navigate("SIGNUP4");
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SignUpContainer>
        <SignUpTitle>담당자 정보를 입력해주세요.</SignUpTitle>
        <Input label="성함을 알려주세요" placeholder="예시:홍길동" />
        <View style={{height: 24}} />
        <Input label="연락처를 알려주세요" placeholder="예시:010-1234-5678" />
        <View style={{flex: 1}} />

        <Hint title="안녕하세요 사장님~ 매니저님~" />
        <Button title="다음" onPress={go2} />
      </SignUpContainer>
    </TouchableWithoutFeedback>
  );
}

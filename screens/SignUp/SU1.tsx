import {useNavigation} from "@react-navigation/core";
import {StatusBar} from "expo-status-bar";
import React from "react";
import {Keyboard, TouchableWithoutFeedback, View} from "react-native";
import Button from "../../components/Common/Button";
import Input from "../../components/Common/Input";
import Hint from "./Hint";
import {SignUpContainer, SignUpTitle} from "./styles";

export default function SU1() {
  const navigation = useNavigation();
  const go2 = () => {
    navigation.navigate("SIGNUP2");
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SignUpContainer>
        <StatusBar translucent style={"dark"} />
        <SignUpTitle>아이디/비밀번호를 입력해주세요.</SignUpTitle>
        <Input label="아이디(이메일)" placeholder="예시:faster@naver.com" />
        <View style={{height: 24}} />
        <Input label="비밀번호" placeholder="영문, 숫자를 포함한 8자 이상의 비밀번호" />
        <View style={{height: 24}} />
        <Input label="비밀번호 확인" placeholder="비밀번호를 한번더 입력해주세요." />
        <View style={{flex: 1}} />

        <Hint title="회원가입만 해도 혜택이 와르르~~" />
        <Button title="다음" onPress={go2} />
      </SignUpContainer>
    </TouchableWithoutFeedback>
  );
}

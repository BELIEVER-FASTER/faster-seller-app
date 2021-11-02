import {useNavigation} from "@react-navigation/core";
import React from "react";
import {Keyboard, Pressable, Text, TouchableWithoutFeedback, View} from "react-native";
import Button from "../../components/Common/Button";
import Input from "../../components/Common/Input";
import Hint from "./Hint";
import {SignUpContainer, SignUpTitle} from "./styles";

export default function SU4() {
  const navigation = useNavigation();
  const go2 = () => {
    navigation.navigate("SIGNUP5");
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SignUpContainer>
        <SignUpTitle>정산 계좌정보를 입력해주세요.</SignUpTitle>
        <Input label="은행명을 적어주세요" placeholder="예시:신한은행" />
        <View style={{height: 24}} />
        <Input label="계좌번호를 적어주세요" placeholder="예시:1234-1234-12-12" />
        <View style={{height: 24}} />
        <Input label="예금주명을 적어주세요" placeholder="예시:홍길동" />
        <View style={{flex: 1}} />

        <Hint title="우와~ 벌써 회원가입이 완료 됐습니다!" />
        <Button title="다음" onPress={go2} />
      </SignUpContainer>
    </TouchableWithoutFeedback>
  );
}

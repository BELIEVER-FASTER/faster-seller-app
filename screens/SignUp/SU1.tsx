import {useNavigation} from "@react-navigation/core";
import {StatusBar} from "expo-status-bar";
import React from "react";
import {Alert, Keyboard, TouchableWithoutFeedback, View} from "react-native";
import Button from "../../components/Common/Button";
import Input from "../../components/Common/Input";
import {useSF} from "../../hooks/SignUpFormProvider";
import Hint from "./Hint";
import {SignUpContainer, SignUpTitle} from "./styles";

export default function SU1() {
  const navigation = useNavigation();
  const {email, pwd, pwdCheck} = useSF();
  const go2 = () => {
    if (!email.email) return Alert.alert("이메일을 입력해주세요.");
    if (!pwd.pwd) return Alert.alert("비밀번호를 입력해주세요.");
    if (!pwdCheck.pwdCheck) return Alert.alert("비밀번호확인을 입력해주세요.");
    if (email.emailError) return Alert.alert(email.emailError);
    if (pwd.pwdError) return Alert.alert(pwd.pwdError);
    if (pwdCheck.pwdCheckError) return Alert.alert("비밀번호가 일치하지 않습니다.");
    navigation.navigate("SIGNUP2");
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SignUpContainer>
        <StatusBar translucent style={"dark"} />
        <SignUpTitle>아이디/비밀번호를 입력해주세요.</SignUpTitle>
        <Input
          type="email-address"
          label="아이디(이메일)"
          onChange={email.onChangeEmail}
          value={email.email}
          placeholder="예시:faster@naver.com"
        />
        <View style={{height: 24}} />
        <Input
          secure
          label="비밀번호"
          value={pwd.pwd}
          onChange={pwd.onChangePwd}
          placeholder="영문, 숫자를 포함한 8자 이상의 비밀번호"
        />
        <View style={{height: 24}} />
        <Input
          secure
          label="비밀번호 확인"
          value={pwdCheck.pwdCheck}
          onChange={pwdCheck.onChangePwdCheck}
          placeholder="비밀번호를 한번더 입력해주세요."
        />
        <View style={{flex: 1}} />
        <Hint title="회원가입만 해도 혜택이 와르르~~" />
        <Button title="다음" onPress={go2} />
      </SignUpContainer>
    </TouchableWithoutFeedback>
  );
}

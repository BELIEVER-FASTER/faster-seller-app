import {useNavigation} from "@react-navigation/core";
import React from "react";
import {Alert, Keyboard, TouchableWithoutFeedback, View} from "react-native";
import Button from "../../components/Common/Button";
import Input from "../../components/Common/Input";
import {useSF} from "../../hooks/SignUpFormProvider";
import Hint from "./Hint";
import {SignUpContainer, SignUpTitle} from "./styles";

export default function SU3() {
  const navigation = useNavigation();
  const {name, tel} = useSF();
  const go2 = () => {
    if (!name.name || name.nameError) return Alert.alert("정확한 이름을 알려주세요.");
    if (!tel.tel || tel.telError) return Alert.alert("전화번호를 입력해주세요.");
    navigation.navigate("SIGNUP4");
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SignUpContainer>
        <SignUpTitle>담당자 정보를 입력해주세요.</SignUpTitle>
        <Input
          value={name.name}
          onChange={name.onChangeName}
          label="성함을 알려주세요"
          placeholder="예시:홍길동"
        />
        <View style={{height: 24}} />
        <Input
          type="phone-pad"
          value={tel.tel}
          onChange={tel.onChangeTel}
          label="연락처를 알려주세요"
          placeholder="예시:010-1234-5678"
        />
        <View style={{flex: 1}} />

        <Hint title="안녕하세요 사장님~ 매니저님~" />
        <Button title="다음" onPress={go2} />
      </SignUpContainer>
    </TouchableWithoutFeedback>
  );
}

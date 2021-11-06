import {useNavigation} from "@react-navigation/core";
import React, {useEffect} from "react";
import {Alert, Keyboard, TouchableWithoutFeedback, View} from "react-native";
import Button from "../../components/Common/Button";
import Input from "../../components/Common/Input";
import {useSF} from "../../hooks/SignUpFormProvider";
import {useAuth} from "../../modules/auth";
import Hint from "./Hint";
import {SignUpContainer, SignUpTitle} from "./styles";

export default function SU4() {
  const navigation = useNavigation();
  const {
    accName,
    accNum,
    bank,
    brand,
    email,
    pwd,
    store,
    location,
    name,
    tel,
    recommender,
  } = useSF();
  const {signupDispatch, signup} = useAuth();
  const onSignUp = React.useCallback(() => {
    if (!bank.bank || !accName.accName || !accNum.accNum)
      return Alert.alert("양식을 모두 입력해주세요.");
    signupDispatch({
      name: brand.brand,
      email: email.email,
      password: pwd.pwd,
      StoreId: store.store,
      location: location.location,
      manager: name.name,
      tel: tel.tel,
      bank: bank.bank,
      accountName: accName.accName,
      accountNumber: accNum.accNum,
    });
  }, [bank, accName, accNum, recommender]);
  useEffect(() => {
    if (signup.data) {
      navigation.navigate("SIGNUP5");
    }
  }, [signup.data]);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SignUpContainer>
        <SignUpTitle>정산 계좌정보를 입력해주세요.</SignUpTitle>
        <Input
          label="은행명을 적어주세요"
          placeholder="예시:신한은행"
          value={bank.bank}
          onChange={bank.onChangeBank}
        />
        <View style={{height: 24}} />
        <Input
          label="계좌번호를 적어주세요"
          placeholder="예시:1234-1234-12-12"
          value={accNum.accNum}
          onChange={accNum.onChangeAccNum}
        />
        <View style={{height: 24}} />
        <Input
          label="예금주명을 적어주세요"
          placeholder="예시:홍길동"
          value={accName.accName}
          onChange={accName.onChangeAccName}
        />
        <View style={{flex: 1}} />

        <Hint title="우와~ 벌써 회원가입이 완료 됐습니다!" />
        <Button title="다음" onPress={onSignUp} />
      </SignUpContainer>
    </TouchableWithoutFeedback>
  );
}

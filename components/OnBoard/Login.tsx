import React from "react";
import {DescText, LoginOBContainer, LoginOBModal, LoginOBTitle, OBBtnBox} from "./styles";
import {Image, StyleSheet, Text, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";

type MainObProps = {
  onClose: () => void;
};
export default function LoginOB({onClose}: MainObProps): JSX.Element {
  return (
    <>
      <LoginOBModal transparent animationType="slide" statusBarTranslucent={true}>
        <LinearGradient
          // Background Linear Gradient
          locations={[0, 0.8]}
          colors={["#33205A", "#5B23B2"]}
          style={StyleSheet.absoluteFill}
        />
        <LoginOBContainer>
          <View style={{width: "100%"}}>
            <LoginOBTitle>한번의 상품등록으로</LoginOBTitle>
            <LoginOBTitle>전세계 도 소매 셀러만나기</LoginOBTitle>
          </View>

          <Image source={require("../../assets/images/ob.png")} />
          <View>
            <DescText>글로벌 판매부터 해외배송, 정산까지 다 맡기고 </DescText>
            <DescText>편-히 상품만 등록해주세요.</DescText>
          </View>

          <OBBtnBox onPress={onClose}>
            <Text style={{fontSize: 16, fontWeight: "bold", color: "#fff"}}>
              패스터 시작하기
            </Text>
          </OBBtnBox>
        </LoginOBContainer>
      </LoginOBModal>
    </>
  );
}

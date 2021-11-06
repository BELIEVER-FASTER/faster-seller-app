import {useNavigation} from "@react-navigation/core";
import React from "react";
import {Keyboard, Text, TouchableWithoutFeedback, View} from "react-native";
import Button from "../../components/Common/Button";
import {DoubleBtnWrapper, MultiLineText, SignUpContainer} from "./styles";

export default function SU7() {
  const navigation = useNavigation();
  const go2 = () => {
    navigation.navigate("LOGIN");
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SignUpContainer>
        <View>
          {"지금 바로,/카카오톡에서 패스터를/등록하고 메세지를 보내주세요!"
            .split("/")
            .map((v) => (
              <MultiLineText key={v}>{v}</MultiLineText>
            ))}
        </View>
        <View>
          <Text style={{fontSize: 16, marginTop: 14}}>
            모든 이벤트와 안내사항은 카카오톡에서
          </Text>
        </View>
        <View>
          <Text style={{fontSize: 16, marginTop: 5}}>가장 빠르게 확인 가능합니다.</Text>
        </View>
        <View style={{flex: 1}} />
        <DoubleBtnWrapper>
          <Button title="나중에 등록하기" outlined onPress={go2} width="45%" />
          <Button title="지금 등록하기" onPress={go2} width="45%" />
        </DoubleBtnWrapper>
      </SignUpContainer>
    </TouchableWithoutFeedback>
  );
}

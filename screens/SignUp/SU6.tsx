import {useNavigation} from "@react-navigation/core";
import React from "react";
import {Keyboard, Text, TouchableWithoutFeedback, View} from "react-native";
import Button from "../../components/Common/Button";
import Input from "../../components/Common/Input";
import {DoubleBtnWrapper, MultiLineText, SignUpContainer} from "./styles";

export default function SU6() {
  const navigation = useNavigation();
  const go2 = () => {
    navigation.navigate("SIGNUP7");
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SignUpContainer>
        <View style={{marginBottom: 28}}>
          {"앗,/혹시 패스터를/추천해주신분이 계신가요?".split("/").map((v) => (
            <MultiLineText key={v}>{v}</MultiLineText>
          ))}
        </View>
        <Input
          label="추천한 브랜드와 상가 이름을 적어주세요!"
          placeholder="예시:룰루레몬 / 킹스스퀘어"
        />
        <View>
          <Text style={{marginTop: 30, fontSize: 16}}>
            패스터를 다른 브랜드에 추천해 주시면
          </Text>
        </View>
        <View>
          <Text style={{marginTop: 6, fontSize: 16}}>
            네이버 쇼핑라이브 기획전 참여와
          </Text>
        </View>
        <View>
          <Text style={{marginTop: 6, fontSize: 16}}>
            봉투, 테이프 등 소모품이 무료 증정됩니다.
          </Text>
        </View>
        <View>
          <Text style={{marginTop: 6, fontWeight: "bold"}}>많은 소개 부탁드립니다😄</Text>
        </View>
        <View style={{flex: 1}} />
        <DoubleBtnWrapper>
          <Button title="추천 없음" outlined onPress={go2} width="45%" />
          <Button title="추천 있음" onPress={go2} width="45%" />
        </DoubleBtnWrapper>
      </SignUpContainer>
    </TouchableWithoutFeedback>
  );
}

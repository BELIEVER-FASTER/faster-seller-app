import React from "react";
import {
  MainOBContainer,
  MainOBDescBox,
  MainOBDescDelete,
  MainOBDescReset,
  MainOBDescText,
  MainOBModal,
} from "./styles";
import {Ionicons} from "@expo/vector-icons";
import {Image} from "react-native";

type MainObProps = {
  onClose: () => void;
};
export default function MainOB({onClose}: MainObProps): JSX.Element {
  return (
    <MainOBModal transparent animationType="fade" statusBarTranslucent={true}>
      <MainOBContainer>
        <MainOBDescReset>
          <MainOBDescText>위에서 아래로 당기면</MainOBDescText>
          <MainOBDescText>새로고침 할수 있어요!</MainOBDescText>
          <Image style={{}} source={require("../../assets/images/Reset.png")} />
        </MainOBDescReset>
        <MainOBDescDelete>
          <Image
            style={{marginBottom: 10}}
            source={require("../../assets/images/Delete.png")}
          />
          <MainOBDescText>리스트 오른쪽 끝에서 왼쪽으로 밀면</MainOBDescText>
          <MainOBDescText>리스트를 삭제 할수 있어요</MainOBDescText>
        </MainOBDescDelete>
        <MainOBDescBox></MainOBDescBox>
        <Ionicons onPress={onClose} name="close-circle-outline" size={48} color="#fff" />
      </MainOBContainer>
    </MainOBModal>
  );
}

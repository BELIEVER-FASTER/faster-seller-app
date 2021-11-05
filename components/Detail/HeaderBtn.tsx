import React from "react";
import {Alert, Text} from "react-native";
import {HeaderBtnBox, HeaderBtnText} from "./styles";

type HeaderBtnProps = {
  onPress: () => void;
};
function RemoveBtn({onPress}: HeaderBtnProps) {
  const showConfirmDialog = () => {
    return Alert.alert("상품삭제", "정말 상품을 삭제하시겠습니까?", [
      {
        text: "네",
        onPress: onPress,
      },
      {
        text: "취소",
      },
    ]);
  };
  return (
    <HeaderBtnBox onPress={() => showConfirmDialog()} outlined>
      <HeaderBtnText outlined>삭제</HeaderBtnText>
    </HeaderBtnBox>
  );
}

function EditBtn({onPress}: HeaderBtnProps) {
  return (
    <HeaderBtnBox onPress={onPress}>
      <HeaderBtnText>수정</HeaderBtnText>
    </HeaderBtnBox>
  );
}

function SaveBtn({onPress}: HeaderBtnProps) {
  return (
    <HeaderBtnBox style={{marginRight: 16}} onPress={onPress}>
      <HeaderBtnText>저장</HeaderBtnText>
    </HeaderBtnBox>
  );
}

function EditSaveBtn({onPress}: HeaderBtnProps) {
  return (
    <HeaderBtnBox onPress={onPress}>
      <HeaderBtnText>적용</HeaderBtnText>
    </HeaderBtnBox>
  );
}

function HeaderBtn() {
  return <></>;
}

HeaderBtn.EditSave = EditSaveBtn;
HeaderBtn.Edit = EditBtn;
HeaderBtn.Remove = RemoveBtn;
HeaderBtn.Save = SaveBtn;

export default HeaderBtn;

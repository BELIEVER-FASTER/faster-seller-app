import {useNavigation} from "@react-navigation/core";
import React, {useState} from "react";
import {
  Picker,
  Keyboard,
  Platform,
  Pressable,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Button from "../../components/Common/Button";
import Input from "../../components/Common/Input";
import PickerModal from "../../components/Common/PickerModal";
import Hint from "./Hint";
import {
  SignUpContainer,
  SignUpTitle,
  StoreSelectBox,
  StoreSelectInput,
  StoreSelectText,
} from "./styles";

export default function SU2() {
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);
  const [selectedValue, setSelectedValue] = useState("");
  const navigation = useNavigation();
  const go2 = () => {
    navigation.navigate("SIGNUP3");
  };
  console.log(selectedValue);
  console.log(open);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <>
        <SignUpContainer>
          <SignUpTitle>브랜드명을 입력해주세요.</SignUpTitle>
          <Input label="브랜드명이 무엇있가요?" placeholder="예시:패스터 / FASTER" />
          <View style={{height: 24}} />

          <Text style={{fontSize: 16}}>어떤 상가에 계신가요?</Text>
          {Platform.OS === "ios" ? (
            <StoreSelectBox>
              <Pressable onPress={() => setOpen((prev) => !prev)}>
                <StoreSelectInput>
                  <StoreSelectText strong={selectedValue}>
                    {selectedValue || "선택해주세요"}
                  </StoreSelectText>
                </StoreSelectInput>
              </Pressable>
            </StoreSelectBox>
          ) : (
            <View
              style={{
                backgroundColor: "#eee",
                borderRadius: 6,
                marginTop: 8,
                marginBottom: 30,
              }}
            >
              <Picker
                style={{height: 44}}
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
              >
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
              </Picker>
            </View>
          )}
          <Input label="몇층 몇호에 계신가요?" placeholder="예시:10층 / 101호" />
          <View style={{flex: 1}} />

          <Hint title="회원가입만 해도 혜택이 와르르~~" />
          <Button title="다음" onPress={go2} />
        </SignUpContainer>
        {open && (
          <PickerModal
            onClose={onClose}
            open={open}
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
          />
        )}
      </>
    </TouchableWithoutFeedback>
  );
}

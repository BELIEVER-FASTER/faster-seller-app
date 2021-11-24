import {useNavigation} from "@react-navigation/core";
import React, {useState} from "react";
import {
  Keyboard,
  Pressable,
  Text,
  TouchableWithoutFeedback,
  View,
  ScrollView,
  Alert,
} from "react-native";
import {useQuery} from "react-query";
import Button from "../../components/Common/Button";
import Input from "../../components/Common/Input";
import {
  CateContainer,
  CateSelectBox,
  CateSelectModal,
  CateSelectText,
} from "../../components/Edit/styles";
import {useSF} from "../../hooks/SignUpFormProvider";
import {Store} from "../../utils/data";
import {getStoreList} from "../../utils/fetcher";
import Hint from "./Hint";
import {
  SignUpContainer,
  SignUpTitle,
  StoreSelectBox,
  StoreSelectInput,
  StoreSelectText,
} from "./styles";

export default function SU2() {
  const {data: storeList} = useQuery(["ui", "store"], getStoreList);
  const {brand, store: storeData, location} = useSF();
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);
  const onOpen = () => setOpen(true);
  const [store, setStore] = useState<Store | null>(null);

  const onSelect = (st: Store) => {
    storeData.onChangeStore(st.id + "");
    setStore(st);
    onClose();
  };

  const navigation = useNavigation();
  const go2 = () => {
    if (!brand.brand) return Alert.alert("브랜드명을 입력해주세요");
    if (!brand.brand.includes("/"))
      return Alert.alert("한글패명 / 영문명을 모두 입력해주세요");
    if (!storeData.store) return Alert.alert("상가를 입력해주세요");
    if (!location.location) return Alert.alert("위치를 입력해주세요");
    navigation.navigate("SIGNUP3");
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SignUpContainer>
        <SignUpTitle>브랜드명을 입력해주세요.</SignUpTitle>
        <Input
          label="브랜드명이 무엇있가요? (한글명 / 영문명)"
          value={brand.패brand}
          onChange={brand.onChangeBrand}
          placeholder="예시:패스터 / FASTER"
        />
        <View style={{height: 24}} />

        <Text style={{fontSize: 16}}>어떤 상가에 계신가요?</Text>
        <StoreSelectBox>
          <Pressable onPress={onOpen}>
            <StoreSelectInput>
              <StoreSelectText strong={store ? store.name : ""}>
                {storeList?.find((s) => s.id === store?.id)?.name || "선택해주세요"}
              </StoreSelectText>
            </StoreSelectInput>
          </Pressable>
        </StoreSelectBox>
        {open && (
          <CateSelectModal animationType="slide" transparent>
            <Pressable
              style={{
                backgroundColor: "#00000020",
                flex: 1,
                alignItems: "center",
                justifyContent: "flex-end",
              }}
              onPress={() => setOpen(false)}
            >
              <CateContainer
                style={{
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 7,
                  },
                  shadowOpacity: 0.43,
                  shadowRadius: 9.51,
                  elevation: 15,
                }}
              >
                <ScrollView>
                  {storeList?.map((st) => (
                    <CateSelectBox onPress={() => onSelect(st)} key={st.id}>
                      <CateSelectText>{st.name}</CateSelectText>
                    </CateSelectBox>
                  ))}
                </ScrollView>
              </CateContainer>
            </Pressable>
          </CateSelectModal>
        )}
        <Input
          label="몇층 몇호에 계신가요?"
          value={location.location}
          onChange={location.onChangeLocation}
          placeholder="예시:10층 / 101호"
        />
        <View style={{flex: 1}} />

        <Hint title="회원가입만 해도 혜택이 와르르~~" />
        <Button title="다음" onPress={go2} />
      </SignUpContainer>
    </TouchableWithoutFeedback>
  );
}

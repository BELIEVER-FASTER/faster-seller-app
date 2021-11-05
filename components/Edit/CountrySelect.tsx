import React, {useState} from "react";
import {Pressable, ScrollView, View} from "react-native";
import {ProductForm} from "../../hooks/useProductForm";
import {
  StoreSelectBox,
  StoreSelectInput,
  StoreSelectText,
} from "../../screens/SignUp/styles";
import {countryList} from "../../utils/data";
import Input from "../Common/Input";
import {
  CateContainer,
  CateSelectBox,
  CateSelectModal,
  CateSelectText,
  ImageInputTitle,
} from "./styles";

type CountrySelectProps = {
  country: ProductForm["country"];
  etcCountry: ProductForm["etcCountry"];
};
export default function CountrySelect({
  country,
  etcCountry,
}: CountrySelectProps): JSX.Element {
  const [open, setOpen] = useState(false);
  const onOpen = () => setOpen((prev) => true);
  const onClose = () => setOpen((prev) => false);
  const onPress = (id: number) => {
    country.onChangeCountry(id + "");
    onClose();
  };
  return (
    <View>
      <ImageInputTitle>제조국 표기</ImageInputTitle>
      <StoreSelectBox>
        <Pressable onPress={onOpen}>
          <StoreSelectInput>
            <StoreSelectText strong={country?.country || ""}>
              {countryList.find((c) => c.id === +country.country)?.name || "선택해주세요"}
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
                {countryList.map((ct) => (
                  <CateSelectBox onPress={() => onPress(ct.id)} key={ct.id}>
                    <CateSelectText>{ct.name}</CateSelectText>
                  </CateSelectBox>
                ))}
              </ScrollView>
            </CateContainer>
          </Pressable>
        </CateSelectModal>
      )}

      {+country.country === 3 && (
        <>
          <Input.Prod
            label="제조국명"
            value={etcCountry.etcCountry}
            onChange={etcCountry.onChangeEtcCountry}
            placeholder="기타 제조국을 입력해주세요"
          />
          <View style={{height: 30}} />
        </>
      )}
    </View>
  );
}

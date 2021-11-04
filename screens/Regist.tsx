import {useNavigation} from "@react-navigation/core";
import React, {useEffect} from "react";
import {SafeAreaView, ScrollView, StatusBar, Text, TextInput, View} from "react-native";
import Input from "../components/Common/Input";
import HeaderBtn from "../components/Detail/HeaderBtn";
import CategorySelect from "../components/Edit/CategorySelect";
import ColorSelect from "../components/Edit/ColorSelect";
import CountrySelect from "../components/Edit/CountrySelect";
import ImageInput from "../components/Edit/ImageInput";
import PieceSelect from "../components/Edit/PieceSelect";
import SizeSelect from "../components/Edit/SizeSelect";
import useProductForm from "../hooks/useProductForm";
import {RegistContainer} from "./styles";

export default function Regist(): JSX.Element {
  const navigation = useNavigation();
  const {
    images,
    name,
    price,
    cate,
    colors,
    sizes,
    mixture,
    country,
    leaf,
    detailInfo,
    etcCountry,
  } = useProductForm();

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {backgroundColor: "#fff"},
      headerTintColor: "#33205A",
      headerShadowVisible: true,
      headerRight: () => (
        <HeaderBtn.Save onPress={() => navigation.navigate("DETAIL_EDIT")} />
      ),
    });
  }, []);
  return (
    <>
      <StatusBar translucent backgroundColor="#fff" barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <RegistContainer>
          <ImageInput />
          <View style={{height: 30}} />
          <Input.Prod
            label="상품명"
            placeholder="상품명을 입력해주세요. (최대 40자)"
            onChange={name.onChangeName}
            value={name.name}
          />
          <View style={{height: 30}} />
          <Input.Prod
            label="상품가격"
            placeholder="상품 가격을 입력해주세요."
            onChange={price.onChangePrice}
            value={price.price}
          />
          <View style={{height: 30}} />
          <CategorySelect currentCate={cate} />
          <View style={{height: 4}} />
          <ColorSelect currentColor={colors} />
          <View style={{height: 30}} />
          <SizeSelect sizes={sizes} category={cate.cate} />
          <View style={{height: 30}} />
          <Input.Prod
            label="소재혼용률"
            placeholder="ex_ 면 50, 레이온 40, 린넨 10 "
            onChange={price.onChangePrice}
            value={price.price}
          />
          <View style={{height: 30}} />
          <CountrySelect country={country} etcCountry={etcCountry} />
          <View style={{height: 4}} />
          <PieceSelect leaf={leaf} />
          <View style={{height: 30}} />
          <Input.Prod
            label="상품설명"
            multiline
            placeholder="상세 설명은 선택사항입니다."
            onChange={price.onChangePrice}
            value={price.price}
          />
          <View style={{height: 50}} />
        </RegistContainer>
      </SafeAreaView>
    </>
  );
}

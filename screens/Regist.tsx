import {useNavigation} from "@react-navigation/core";
import React, {useEffect, useRef} from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import Input from "../components/Common/Input";
import HeaderBtn from "../components/Detail/HeaderBtn";
import CategorySelect from "../components/Edit/CategorySelect";
import ColorSelect from "../components/Edit/ColorSelect";
import CountrySelect from "../components/Edit/CountrySelect";
import ImageInput from "../components/Edit/ImageInput";
import PieceSelect from "../components/Edit/PieceSelect";
import SizeSelect from "../components/Edit/SizeSelect";
import useProductForm from "../hooks/useProductForm";
import {useAuth} from "../modules/auth";
import {useProduct} from "../modules/product";
import {RegistContainer} from "./styles";

export default function Regist(): JSX.Element {
  const navigation = useNavigation();
  const {
    login: {data: userData},
  } = useAuth();
  const {addProduct, addProductDispatch, resetRegistDispatch} = useProduct();
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
  const onSubmit = () => {
    if (!userData) return;
    if (images.images.length === 0) return Alert.alert("이미지를 1개이상 입력해주세요");
    if (!name.name.trim()) return Alert.alert("상품명을 기입해주세요");
    if (!price.price.trim()) return Alert.alert("상품가격을 기입해주세요");
    if (!cate.cate) return Alert.alert("카테고리를 선택해주세요");
    if (colors.colors.length === 0) return Alert.alert("색상을 선택해주세요");
    if (sizes.sizes.length === 0) return Alert.alert("사이즈를 선택해주세요");
    if (!mixture.mixture.trim()) return Alert.alert("소재 혼용률을 입력해주세요");
    if (!country.country) return Alert.alert("제조국가를 입력해주세요");
    if (country.country === "3" && !etcCountry.etcCountry.trim())
      return Alert.alert("제조국가명을 입력해주세요");
    addProductDispatch({
      BrandId: userData.id,
      CategoryMainId: cate.cate?.main.id as number,
      CategoryMiddleId: cate.cate?.middle.id as number,
      images: images.images,
      name: name.name,
      price: price.price.split(",").join(""),
      isPiece: leaf.leaf,
      composition: mixture.mixture,
      country: +country.country,
      countryName: etcCountry.etcCountry,
      sizes: sizes.sizes,
      detail: detailInfo.detailInfo,
      colors: colors.colors,
    });
  };
  useEffect(() => {
    navigation.setOptions({
      headerStyle: {backgroundColor: "#fff"},
      headerTintColor: "#33205A",
      headerShadowVisible: true,
      headerRight: () => <HeaderBtn.Save onPress={onSubmit} />,
    });
  }, [
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
  ]);
  useEffect(() => {
    sizes.setSizes([]);
  }, [cate.cate]);
  useEffect(() => {
    if (addProduct.data) {
      navigation.navigate("상품목록");
    }
  }, [addProduct.data]);
  useEffect(() => {
    return () => {
      resetRegistDispatch();
    };
  }, []);
  const scrollRef = useRef<ScrollView | null>(null);
  const onFocus = () => {
    scrollRef.current?.scrollToEnd();
  };

  return (
    <>
      <StatusBar translucent backgroundColor="#fff" barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === "ios" ? "padding" : "padding"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 10 : 0}
        >
          <RegistContainer ref={scrollRef}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{flex: 1}}>
              <>
                <ImageInput image={images} />
                <View style={{height: 30}} />
                <Input.Prod
                  label="상품명"
                  placeholder="상품명을 입력해주세요. (최대 40자)"
                  onChange={name.onChangeName}
                  value={name.name}
                />
                <View style={{height: 30}} />
                <Input.Price
                  type="numeric"
                  unit="원"
                  label="상품가격"
                  placeholder="상품 가격을 입력해주세요."
                  onChange={price.onChangePrice}
                  value={price.price}
                  setValue={price.setPrice}
                />
                <View style={{height: 30}} />
                <CategorySelect currentCate={cate} />
                <View style={{height: 4}} />
                <ColorSelect currentColor={colors} />
                <View style={{height: 30}} />
                <SizeSelect sizes={sizes} category={cate.cate} />
                <View style={{height: 30}} />
                <Input.Prod
                  desc="사용된 소재와 혼용률을 입력해주세요."
                  label="소재혼용률"
                  placeholder="ex_ 면 50, 레이온 40, 린넨 10 "
                  onChange={mixture.onChangeMixture}
                  value={mixture.mixture}
                />
                <View style={{height: 30}} />
                <CountrySelect country={country} etcCountry={etcCountry} />
                <View style={{height: 4}} />
                <PieceSelect leaf={leaf} />
                <View style={{height: 30}} />
                <Input.Prod
                  onFocus={onFocus}
                  desc="상품 상세페이지에 보여집니다."
                  label="상품설명"
                  multiline
                  style={{minHeight: 260, marginBottom: 40}}
                  placeholder="상세 설명은 선택사항입니다."
                  onChange={detailInfo.onChangeDetailInfo}
                  value={detailInfo.detailInfo}
                />
              </>
            </TouchableWithoutFeedback>
          </RegistContainer>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
}

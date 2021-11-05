import {useNavigation} from "@react-navigation/core";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import React, {useEffect} from "react";
import {Alert, SafeAreaView, StatusBar, View} from "react-native";
import Input from "../components/Common/Input";
import HeaderBtn from "../components/Detail/HeaderBtn";
import CategorySelect from "../components/Edit/CategorySelect";
import ColorSelect from "../components/Edit/ColorSelect";
import CountrySelect from "../components/Edit/CountrySelect";
import ImageInput from "../components/Edit/ImageInput";
import PieceSelect from "../components/Edit/PieceSelect";
import SizeSelect from "../components/Edit/SizeSelect";
import useProductForm from "../hooks/useProductForm";
import {DetailStackParamList} from "../navigations/LoggedIn/DetailStack";
import {RegistContainer} from "./styles";

interface DetailData
  extends NativeStackScreenProps<DetailStackParamList, "DETAIL_EDIT"> {}
export default function Edit({route}: DetailData): JSX.Element {
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
  const onSubmit = () => {
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
    console.log({
      // BrandId: userData.id,
      CategoryMainId: cate.cate?.main.id as number,
      CategoryMiddleId: cate.cate?.middle.id as number,
      images: images.images,
      name: name.name,
      price: price.price,
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
      headerBackTitle: "상세정보",
      title: `${route.params.name} 수정`,
      headerRight: () => <HeaderBtn.EditSave onPress={onSubmit} />,
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
    const {params} = route;
    const mappedColor = params.ProductColors.map((color) => color.Color);
    const mappedSize = params.ProductSizes.map((sz) => {
      const arr = Object.entries(sz)
        .map(([key, value]) => {
          if (key !== "id" && key !== "SizeOpt" && value)
            return {name: key, value: value};
        })
        .filter((v) => v !== undefined) as {
        name: string;
        value: string;
      }[];
      return {
        id: sz.SizeOpt.id,
        value: sz.SizeOpt.name,
        detail: arr,
      };
    });
    images.setImages(params.pImages);
    cate.setCate({main: params.CategoryMain, middle: params.CategoryMiddle});
    name.setName(params.name);
    price.setPrice(params.price + "");
    colors.setColors(mappedColor);
    mixture.setMixture(params.composition);
    country.onChangeCountry(params.CountryId + "");
    etcCountry.setEtcCountry(params.countryName);
    leaf.onChangeLeaf(params.isPiece);
    detailInfo.setDetailInfo(params.detail);
    sizes.setSizes(mappedSize);
  }, []);

  useEffect(() => {
    if (!route.params) return;
    if (!cate.cate) return;
    const {params} = route;
    if (cate.cate?.main.id !== params.CategoryMain.id) sizes.setSizes([]);
  }, [cate.cate]);

  // console.log({
  //   // BrandId: userData.id,
  //   CategoryMainId: cate.cate?.main.id as number,
  //   CategoryMiddleId: cate.cate?.middle.id as number,
  //   images: images.images,
  //   name: name.name,
  //   price: price.price,
  //   isPiece: leaf.leaf,
  //   composition: mixture.mixture,
  //   country: +country.country,
  //   countryName: etcCountry.etcCountry,
  //   sizes: sizes.sizes,
  //   detail: detailInfo.detailInfo,
  //   colors: colors.colors,
  // });
  return (
    <>
      <StatusBar translucent backgroundColor="#fff" barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <RegistContainer>
          <ImageInput image={images} />
          <View style={{height: 30}} />
          <Input.Prod
            label="상품명"
            placeholder="상품명을 입력해주세요. (최대 40자)"
            onChange={name.onChangeName}
            value={name.name}
          />
          <View style={{height: 30}} />
          <Input.Prod
            type="numeric"
            unit="원"
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
            desc="상품 상세페이지에 보여집니다."
            label="상품설명"
            multiline
            placeholder="상세 설명은 선택사항입니다."
            onChange={detailInfo.onChangeDetailInfo}
            value={detailInfo.detailInfo}
          />
          <View style={{height: 50}} />
        </RegistContainer>
      </SafeAreaView>
    </>
  );
}

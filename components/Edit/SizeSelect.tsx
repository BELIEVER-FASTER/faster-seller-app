import React from "react";
import {Text, View} from "react-native";
import {ProductForm} from "../../hooks/useProductForm";
import {ImageInputDesc, ImageInputTitle} from "./styles";
type SizeSelectProps = {
  category?: ProductForm["cate"]["cate"];
  sizes: ProductForm["sizes"];
};
export default function SizeSelect({
  sizes,
  category = {main: {id: 1, name: "123"}, middle: {id: 2, name: "12"}},
}: SizeSelectProps) {
  const {sizes: currentSzs, setSizes} = sizes;
  const onClickClothSize = (size: {id: number; value: string}) => {
    if (size.value === "FREE") return setSizes([size]);
    else setSizes((prev) => prev.filter((sz) => sz.value !== "FREE"));
    currentSzs.findIndex((sz) => sz.id === size.id) !== -1
      ? setSizes((prev) => prev.filter((sz) => sz.id !== size.id))
      : setSizes((prev) => [...prev, size]);
  };

  const onClickShoesSize = (size: {id: number; value: string}) => {
    currentSzs.findIndex((sz) => sz.id === size.id) !== -1
      ? setSizes((prev) => prev.filter((sz) => sz.id !== size.id))
      : setSizes((prev) => [...prev, size]);
  };

  if (!category?.main) return <></>;
  return (
    <View>
      <ImageInputTitle>상품사이즈</ImageInputTitle>
      <ImageInputDesc>판매중인 상품 사이즈를 중복으로 선택 가능합니다.</ImageInputDesc>
      {(function () {
        switch (category.main.id) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
          case 8:
            return (
              <>
                <Text>옷</Text>
              </>
            );
          case 11:
          case 12:
            return (
              <>
                <Text>신발</Text>
              </>
            );
          default:
            return (
              <>
                <Text>기타</Text>
              </>
            );
        }
      })()}
    </View>
  );
}

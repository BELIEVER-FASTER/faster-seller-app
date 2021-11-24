import {useEffect, useState} from "react";
import {topDetailSizes, bottomDetailSizes, skirtDetailSizes} from "../../../utils/data";
import {ProductForm} from "../../../hooks/useProductForm";
import {Dimensions, ScrollView, Text, View} from "react-native";
import {
  DetailTextBox,
  DetailTextInput,
  ImageInputDesc,
  ImageInputTitle,
  SizePillItem,
  SizePillText,
  UnitText,
} from "../styles";
import React from "react";

const {width} = Dimensions.get("window");
type ClothSizeDetailProps = {
  mainCate: {id: number; name: string} | null;
  sizes: ProductForm["sizes"];
};
type Detail = {
  name: string;
  value: string;
}[];
export default function ClothSizeDetail({
  mainCate,
  sizes: {sizes, setSizes},
}: ClothSizeDetailProps): JSX.Element {
  const [currentSize, setCurrentSize] = useState<{
    id: number;
    value: string;
    detail?: Detail;
  }>(sizes[0]);

  const onClickSize = (size: {id: number; value: string}) => {
    setCurrentSize(sizes.filter((sz) => sz.id === size.id)[0]);
  };
  const onChangeSizeDetail = (text: string, value: string) => {
    const index = sizes.findIndex((sz) => sz.id === currentSize.id);
    setSizes((prev) => {
      const current = {...currentSize};
      if (current.detail) {
        const detailIndex = current.detail.findIndex((sz) => sz.name === value);
        if (detailIndex !== -1) {
          current.detail[detailIndex] = {name: value, value: text};
        } else {
          current.detail = [...current.detail, {name: value, value: text}];
        }
      } else current.detail = [{name: value, value: text}];
      const arr = [...prev];
      arr[index] = current;
      setCurrentSize(current);
      return arr;
    });
  };
  useEffect(() => {
    if (!currentSize) return;
    if (sizes.findIndex((sz) => sz.id === currentSize.id) === -1) {
      setCurrentSize(sizes[sizes.length - 1]);
    }
  }, [sizes.length]);
  if (!mainCate) return <></>;
  return (
    <View>
      <ImageInputTitle>실측사이즈</ImageInputTitle>
      <ImageInputDesc>상품 사이즈별 실측 사이즈를 입력해주세요.</ImageInputDesc>
      <ScrollView horizontal>
        {sizes
          .sort((a, b) => (a.id < b.id ? -1 : a.id > b.id ? 1 : 0))
          .map((sz) => (
            <SizePillItem
              style={{width: width * 0.22}}
              selected={currentSize?.id === sz.id}
              onPress={() => onClickSize(sz)}
              key={sz.id}
            >
              <SizePillText selected={currentSize?.id === sz.id}>{sz.value}</SizePillText>
            </SizePillItem>
          ))}
      </ScrollView>
      <View>
        {currentSize && sizes.findIndex((sz) => sz.value === currentSize.value) !== -1 ? (
          mainCate.id === 3 || mainCate.id === 4 || mainCate.id === 8 ? (
            <View>
              {(mainCate.id === 8 ? skirtDetailSizes : bottomDetailSizes).map((szn) => (
                <DetailTextBox key={szn.id}>
                  <DetailTextInput
                    keyboardType="numeric"
                    placeholderTextColor="#777"
                    placeholder={szn.name}
                    onChangeText={(e) => {
                      onChangeSizeDetail(e, szn.value);
                    }}
                    value={
                      currentSize.detail?.filter((v) => v.name === szn.value)[0]?.value ||
                      ""
                    }
                  />
                  <UnitText>CM</UnitText>
                </DetailTextBox>
              ))}
            </View>
          ) : (
            <View>
              {topDetailSizes.map((szn) => (
                <DetailTextBox key={szn.id}>
                  <DetailTextInput
                    keyboardType="numeric"
                    placeholderTextColor="#777"
                    value={
                      currentSize.detail?.filter((v) => v.name === szn.value)[0]?.value ||
                      ""
                    }
                    onChangeText={(e) => {
                      onChangeSizeDetail(e, szn.value);
                    }}
                    placeholder={szn.name}
                  />
                  <UnitText>CM</UnitText>
                </DetailTextBox>
              ))}
            </View>
          )
        ) : (
          <Text>사이즈를 선택해주세요</Text>
        )}
      </View>
    </View>
  );
}

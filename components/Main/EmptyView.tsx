import React from "react";
import {Image} from "react-native";
import {EmptyViewBox, EmptyViewText} from "./styles";

export default function EmptyView(): JSX.Element {
  return (
    <EmptyViewBox>
      <Image
        style={{marginBottom: 0, width: "65%", height: 280}}
        resizeMode="contain"
        source={require("../../assets/images/emptyView.png")}
      />
      <EmptyViewText>등록하신 상품이 없네요</EmptyViewText>
      <EmptyViewText>상품을 동록해주세요</EmptyViewText>
    </EmptyViewBox>
  );
}

import React from "react";
import {Image} from "react-native";
import {EmptyViewBox, EmptyViewText} from "./styles";

export default function NoResults(): JSX.Element {
  return (
    <EmptyViewBox>
      <Image
        style={{marginBottom: 0, width: "120%", height: 280}}
        resizeMode="contain"
        source={require("../../assets/images/noResults.jpeg")}
      />
      <EmptyViewText style={{marginBottom: 30}}>검색결과가 없어요</EmptyViewText>
    </EmptyViewBox>
  );
}

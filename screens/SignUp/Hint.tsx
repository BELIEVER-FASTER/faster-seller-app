import React from "react";
import {View} from "react-native";
import {HintTale, HintText, HintWrapper} from "./styles";

type HintProps = {
  title: string;
};
export default function Hint({title}: HintProps) {
  return (
    <View style={{alignItems: "flex-end"}}>
      <HintWrapper>
        <HintText>{title}</HintText>
      </HintWrapper>
      <HintTale />
    </View>
  );
}

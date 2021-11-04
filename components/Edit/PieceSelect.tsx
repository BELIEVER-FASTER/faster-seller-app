import React from "react";
import {View} from "react-native";
import {ProductForm} from "../../hooks/useProductForm";
import {ImageInputTitle, PieceSelectBox, PieceSelectText} from "./styles";

type PieceSelected = {
  leaf: ProductForm["leaf"];
};
export default function PieceSelect({leaf}: PieceSelected): JSX.Element {
  const isPossible = leaf.leaf === 1;
  return (
    <View>
      <ImageInputTitle>낱장 주문여부</ImageInputTitle>
      <View
        style={{flexDirection: "row", marginTop: 10, justifyContent: "space-between"}}
      >
        <PieceSelectBox selected={isPossible} onPress={() => leaf.onChangeLeaf(1)}>
          <PieceSelectText selected={isPossible}>가능</PieceSelectText>
        </PieceSelectBox>
        <PieceSelectBox selected={!isPossible} onPress={() => leaf.onChangeLeaf(0)}>
          <PieceSelectText selected={!isPossible}>불가능</PieceSelectText>
        </PieceSelectBox>
      </View>
    </View>
  );
}

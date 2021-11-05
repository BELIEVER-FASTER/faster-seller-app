import React from "react";
import {View} from "react-native";
import {ProductForm} from "../../../hooks/useProductForm";
import {clothSizes} from "../../../utils/data";
import {SizePillItem, SizePillList, SizePillText} from "../styles";

type ClothSizeProps = {
  currentSzs: ProductForm["sizes"]["sizes"];
  onClickClothSize: (size: {id: number; value: string}) => void;
};
export default function ClothSize({
  currentSzs,
  onClickClothSize,
}: ClothSizeProps): JSX.Element {
  return (
    <SizePillList>
      {clothSizes.map((size) => {
        const selected = currentSzs.findIndex((sz) => sz.id === size.id) !== -1;
        return (
          <SizePillItem
            key={size.id}
            selected={selected}
            onPress={() => onClickClothSize(size)}
          >
            <SizePillText selected={selected}>{size.value}</SizePillText>
          </SizePillItem>
        );
      })}
      <View style={{width: "22%", marginRight: 10}} />
    </SizePillList>
  );
}

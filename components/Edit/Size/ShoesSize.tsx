import React from "react";
import {View} from "react-native";
import {ProductForm} from "../../../hooks/useProductForm";
import {shoesSizes} from "../../../utils/data";
import {SizePillItem, SizePillList, SizePillText} from "../styles";

type ShoesSizeProps = {
  currentSzs: ProductForm["sizes"]["sizes"];
  onClickShoesSize: (size: {id: number; value: string}) => void;
};
export default function ShoesSize({
  currentSzs,
  onClickShoesSize,
}: ShoesSizeProps): JSX.Element {
  return (
    <SizePillList>
      {shoesSizes.map((size) => {
        const selected = currentSzs.findIndex((sz) => sz.id === size.id) !== -1;
        return (
          <SizePillItem
            key={size.id}
            selected={selected}
            onPress={() => onClickShoesSize(size)}
          >
            <SizePillText selected={selected}>{size.value}</SizePillText>
          </SizePillItem>
        );
      })}
      <View style={{width: "22%", marginRight: 10}} />
    </SizePillList>
  );
}

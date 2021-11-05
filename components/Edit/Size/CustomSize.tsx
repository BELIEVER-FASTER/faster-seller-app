import React from "react";
import {View} from "react-native";
import {ProductForm} from "../../../hooks/useProductForm";
import {CustomAddBtnBox, CustomTextInput} from "../styles";
import {Octicons, Fontisto} from "@expo/vector-icons";

type CustomSizeItemProps = {
  data: {id: number; value: string; detail?: {name: string; value: string}[]};
  setSizes: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        value: string;
        detail?:
          | {
              name: string;
              value: string;
            }[]
          | undefined;
      }[]
    >
  >;
  index: number;
  sizes: {id: number; value: string}[];
};
function CustomSizeItem({data, setSizes, index, sizes}: CustomSizeItemProps) {
  const onChangeValue = (text: string) => {
    setSizes((prev) => {
      const arr = [...prev];
      arr[index] = {
        ...arr[index],
        detail: [{name: "custom", value: text}],
      };
      return arr;
    });
  };
  const onClickButton = (id: number, index: number) => {
    index === sizes.length - 1
      ? setSizes((prev) => [
          ...prev,
          {id: 1, value: "CUSTOM", detail: [{name: "custom", value: ""}]},
        ])
      : setSizes((prev) => prev.filter((_, i) => i !== index));
  };
  return (
    <View style={{flexDirection: "row", alignItems: "center", marginBottom: 8}}>
      <CustomAddBtnBox minus onPress={() => onClickButton(data.id, index)}>
        <Fontisto name="minus-a" size={24} color="#5b23b2" />
      </CustomAddBtnBox>
      <CustomTextInput
        placeholderTextColor="#777"
        placeholder="mm / cm / 호 등 사이즈 옵션을 추가해주세요."
        value={data.detail![0].value}
        onChangeText={onChangeValue}
      />
    </View>
  );
}

type CustomSizeProps = {
  sizes: ProductForm["sizes"];
};
export default function CustomSize({sizes}: CustomSizeProps): JSX.Element {
  const {setSizes, sizes: sizeArr} = sizes;

  const onChange = (text: string) => {
    if (sizeArr.length === 0) {
      setSizes([{id: 1, value: "CUSTOM", detail: [{name: "custom", value: text}]}]);
    } else {
      setSizes((prev) => {
        const arr = [...prev];
        arr[arr.length - 1] = {
          ...arr[arr.length - 1],
          detail: [{name: "custom", value: text}],
        };
        return arr;
      });
    }
  };
  const onClick = () => {
    setSizes((prev) => [
      ...prev,
      {id: 1, value: "CUSTOM", detail: [{name: "custom", value: ""}]},
    ]);
  };

  return (
    <View>
      {sizeArr.map(
        (size, i) =>
          sizeArr.length - 1 !== i && (
            <CustomSizeItem
              key={i}
              data={size}
              setSizes={setSizes}
              index={i}
              sizes={sizeArr}
            />
          )
      )}
      <View style={{flexDirection: "row", alignItems: "center"}}>
        <CustomAddBtnBox onPress={onClick}>
          <Octicons name="plus" size={24} color="#fff" />
        </CustomAddBtnBox>
        <CustomTextInput
          placeholderTextColor="#777"
          placeholder="mm / cm / 호 등 사이즈 옵션을 추가해주세요."
          onChangeText={onChange}
          value={
            sizeArr[sizeArr.length - 1]
              ? sizeArr[sizeArr.length - 1].detail![0].value
              : ""
          }
        />
      </View>
    </View>
  );
}

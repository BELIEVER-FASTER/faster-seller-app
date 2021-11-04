import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import {ProductForm} from "../../hooks/useProductForm";
import {getColorList} from "../../utils/fetcher";
import {ColorPill, ImageInputTitle} from "./styles";
import {useQuery} from "react-query";
import {ColorName, getColor} from "../../utils/data";

type ColorSelected = {
  currentColor: ProductForm["colors"];
};
export default function ColorSelect({currentColor}: ColorSelected): JSX.Element {
  const {data: colorList} = useQuery(["ui", "color"], getColorList);
  console.log(colorList);
  const onPress = (color: {id: number; name: string}) => {
    const selected = currentColor.colors.findIndex((v) => v.id === color.id) !== -1;
    if (selected) currentColor.setColors((prev) => prev.filter((v) => v.id !== color.id));
    else currentColor.setColors((prev) => [...prev, color]);
  };
  return (
    <View>
      <ImageInputTitle>색상선택</ImageInputTitle>
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {colorList?.map((color) => {
          const selected = currentColor.colors.findIndex((v) => v.id === color.id) !== -1;
          return getColor(color.name as ColorName).background.indexOf("#") !== -1 ? (
            <ColorPill
              onPress={() => onPress(color)}
              key={color.id}
              style={{
                borderColor: selected ? "#5b23b2" : "#eee",
                backgroundColor: selected ? getColor(color.name).background : "#eee",
              }}
            >
              <Text
                style={{
                  color: selected ? getColor(color.name).color : "#000",
                }}
              >
                {color.name}
              </Text>
            </ColorPill>
          ) : (
            <ColorPill
              key={color.id}
              onPress={() => onPress(color)}
              style={{
                borderColor: selected ? "#5b23b2" : "#eee",
              }}
            >
              {selected && (
                <Image
                  key={color.id}
                  style={StyleSheet.absoluteFill}
                  source={{
                    uri: getColor(color.name as ColorName).background.slice(
                      4,
                      getColor(color.name as ColorName).background.length
                    ),
                  }}
                />
              )}
              <Text
                style={{
                  color: selected ? getColor(color.name).color : "#000",
                }}
              >
                {color.name}
              </Text>
            </ColorPill>
          );
        })}
        {colorList && colorList.length % 4 !== 4 ? (
          Array.from({length: 4 - (colorList.length % 4)}).map((_, i) => (
            <View style={{width: "22%"}}></View>
          ))
        ) : (
          <></>
        )}
      </View>
    </View>
  );
}

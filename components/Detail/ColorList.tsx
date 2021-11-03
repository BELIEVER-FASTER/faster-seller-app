import React from "react";
import {Image, ScrollView, Text, View} from "react-native";
import {ColorName, getColor} from "../../utils/data";

type ColorListProps = {
  colors: {
    id: number;
    Color: {
      id: number;
      name: string;
      hex: string;
    };
  }[];
};
export default function ColorList({colors}: ColorListProps): JSX.Element {
  return (
    <ScrollView horizontal style={{flexDirection: "row"}}>
      {colors.map((color) => (
        <View
          key={color.id}
          style={{
            width: 50,
            height: 50,
            borderWidth: 1,
            borderColor: "#aaa",
            marginRight: 16,
          }}
        >
          {getColor(color.Color.name as ColorName).background.indexOf("#") !== -1 ? (
            <View
              style={{
                flex: 1,
                backgroundColor: getColor(color.Color.name as ColorName).background,
              }}
            />
          ) : (
            <Image
              style={{
                flex: 1,
              }}
              source={{
                uri: getColor(color.Color.name as ColorName).background.slice(
                  4,
                  getColor(color.Color.name as ColorName).background.length
                ),
              }}
            />
          )}
          <Text style={{color: "#000", textAlign: "center"}}>{color.Color.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

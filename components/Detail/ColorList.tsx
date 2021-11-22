import React from "react";
import {Image, ScrollView, Text, View} from "react-native";
import {ColorName, getColor} from "../../utils/data";

type ColorListProps = {
  colors: {
    id: number;
    Color: {
      id: number;
      name: string;
      hex?: string;
    };
  }[];
};
export default function ColorList({colors}: ColorListProps): JSX.Element {
  return (
    <ScrollView horizontal style={{flexDirection: "row", paddingBottom: 9}}>
      {colors.map((color) => (
        <View
          key={color.id}
          style={{
            height: 24,
            paddingHorizontal: 8,
            borderWidth: 1,
            borderColor: "#aaa",
            marginRight: 12,
            flex: 1,
            justifyContent: "center",
          }}
        >
          {getColor(color.Color.name as ColorName).background.indexOf("#") !== -1 ? (
            <View
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundColor: getColor(color.Color.name as ColorName).background,
              }}
            />
          ) : (
            <Image
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
              }}
              source={{
                uri: getColor(color.Color.name as ColorName).background.slice(
                  4,
                  getColor(color.Color.name as ColorName).background.length
                ),
              }}
            />
          )}
          <Text
            style={{
              color: getColor(color.Color.name as ColorName).color,
              textAlign: "center",
            }}
          >
            {color.Color.name}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

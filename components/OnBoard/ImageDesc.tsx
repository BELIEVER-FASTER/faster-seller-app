import React from "react";
import {Image, Modal, Pressable, Text, View} from "react-native";

type ImageDescObProps = {
  x: number;
  y: number;
  onToggle: () => void;
};
export default function ImageDescOB({x, y, onToggle}: ImageDescObProps): JSX.Element {
  return (
    <Modal transparent animationType="fade" statusBarTranslucent={true}>
      <Pressable
        onPress={onToggle}
        style={{backgroundColor: "#00000077", flex: 1, zIndex: 10}}
      >
        <Image
          style={{
            width: 20,
            height: 20,
            position: "absolute",
            top: y,
            left: x,
          }}
          source={require("../../assets/images/question.png")}
        />
        <View
          style={{
            height: 50,
            backgroundColor: "#fff",
            position: "absolute",
            top: y + 30,
            left: x - 10,
            borderRadius: 6,
            paddingVertical: 4,
            paddingHorizontal: 10,
            justifyContent: "space-evenly",
          }}
        >
          <View
            style={{
              position: "absolute",
              top: -5,
              left: 15,
              backgroundColor: "#fff",
              width: 10,
              height: 10,
              transform: [{rotate: "45deg"}],
            }}
          />
          <View style={{flexDirection: "row"}}>
            <Text style={{fontWeight: "bold"}}>대표이미지: </Text>
            <Text>상품목록 / 썸네일 등</Text>
          </View>
          <View style={{flexDirection: "row"}}>
            <Text style={{fontWeight: "bold"}}>일반이미지: </Text>
            <Text>상품 상세페이지 등</Text>
          </View>
        </View>
      </Pressable>
    </Modal>
  );
}

import React, {useState} from "react";
import {Text, View} from "react-native";
import {ImageInputBox, ImageInputDesc, ImageInputTitle} from "./styles";
import {launchImageLibrary, ImageLibraryOptions} from "react-native-image-picker";
import {Ionicons} from "@expo/vector-icons";

export default function ImageInput(): JSX.Element {
  const [image, setImage] = useState<string | null>(null);

  const options: ImageLibraryOptions = {
    mediaType: "photo",
    selectionLimit: 20,
  };
  const onPress = () => {
    launchImageLibrary(options, (response) => {
      if (response.errorCode) {
        console.log("LaunchImageLibrary Error: ", response.errorMessage);
      } else {
        console.log(response.assets);
        // setImage(response.assets);
      }
    });
  };
  return (
    <View>
      <ImageInputTitle>상품이미지</ImageInputTitle>
      <ImageInputDesc>첫 번째 사진이 대표 이미지로 사용됩니다.</ImageInputDesc>

      <ImageInputBox onPress={onPress}>
        <Ionicons name="md-camera-sharp" size={20} color="#777" />
        <Text style={{color: "#777"}}>선택</Text>
      </ImageInputBox>
    </View>
  );
}

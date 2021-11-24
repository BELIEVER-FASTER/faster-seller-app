import React, {useRef, useState} from "react";
import {Alert, Image, Platform, ScrollView, Text, View} from "react-native";
import {
  ImageDeleteBtn,
  ImageInputBox,
  ImageInputDesc,
  ImageInputTitle,
  ImageLoadingModal,
  ImageView,
  ImgLoadingBox,
} from "./styles";
import {launchImageLibrary, ImageLibraryOptions} from "react-native-image-picker";
import {Ionicons} from "@expo/vector-icons";
import axios from "axios";
import {ProductForm} from "../../hooks/useProductForm";
import {TouchableOpacity} from "react-native-gesture-handler";
import ImageDescOB from "../OnBoard/ImageDesc";

type ImageInputProps = {
  image: ProductForm["images"];
};
export default function ImageInput({image}: ImageInputProps): JSX.Element {
  const {images, setImages} = image;
  const [openOb, setOpenOb] = useState(false);
  const [measure, setMeasure] = useState({x: 0, y: 0});
  const [uploading, setUploading] = useState(false);
  const ref = useRef<Image>(null);
  const options: ImageLibraryOptions = {
    mediaType: "photo",
    selectionLimit: 20,
  };

  const onRemove = (filename: string) => {
    return Alert.alert("사진제거", "선택한 사진을 제외하시겠습니까?", [
      {
        text: "네",
        onPress: () => setImages((prev) => prev.filter((v) => v.filename !== filename)),
      },
      {
        text: "아니요",
      },
    ]);
  };
  const onPress = () => {
    launchImageLibrary(options, (response) => {
      if (response.errorCode) {
        console.log("LaunchImageLibrary Error: ", response.errorMessage);
      } else {
        if (response.assets) {
          setUploading(true);
          const formData = new FormData();
          response.assets.forEach((file) => {
            if (file.type?.includes("gif"))
              return Alert.alert(
                "GIF 업로드 불가",
                "GIF를 제외한 나머지 이미지가 등록되었습니다."
              );
            formData.append("image", {
              name: file.fileName,
              type: file.type,
              uri:
                Platform.OS === "android" ? file.uri : file.uri!.replace("file://", ""),
            });
          });
          setUploading(true);
          axios
            .post("https://api.fstr.shop/seller/upload/image/product", formData)
            .then((res) => setImages((prev) => [...prev, ...res.data]))
            .catch((e) => console.error(e))
            .finally(() => setUploading(false));
        }
      }
    });
  };

  return (
    <>
      <View>
        <View style={{flexDirection: "row", alignItems: "center"}}>
          <ImageInputTitle style={{paddingTop: 3, paddingRight: 8}}>
            상품이미지
          </ImageInputTitle>
          <TouchableOpacity onPress={() => setOpenOb(true)}>
            <Image
              onLayout={() => ref.current?.measureInWindow((x, y) => setMeasure({x, y}))}
              ref={ref}
              style={{width: 20, height: 20}}
              source={require("../../assets/images/question.png")}
            />
          </TouchableOpacity>
          {openOb && (
            <ImageDescOB
              x={measure.x}
              y={measure.y}
              onToggle={() => setOpenOb((prev) => !prev)}
            />
          )}
        </View>
        <ImageInputDesc>첫 번째 사진이 대표 이미지로 사용됩니다.</ImageInputDesc>

        <ScrollView horizontal>
          <ImageInputBox onPress={onPress}>
            <Ionicons name="md-camera-sharp" size={20} color="#777" />
            <Text style={{color: "#777"}}>선택</Text>
          </ImageInputBox>
          {images.map((img, i) => (
            <ImageInputBox
              style={{borderColor: i === 0 ? "#5b23b2" : "#fff", borderWidth: 3}}
              key={img.filename}
              onLongPress={() => onRemove(img.filename)}
            >
              <ImageView
                resizeMode="cover"
                source={{
                  uri: `https://faster-seller.s3.ap-northeast-2.amazonaws.com/original${img.src}`,
                }}
              />
              <ImageDeleteBtn onPress={() => onRemove(img.filename)}>
                <Ionicons name="ios-remove" size={18} color="#fff" />
              </ImageDeleteBtn>
            </ImageInputBox>
          ))}
        </ScrollView>
      </View>
      {uploading && (
        <ImageLoadingModal transparent animationType="fade">
          <View
            style={{
              backgroundColor: "#00000020",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ImgLoadingBox>
              <Image
                style={{width: "80%", height: 200}}
                source={require("../../assets/images/loading.gif")}
              />
              <View>
                <Text style={{fontSize: 16, marginBottom: 10}}>
                  이미지를 업로드하고 있어요
                </Text>
                <Text style={{fontSize: 18, textAlign: "center", fontWeight: "bold"}}>
                  잠시만 기다려주세요!
                </Text>
              </View>
            </ImgLoadingBox>
          </View>
        </ImageLoadingModal>
      )}
    </>
  );
}

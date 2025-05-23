import React from "react";
import {Dimensions, Image, StyleSheet, View} from "react-native";
import Swiper from "react-native-swiper";

const {width} = Dimensions.get("window");

type ImagesProps = {
  images: {
    id?: number;
    src: string;
    filename: string;
  }[];
};
export default function Images({images}: ImagesProps) {
  return (
    <Swiper
      horizontal
      dotStyle={{backgroundColor: "#aaa"}}
      activeDotColor="#5b23b2"
      loop
      autoplay
      autoplayTimeout={3}
      containerStyle={{
        width: "100%",
        height: width,
        backgroundColor: "#aaa",
        marginBottom: 20,
      }}
    >
      {images.map((image) => (
        <View style={{flex: 1}} key={image.id}>
          <Image
            style={StyleSheet.absoluteFill}
            resizeMode="cover"
            source={{
              uri: `https://faster-seller.s3.ap-northeast-2.amazonaws.com/resize/600/product/${image.filename}`,
            }}
          />
        </View>
      ))}
    </Swiper>
  );
}

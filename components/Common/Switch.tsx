import React, {useEffect, useRef, useState} from "react";
import {Animated} from "react-native";
import {Circle, SwitchBox} from "./styles";
const A_Circle = Animated.createAnimatedComponent(Circle);

type SwitchProps = {
  value: boolean;
  toggleValue?: () => void;
};
export default function Switch({value, toggleValue}: SwitchProps) {
  const POSITION = useRef(new Animated.Value(value ? 41 : 3)).current;
  const slide = () => {
    Animated.timing(POSITION, {
      toValue: value ? 41 : 2,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };
  // const textPosition = POSITION.interpolate({
  //   inputRange: [2, 41],
  //   outputRange: [31, 3],
  // });
  useEffect(() => {
    slide();
  }, [value]);
  return (
    <SwitchBox
      onPress={toggleValue}
      style={{backgroundColor: value ? "#5B23B2" : "#aaa"}}
    >
      <Animated.Text
        style={{fontSize: 11, color: "#fff", transform: [{translateX: value ? 5 : 31}]}}
      >
        {value ? "판매중" : "품절"}
      </Animated.Text>
      <A_Circle style={{transform: [{translateX: POSITION}]}} />
    </SwitchBox>
  );
}

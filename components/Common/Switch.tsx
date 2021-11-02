import React, {useRef, useState} from "react";
import {Animated, Text, View} from "react-native";
import {Circle, SwitchBox} from "./styles";
const A_Circle = Animated.createAnimatedComponent(Circle);
export default function Switch() {
  const [checked, setChecked] = useState(false);
  const POSITION = useRef(new Animated.Value(2)).current;
  const slide = () => {
    setChecked((prev) => !prev);
    Animated.timing(POSITION, {
      toValue: checked ? 2 : 41,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };
  const textPosition = POSITION.interpolate({
    inputRange: [2, 41],
    outputRange: [31, 3],
  });
  return (
    <SwitchBox onPress={slide} style={{backgroundColor: checked ? "#5B23B2" : "#aaa"}}>
      <Animated.Text style={{color: "#fff", transform: [{translateX: textPosition}]}}>
        {checked ? "판매중" : "품절"}
      </Animated.Text>
      <A_Circle style={{transform: [{translateX: POSITION}]}} />
    </SwitchBox>
  );
}

import React, {useEffect, useRef} from "react";
import {Animated, Text} from "react-native";
import {useUI} from "../../modules/ui";
import {ToastPopUpBox, ToastPopUpContent} from "./styles";

const A_Content = Animated.createAnimatedComponent(ToastPopUpBox);
export default function Toast(): JSX.Element {
  const {toastPopUp} = useUI();
  const POSITION = useRef(new Animated.Value(300)).current;
  const moveUp = () => {
    Animated.timing(POSITION, {
      toValue: toastPopUp.visible ? 0 : -200,
      duration: 400,
      useNativeDriver: true,
    }).start();
  };
  useEffect(() => {
    moveUp();
  }, [toastPopUp.visible]);
  if (!toastPopUp.open) return <></>;
  return (
    <A_Content style={{transform: [{translateY: POSITION}]}}>
      <ToastPopUpContent>
        <Text style={{fontSize: 16, color: "#5b23b2", fontWeight: "bold"}}>
          {toastPopUp.message}
        </Text>
      </ToastPopUpContent>
    </A_Content>
  );
}

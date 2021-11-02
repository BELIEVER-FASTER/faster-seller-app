import React from "react";
import {BtnText, BtnWrapper, LoginBtnBox, LoginBtnTouchable} from "./styles";

type LoginBtnProps = {
  title: string;
  onPress: () => void;
};
const LoginBtn = ({title = "", onPress}: LoginBtnProps) => {
  return (
    <LoginBtnTouchable onPress={onPress}>
      <LoginBtnBox>{title}</LoginBtnBox>
    </LoginBtnTouchable>
  );
};

type ButtonProps = {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
};
function Button({title, onPress = () => null, disabled = false}: ButtonProps) {
  const pressBtn = () => {
    if (disabled) return;
    onPress();
  };
  return (
    <BtnWrapper onPress={pressBtn} disabled={disabled}>
      <BtnText>{title}</BtnText>
    </BtnWrapper>
  );
}

Button.Login = LoginBtn;

export default Button;

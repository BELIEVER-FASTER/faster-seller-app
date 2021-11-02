import React from "react";
import {FontAwesome5} from "@expo/vector-icons";
import {
  LoginInputContainer,
  LoginInputBox,
  CommonInputWrapper,
  CommonInputText,
} from "./styles";
import {Text} from "react-native";

type LoginInputProps = {
  label?: string;
  placeholder?: string;
  type: "email" | "pwd";
};
const LoginInput = ({placeholder, type}: LoginInputProps) => {
  return (
    <LoginInputContainer>
      <FontAwesome5 name={type === "email" ? "user" : "unlock"} size={20} color="#fff" />
      <LoginInputBox
        placeholderTextColor="#aaa"
        placeholder={placeholder}
        secureTextEntry={type === "pwd"}
      ></LoginInputBox>
    </LoginInputContainer>
  );
};

type InputProps = {
  label?: string;
  placeholder?: string;
};
function Input({label, placeholder}: InputProps) {
  return (
    <CommonInputWrapper>
      <Text style={{fontSize: 16}}>{label}</Text>
      <CommonInputText placeholder={placeholder} placeholderTextColor="#888" />
    </CommonInputWrapper>
  );
}

Input.Login = LoginInput;

export default Input;

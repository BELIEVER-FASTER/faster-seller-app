import React from "react";
import {FontAwesome5} from "@expo/vector-icons";
import {LoginInputContainer, LoginInputBox} from "./styles";

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

function Input() {
  return <></>;
}

Input.Login = LoginInput;

export default Input;

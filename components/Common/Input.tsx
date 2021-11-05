import React from "react";
import {FontAwesome5} from "@expo/vector-icons";
import {
  LoginInputContainer,
  LoginInputBox,
  CommonInputWrapper,
  CommonInputText,
  ProdInputText,
  ProdInputBox,
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

type ProdInputProps = {
  label?: string;
  placeholder?: string;
  onChange?: (e: string) => void;
  value?: string;
  multiline?: boolean;
  unit?: string;
  desc?: string;
  type?: "default" | "numeric";
};

function ProdInput({
  label,
  placeholder,
  value,
  onChange,
  multiline = false,
  desc = "",
  unit = "",
  type = "default",
}: ProdInputProps) {
  return (
    <CommonInputWrapper>
      <Text style={{fontSize: 16, fontWeight: "bold"}}>{label}</Text>
      {desc ? <Text style={{fontSize: 14, marginTop: 6}}>{desc}</Text> : <></>}
      <ProdInputBox>
        <ProdInputText
          keyboardType={type}
          multiline={multiline}
          onChangeText={onChange}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#888"
        />
        {unit ? <Text style={{fontWeight: "bold"}}>{unit}</Text> : <></>}
      </ProdInputBox>
    </CommonInputWrapper>
  );
}

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
Input.Prod = ProdInput;

export default Input;

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
import {KeyboardTypeOptions, Text} from "react-native";

type LoginInputProps = {
  label?: string;
  placeholder?: string;
  type: "email" | "pwd";
  value: string;
  onChange: (e: string) => void;
};
const LoginInput = ({placeholder, type, value, onChange}: LoginInputProps) => {
  return (
    <LoginInputContainer>
      <FontAwesome5 name={type === "email" ? "user" : "unlock"} size={20} color="#fff" />
      <LoginInputBox
        autoCapitalize="none"
        keyboardType={type === "email" ? "email-address" : "default"}
        onChangeText={onChange}
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
          autoCapitalize="none"
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
  value?: string;
  onChange?: (e: string) => void;
  type?: KeyboardTypeOptions;
  secure?: boolean;
};
function Input({
  label,
  placeholder,
  value,
  onChange,
  type = "default",
  secure,
}: InputProps) {
  return (
    <CommonInputWrapper>
      <Text style={{fontSize: 16}}>{label}</Text>
      <CommonInputText
        autoCapitalize="none"
        secureTextEntry={secure}
        keyboardType={type}
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        placeholderTextColor="#888"
      />
    </CommonInputWrapper>
  );
}

Input.Login = LoginInput;
Input.Prod = ProdInput;

export default Input;

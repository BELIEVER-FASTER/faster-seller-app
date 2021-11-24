import React from "react";
import {FakeCurrencyInput} from "react-native-currency-input";
import {FontAwesome5} from "@expo/vector-icons";
import {
  LoginInputContainer,
  LoginInputBox,
  CommonInputWrapper,
  CommonInputText,
  ProdInputText,
  ProdInputBox,
  PriceTextValue,
} from "./styles";
import {KeyboardTypeOptions, StyleProp, Text, ViewStyle} from "react-native";

type LoginInputProps = {
  label?: string;
  placeholder?: string;
  type: "email" | "pwd";
  value: string;
  onChange: (e: string) => void;
  onSubmit?: () => void;
};
const LoginInput = ({placeholder, type, value, onChange, onSubmit}: LoginInputProps) => {
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
        onSubmitEditing={onSubmit ? onSubmit : () => null}
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
  style?: StyleProp<ViewStyle>;
  onFocus?: () => void;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
};

function ProdInput({
  style,
  label,
  placeholder,
  value,
  onChange,
  multiline = false,
  desc = "",
  unit = "",
  type = "default",
  onFocus,
}: ProdInputProps) {
  return (
    <CommonInputWrapper style={style}>
      <Text style={{fontSize: 16, fontWeight: "bold"}}>{label}</Text>
      {desc ? <Text style={{fontSize: 14, marginTop: 6}}>{desc}</Text> : <></>}
      <ProdInputBox>
        <ProdInputText
          onFocus={onFocus}
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
function PriceInput({
  style,
  label,
  placeholder,
  value,
  onChange,
  setValue,
  multiline = false,
  desc = "",
  unit = "",
  type = "default",
}: ProdInputProps) {
  const onBlur = () => {
    if (setValue && value) {
      setValue(value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    }
  };
  const onFocus = () => {
    if (setValue && value) {
      setValue(value.split(",").join(""));
    }
  };
  return (
    <CommonInputWrapper style={style}>
      <Text style={{fontSize: 16, fontWeight: "bold"}}>{label}</Text>
      {desc ? <Text style={{fontSize: 14, marginTop: 6}}>{desc}</Text> : <></>}
      <ProdInputBox>
        <ProdInputText
          autoCapitalize="none"
          keyboardType={type}
          multiline={multiline}
          onChangeText={onChange}
          value={value}
          onBlur={onBlur}
          onFocus={onFocus}
          placeholder={placeholder}
          placeholderTextColor="#888"
        />
        {/* <PriceTextValue>asdasdasd</PriceTextValue> */}
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
Input.Price = PriceInput;

export default Input;

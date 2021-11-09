import AsyncStorage from "@react-native-async-storage/async-storage";
import {useNavigation} from "@react-navigation/core";
import {StatusBar} from "expo-status-bar";
import React, {useEffect, useState} from "react";
import {
  Alert,
  Image,
  ImageBackground,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import Button from "../components/Common/Button";
import Input from "../components/Common/Input";
import LoginOB from "../components/OnBoard/Login";
import useInput from "../hooks/useInput";
import {useAuth} from "../modules/auth";
import {Divider, LoginBtnWrapper, LoginText} from "./styles";
import * as Linking from "expo-linking";

export default function Login() {
  const [email, onChangeEmail, setEmail] = useInput();
  const [password, onChangePassword, setPassword] = useInput();
  const {loginDispatch, resetSignUpDispatch} = useAuth();
  const [obOpen, setObOpen] = useState(false);
  const navigation = useNavigation();
  const go2 = () => {
    navigation.navigate("SIGNUP1");
  };

  const onCloseRemember = async () => {
    await AsyncStorage.setItem("loginOB", "true");
    setObOpen(false);
  };
  const onLogin = () => {
    return Alert.alert("자동로그인", "로그인없이 앱을 사용하시겠습니까?", [
      {
        text: "네",
        onPress: () => {
          AsyncStorage.setItem("loginOB", "true");
          AsyncStorage.setItem("email", email);
          AsyncStorage.setItem("pwd", password);
          loginDispatch({email, password});
        },
      },
      {
        text: "아니요",
        onPress: () => {
          loginDispatch({email, password});
        },
      },
    ]);
  };
  const linkToKakao = () => {
    Linking.openURL("kakaoplus://plusfriend/home/_fZnrK");
  };
  useEffect(() => {
    resetSignUpDispatch();
  }, []);
  useEffect(() => {
    AsyncStorage.getItem("loginOB").then((res) => {
      if (!res) {
        console.log(res);
        setTimeout(() => {
          setObOpen(true);
        }, 200);
      } else {
        return;
      }
    });
  }, []);
  useEffect(() => {
    AsyncStorage.multiRemove(["email", "password", "loginOB", "mainOB"]);
    AsyncStorage.multiGet(["email", "pwd"]).then((res) => {
      const email = res[0][1] || null;
      const password = res[1][1] || null;
      if (email && password) return loginDispatch({email, password});
    });
  }, []);
  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
          <StatusBar translucent style={"light"} />
          <ImageBackground
            source={require("../assets/images/loginBg.png")}
            style={{height: "100%", width: "100%", top: 0}}
            resizeMode="cover"
          />
          <SafeAreaView style={StyleSheet.absoluteFill}>
            <View style={{flex: 1, paddingHorizontal: 40, paddingTop: 100}}>
              <Image
                source={require("../assets/images/Logo.png")}
                style={{width: 235, height: 53}}
              />
              <Divider />
              <LoginText>No.1 글로벌 B2B 패션 플랫폼</LoginText>
              <Input.Login
                value={email}
                onChange={onChangeEmail}
                placeholder="아이디를 입력해주세요"
                type="email"
              />
              <View style={{height: 5}} />
              <Input.Login
                value={password}
                onChange={onChangePassword}
                placeholder="비밀번호를 입력해주세요"
                type="pwd"
                onSubmit={onLogin}
              />
              <View style={{height: 50}} />
              <Button title="로그인" outlined textColor="#fff" onPress={onLogin} />
              <LoginBtnWrapper>
                <Button.Login title="회원가입" onPress={go2} />
                <View style={{width: 4, backgroundColor: "#fff", height: "100%"}} />
                <Button.Login title="비밀번호찾기" onPress={linkToKakao} />
              </LoginBtnWrapper>
            </View>
          </SafeAreaView>
          {obOpen && (
            <LoginOB onClose={() => setObOpen(false)} onCloseRemember={onCloseRemember} />
          )}
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

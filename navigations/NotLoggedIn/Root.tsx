import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Login from "../../screens/Login";
import SU1 from "../../screens/SignUp/SU1";
import SU2 from "../../screens/SignUp/SU2";
import SU3 from "../../screens/SignUp/SU3";
import SU4 from "../../screens/SignUp/SU4";
import SU5 from "../../screens/SignUp/SU5";
import SU6 from "../../screens/SignUp/SU6";
import SU7 from "../../screens/SignUp/SU7";

const Nav = createNativeStackNavigator();
export const Root = () => {
  return (
    <Nav.Navigator
      screenOptions={{
        headerShadowVisible: false,
        animation: "slide_from_right",
        contentStyle: {backgroundColor: "#fff"},
        headerTitle: "",
      }}
    >
      <Nav.Screen name="LOGIN" component={Login} options={{headerShown: false}} />
      <Nav.Screen name="SIGNUP1" component={SU1} options={{headerBackTitle: "로그인"}} />
      <Nav.Screen
        name="SIGNUP2"
        component={SU2}
        options={{headerBackTitle: "기본정보"}}
      />
      <Nav.Screen
        name="SIGNUP3"
        component={SU3}
        options={{headerBackTitle: "브랜드정보"}}
      />
      <Nav.Screen
        name="SIGNUP4"
        component={SU4}
        options={{headerBackTitle: "담당자정보"}}
      />
      <Nav.Screen name="SIGNUP5" component={SU5} options={{headerBackVisible: false}} />
      <Nav.Screen
        name="SIGNUP6"
        component={SU6}
        options={{headerBackTitle: "가입완료"}}
      />
      <Nav.Screen name="SIGNUP7" component={SU7} options={{headerBackTitle: "추천인"}} />
    </Nav.Navigator>
  );
};
export default Root;

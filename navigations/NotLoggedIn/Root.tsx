import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Login from "../../screens/Login";
import SU1 from "../../screens/SignUp/SU1";
import SU2 from "../../screens/SignUp/SU2";

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
    </Nav.Navigator>
  );
};
export default Root;

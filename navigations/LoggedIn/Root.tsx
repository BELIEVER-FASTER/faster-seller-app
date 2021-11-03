import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MainTab from "./MainTab";
import React from "react";
import DetailStack from "./DetailStack";

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
      <Nav.Screen name="MAIN" component={MainTab} options={{headerShown: false}} />
      <Nav.Screen name="DETAIL" component={DetailStack} options={{headerShown: false}} />
    </Nav.Navigator>
  );
};
export default Root;

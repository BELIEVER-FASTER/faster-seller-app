import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MainTab from "./MainTab";
import React from "react";

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
    </Nav.Navigator>
  );
};
export default Root;

import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React from "react";
import Detail from "../../screens/Detail";
import Edit from "../../screens/Edit";

export type DetailStackParamList = {
  DETAIL_DETAIL: {name: string};
  DETAIL_EDIT: {};
};
const Nav = createNativeStackNavigator();
export const DetailStack = () => {
  return (
    <Nav.Navigator
      screenOptions={{
        headerShadowVisible: false,
        animation: "slide_from_right",
        contentStyle: {backgroundColor: "#fff"},
      }}
    >
      <Nav.Screen name="DETAIL_DETAIL" component={Detail} />
      <Nav.Screen name="DETAIL_EDIT" component={Edit} options={{headerShown: false}} />
    </Nav.Navigator>
  );
};
export default DetailStack;

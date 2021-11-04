import Main from "../../screens/Main";
import Regist from "../../screens/Regist";
import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Ionicons} from "@expo/vector-icons";

const Nav = createBottomTabNavigator();
export const Root = () => {
  return (
    <Nav.Navigator
      sceneContainerStyle={{backgroundColor: "#fff"}}
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {backgroundColor: "#33205A"},
        headerTintColor: "#fff",
        tabBarActiveBackgroundColor: "#fff",
        tabBarInactiveBackgroundColor: "#fff",
        tabBarStyle: {borderTopColor: "#33205a", borderTopWidth: 0.7},
        tabBarInactiveTintColor: "#aaa",
        tabBarActiveTintColor: "#33205A",
        tabBarLabelPosition: "beside-icon",
        tabBarLabelStyle: {fontSize: 18, fontWeight: "600"},
      }}
    >
      <Nav.Screen
        name="상품목록"
        component={Main}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="ios-shirt-outline" size={20} color={color} />
          ),
        }}
      />
      <Nav.Screen
        name="상품등록"
        component={Regist}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({color}) => <Ionicons name="add" size={24} color={color} />,
        }}
      />
    </Nav.Navigator>
  );
};
export default Root;

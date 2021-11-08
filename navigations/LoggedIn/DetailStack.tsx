import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React from "react";
import {ProdDetail} from "../../mock/prodDetail";
import Detail from "../../screens/Detail";
import Edit from "../../screens/Edit";
import {ProdListItem} from "../../utils/data";

export type DetailStackParamList = {
  DETAIL_DETAIL: ProdListItem;
  DETAIL_EDIT: ProdDetail;
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
      <Nav.Screen name="DETAIL_EDIT" component={Edit} />
    </Nav.Navigator>
  );
};
export default DetailStack;

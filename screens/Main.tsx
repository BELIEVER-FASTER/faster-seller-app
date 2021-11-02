import {useNavigation} from "@react-navigation/core";
import React, {useEffect, useState} from "react";
import {Keyboard, StatusBar, TouchableWithoutFeedback, FlatList} from "react-native";
import Filter from "../components/Main/Filter";
import ProdItem from "../components/Main/ProdItem";
import Search from "../components/Main/Search";
import {prodList} from "../mock/prodList";
import {Ionicons, Octicons} from "@expo/vector-icons";
import {SearchNavBtn} from "./styles";

export default function Main(): JSX.Element {
  const [searchOpen, setSearchOpen] = useState(false);
  const navigation = useNavigation();
  const onClick = () => {
    alert("123");
  };
  useEffect(() => {
    navigation.setOptions({
      headerTitle: "누구누구님의 상품목록",
      headerRight: () => (
        <SearchNavBtn>
          <Octicons
            name={!searchOpen ? "search" : "plus"}
            size={18}
            color="#fff"
            style={searchOpen ? {transform: [{rotate: "45deg"}]} : {}}
            onPress={() => setSearchOpen((prev) => !prev)}
          />
          <Octicons
            onPress={onClick}
            name="grabber"
            style={{marginHorizontal: 16}}
            size={30}
            color="#fff"
          />
        </SearchNavBtn>
      ),
    });
  }, [searchOpen]);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <>
        <StatusBar translucent backgroundColor="#33205a" />
        <Filter />
        <Search open={searchOpen} />
        <FlatList data={prodList} renderItem={ProdItem} />
      </>
    </TouchableWithoutFeedback>
  );
}

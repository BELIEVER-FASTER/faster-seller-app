import {useNavigation} from "@react-navigation/core";
import React, {useEffect, useState} from "react";
import {
  Keyboard,
  StatusBar,
  TouchableWithoutFeedback,
  FlatList,
  View,
  Alert,
} from "react-native";
import Filter from "../components/Main/Filter";
import ProdItem from "../components/Main/ProdItem";
import Search from "../components/Main/Search";
import {prodList} from "../mock/prodList";
import {Octicons, Ionicons} from "@expo/vector-icons";
import {SearchNavBtn} from "./styles";

export default function Main(): JSX.Element {
  const [searchOpen, setSearchOpen] = useState(false);
  const navigation = useNavigation();
  const onClick = () => {
    return Alert.alert("로그아웃", "정말 로그아웃 하시겠습니까?", [
      {
        text: "네",
        onPress: () => Alert.alert("성공", "로그아웃되었슴"),
      },
      {
        text: "취소",
      },
    ]);
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
          <Ionicons
            name="log-out-outline"
            onPress={onClick}
            style={{marginHorizontal: 16}}
            size={25}
            color="#fff"
          />
        </SearchNavBtn>
      ),
    });
  }, [searchOpen]);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <>
        <StatusBar translucent backgroundColor="#33205a" barStyle="light-content" />
        <Filter />
        <Search open={searchOpen} />
        <FlatList
          data={prodList}
          renderItem={({item}) => <ProdItem item={item} />}
          keyExtractor={(item) => item.id + ""}
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: 1,
                backgroundColor: "#eee",
                width: "100%",
              }}
            />
          )}
        />
      </>
    </TouchableWithoutFeedback>
  );
}

import {useNavigation} from "@react-navigation/core";
import React, {useEffect, useState} from "react";
import {Keyboard, StatusBar, TouchableWithoutFeedback, Alert} from "react-native";
import Filter from "../components/Main/Filter";
import Search from "../components/Main/Search";
import {Octicons, Ionicons} from "@expo/vector-icons";
import {SearchNavBtn} from "./styles";
import MainOB from "../components/OnBoard/Main";
import {FilterType, filterList} from "../utils/data";
import {useAuth} from "../modules/auth";
import {useProduct} from "../modules/product";
import ProdList from "../components/Main/ProdList";

export default function Main(): JSX.Element {
  const [obOpen, setObOpen] = useState(true);
  const [filter, setFilter] = useState<FilterType>(filterList[0]);
  const [keyword, setKeyword] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const {totalCnt, loadProductCntDispatch} = useProduct();
  const navigation = useNavigation();
  const {logoutDispatch, login} = useAuth();
  const onClick = () => {
    return Alert.alert("로그아웃", "정말 로그아웃 하시겠습니까?", [
      {
        text: "네",
        onPress: () => {
          if (!login.data) return;
          logoutDispatch({email: login.data.email, name: login.data.name});
        },
      },
      {
        text: "취소",
      },
    ]);
  };

  useEffect(() => {
    navigation.setOptions({
      headerTitle: `${login.data?.name} 님의 상품목록`,
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

  useEffect(() => {
    loadProductCntDispatch({
      keyword: keyword ? keyword : "",
    });
  }, [keyword]);

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <>
          <StatusBar translucent backgroundColor="#33205a" barStyle="light-content" />
          <Filter totalCnt={totalCnt} filter={filter} setFilter={setFilter} />
          <Search setKeyword={setKeyword} open={searchOpen} />
          <ProdList keyword={keyword} sort={filter} />
        </>
      </TouchableWithoutFeedback>
      {obOpen && <MainOB onClose={() => setObOpen(false)} />}
    </>
  );
}

import {useNavigation} from "@react-navigation/core";
import React, {useEffect, useState} from "react";
import {Keyboard, StatusBar, TouchableWithoutFeedback, Alert, Text} from "react-native";
import Filter from "../components/Main/Filter";
import Search from "../components/Main/Search";
import {Octicons, Ionicons} from "@expo/vector-icons";
import {SearchNavBtn} from "./styles";
import MainOB from "../components/OnBoard/Main";
import {FilterType, filterList} from "../utils/data";
import {useAuth} from "../modules/auth";
import {useProduct} from "../modules/product";
import ProdList from "../components/Main/ProdList";
import {useQuery} from "react-query";
import {getTotalCnt} from "../utils/fetcher";
import EmptyView from "../components/Main/EmptyView";
import NoResults from "../components/Main/NoResults";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Main(): JSX.Element {
  const [obOpen, setObOpen] = useState(false);
  const [filter, setFilter] = useState<FilterType>(filterList[0]);
  const [keyword, setKeyword] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const {totalCnt, loadProductCntDispatch, loadProductList, hasMore} = useProduct();
  const navigation = useNavigation();
  const {logoutDispatch, login} = useAuth();
  const {data: initCnt} = useQuery("totalCnt", getTotalCnt);
  const onClick = () => {
    return Alert.alert("로그아웃", "정말 로그아웃 하시겠습니까?", [
      {
        text: "네",
        onPress: () => {
          if (!login.data) return;
          AsyncStorage.multiRemove(["email", "pwd"]);
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
      headerTitle: `${login.data?.name.split("/")[0] || login.data?.name} 님의 상품목록`,
      headerRight: () => (
        <SearchNavBtn>
          <Octicons
            name={!searchOpen ? "search" : "plus"}
            size={18}
            color="#fff"
            style={
              searchOpen ? {transform: [{rotate: "45deg"}], padding: 3} : {padding: 3}
            }
            onPress={() => setSearchOpen((prev) => !prev)}
          />
          <Ionicons
            name="log-out-outline"
            onPress={onClick}
            style={{marginHorizontal: 16, padding: 3}}
            size={25}
            color="#fff"
          />
        </SearchNavBtn>
      ),
    });
  }, [searchOpen]);
  const onCloseOB = async () => {
    await AsyncStorage.setItem("mainOB", "true");
    setObOpen(false);
  };

  useEffect(() => {
    AsyncStorage.getItem("mainOB").then((res) => {
      if (!res) setObOpen(true);
      else return;
    });
  }, []);

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
          {!loadProductList.loading &&
          !hasMore &&
          loadProductList.data?.length === 0 &&
          initCnt === 0 ? (
            <EmptyView />
          ) : totalCnt === 0 && keyword.trim() ? (
            <NoResults />
          ) : (
            <ProdList keyword={keyword} sort={filter} />
          )}
        </>
      </TouchableWithoutFeedback>
      {obOpen && <MainOB onClose={onCloseOB} />}
    </>
  );
}

import {NativeStackScreenProps} from "@react-navigation/native-stack";
import React, {useEffect} from "react";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";
import {DetailStackParamList} from "../navigations/LoggedIn/DetailStack";
import HeaderBtn from "../components/Detail/HeaderBtn";
import {ProdDetail} from "../mock/prodDetail";
import Images from "../components/Detail/Images";
import ColorList from "../components/Detail/ColorList";
import SizeTable from "../components/Detail/SizeTable";

interface DetailData
  extends NativeStackScreenProps<DetailStackParamList, "DETAIL_DETAIL"> {}
export default function Detail({route, navigation}: DetailData) {
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerBackTitle: "목록",
      headerTitleStyle: {fontWeight: "bold"},
      headerBackVisible: true,
      headerLeft: () =>
        Platform.OS === "ios" && (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{flexDirection: "row", alignItems: "center"}}
          >
            <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
            <Text>목록</Text>
          </TouchableOpacity>
        ),
      headerRight: () => (
        <>
          <HeaderBtn.Remove onPress={() => navigation.navigate("DETAIL_EDIT")} />
          <HeaderBtn.Edit
            onPress={() => navigation.navigate("DETAIL_EDIT", ProdDetail)}
          />
        </>
      ),
      title: route.params.name,
    });
  }, []);

  return (
    <>
      <StatusBar translucent backgroundColor="#fff" barStyle="dark-content" />
      <SafeAreaView style={StyleSheet.absoluteFill}>
        <ScrollView>
          <Images images={ProdDetail.pImages} />
          <View style={style.container}>
            <View style={style[1]}>
              <Text
                style={style["1.1"]}
              >{`${ProdDetail.CategoryMain.name} > ${ProdDetail.CategoryMiddle.name}`}</Text>
              <Text style={style["1.2"]}>
                {ProdDetail.state === 1 ? "판매중" : "품절"}
              </Text>
            </View>
            <Text style={style[2]}>{ProdDetail.name}</Text>
            <Text style={style[3]}>{ProdDetail.price.toLocaleString()} 원</Text>
          </View>
          <View style={{marginHorizontal: 16}}>
            <Text style={style.title}>상품색상</Text>
            <ColorList colors={ProdDetail.ProductColors} />
          </View>
          <View style={{marginVertical: 16}}>
            <Text style={{...style.title, marginLeft: 16}}>상품사이즈</Text>
            <SizeTable sizes={ProdDetail.ProductSizes} />
          </View>
          <View style={style.dContainer}>
            <Text style={style.title}>소재 혼용률</Text>
            <Text style={style.value}>{ProdDetail.composition}</Text>
          </View>
          <View style={style.dContainer}>
            <Text style={style.title}>최소주문단위</Text>
            <Text style={style.value}>
              {ProdDetail.isPiece === 1 ? "낱장가능" : "낱장불가"}
            </Text>
          </View>
          <View style={style.dContainer}>
            <Text style={style.title}>제조국</Text>
            <Text style={style.value}>
              {ProdDetail.Country.id === 3
                ? ProdDetail.countryName
                : ProdDetail.Country.name}
            </Text>
          </View>
          {ProdDetail.detail ? (
            <View style={style.detailBox}>
              <Text style={style.title}>디테일</Text>
              <Text style={style.value}>{ProdDetail.detail}</Text>
            </View>
          ) : (
            <></>
          )}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  1: {flexDirection: "row", justifyContent: "space-between"},
  1.1: {color: "#777", fontSize: 16},
  1.2: {color: "#000", fontSize: 16, fontWeight: "bold"},
  2: {fontSize: 24, fontWeight: "bold", paddingVertical: 8},
  3: {fontSize: 20, fontWeight: "bold", textAlign: "right"},
  dContainer: {
    paddingHorizontal: 16,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
  },
  detailBox: {
    marginTop: 10,
    paddingHorizontal: 16,
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  title: {fontSize: 16, paddingVertical: 8},
  value: {fontSize: 20, fontWeight: "bold"},
});

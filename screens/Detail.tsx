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
import {useProduct} from "../modules/product";

interface DetailData
  extends NativeStackScreenProps<DetailStackParamList, "DETAIL_DETAIL"> {}
export default function Detail({route, navigation}: DetailData) {
  const {
    resetExistDispatch,
    loadExistDispatch,
    loadDetailDispatch,
    loadDetail,
    removeProductDispatch,
    existData,
    setReloadBlockDispatch,
  } = useProduct();

  useEffect(() => {
    loadDetailDispatch({
      type: route.params.state === 2 ? "updated" : "exist",
      productId: +route.params.id,
    });
    setReloadBlockDispatch(true);
    return () => {
      resetExistDispatch();
    };
  }, []);

  useEffect(() => {
    if (route.params.state === 2) {
      loadExistDispatch(+route.params.id);
    }
  }, []);
  const onDelete = () => {
    if (!loadDetail.data) return;
    removeProductDispatch({
      ProductId: loadDetail.data.ProductId
        ? loadDetail.data.ProductId
        : loadDetail.data.id,
      name: loadDetail.data.name,
    });
    navigation.navigate("MAIN");
  };
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
          <HeaderBtn.Remove onPress={onDelete} />
          <HeaderBtn.Edit
            onPress={() => {
              if (!loadDetail.data) return;
              navigation.navigate("DETAIL_EDIT", loadDetail.data);
            }}
          />
        </>
      ),
      title: route.params.name,
    });
  }, [loadDetail.data]);
  const stateChanged = () => {
    if (!loadDetail.data) return;
    if (!existData.data) return false;
    if (loadDetail.data.state !== 2) {
      return false;
    }
    if (loadDetail.data.state === 2 && !loadDetail.data.ProductId) {
      return true;
    }
    if (!loadDetail.data.ProductId && existData.data.state === 2) {
      return true;
    }
    return false;
  };

  const nameChanged = () => {
    if (!loadDetail.data) return;
    if (!existData.data) return;
    if (loadDetail.data.name !== existData.data.name) {
      return true;
    }
    return false;
  };
  const cateChanged = () => {
    if (!loadDetail.data) return;
    if (!existData.data) return;
    if (loadDetail.data.CategoryMain.id !== existData.data.CategoryMain.id) {
      return true;
    }
    if (loadDetail.data.CategoryMiddle.id !== existData.data.CategoryMiddle.id) {
      return true;
    }
    return false;
  };

  if (!loadDetail.data) return <></>;
  return (
    <>
      <StatusBar translucent backgroundColor="#fff" barStyle="dark-content" />
      <SafeAreaView style={StyleSheet.absoluteFill}>
        <ScrollView>
          <Images images={loadDetail.data.pImages} />
          <View style={style.container}>
            <View style={style[1]}>
              <View>
                {cateChanged() ? (
                  <Text
                    style={{...style["1.1"], ...style.uValue, fontSize: 12}}
                  >{`${loadDetail.data.CategoryMain.name} > ${loadDetail.data.CategoryMiddle.name}`}</Text>
                ) : (
                  <></>
                )}
                <Text
                  style={style["1.1"]}
                >{`${loadDetail.data.CategoryMain.name} > ${loadDetail.data.CategoryMiddle.name}`}</Text>
              </View>
              <Text style={{fontSize: 14, fontWeight: "bold"}}>
                {(existData.data ? existData.data : loadDetail.data).isActive === 1
                  ? "판매중"
                  : "품절"}
              </Text>
            </View>
            <View style={style.titleBox}>
              {nameChanged() && <Text style={style.uValue}>{loadDetail.data.name}</Text>}
              <Text style={style[2]}>{loadDetail.data.name}</Text>
            </View>
            <View style={{...style.valueBox, justifyContent: "flex-end"}}>
              {existData.data && loadDetail.data.price !== existData.data.price && (
                <Text style={style.uValue}>{existData.data.price.toLocaleString()}</Text>
              )}
              <Text style={style[3]}>{loadDetail.data.price.toLocaleString()} 원</Text>
            </View>
          </View>
          <View style={{marginHorizontal: 16}}>
            <Text style={style.title}>상품색상</Text>
            <ColorList colors={loadDetail.data.ProductColors} />
          </View>
          <View style={{marginVertical: 16}}>
            <Text style={{...style.title, marginLeft: 16}}>상품사이즈</Text>
            <SizeTable sizes={loadDetail.data.ProductSizes} />
          </View>
          <View style={style.dContainer}>
            <Text style={style.title}>소재 혼용률</Text>
            <View style={style.valueBox}>
              {existData.data &&
                loadDetail.data.composition !== existData.data.composition && (
                  <Text style={style.uValue}>{existData.data?.composition}</Text>
                )}
              <Text style={style.value}>{loadDetail.data.composition}</Text>
            </View>
          </View>
          <View style={style.dContainer}>
            <Text style={style.title}>최소주문단위</Text>
            <View style={style.valueBox}>
              {existData.data && loadDetail.data.isPiece !== existData.data.isPiece && (
                <Text style={style.uValue}>
                  {loadDetail.data.isPiece === 0 ? "낱장 가능" : "낱장 불가능"}
                </Text>
              )}
              <Text style={style.value}>
                {loadDetail.data.isPiece === 0 ? "낱장 불가능" : "낱장 가능"}
              </Text>
            </View>
          </View>
          <View style={style.dContainer}>
            <Text style={style.title}>제조국</Text>
            <View style={style.valueBox}>
              {existData.data &&
                loadDetail.data.Country.id !== existData.data.Country.id && (
                  <Text style={style.uValue}>
                    {existData.data.Country.id !== 3
                      ? existData.data.Country.name
                      : existData.data.countryName}
                  </Text>
                )}
              <Text style={style.value}>
                {loadDetail.data.Country.id !== 3
                  ? loadDetail.data.Country.name
                  : loadDetail.data.countryName}
              </Text>
            </View>
          </View>
          {ProdDetail.detail ? (
            <View style={style.detailBox}>
              <Text style={style.title}>디테일</Text>
              {existData.data && loadDetail.data.detail !== existData.data.detail && (
                <Text style={style.uValue}>{existData.data.detail}</Text>
              )}
              <Text style={style.value}>{loadDetail.data.detail}</Text>
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
  1: {justifyContent: "space-between", flexDirection: "row", alignItems: "center"},
  1.1: {color: "#777", fontSize: 16},
  1.2: {color: "#000", fontSize: 16, fontWeight: "bold"},
  2: {fontSize: 24, fontWeight: "bold"},
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
  valueBox: {flexDirection: "row", alignItems: "center"},
  titleBox: {justifyContent: "center", paddingVertical: 8},
  value: {fontSize: 20, fontWeight: "bold"},
  uValue: {fontSize: 16, textDecorationLine: "line-through", paddingRight: 5},
});

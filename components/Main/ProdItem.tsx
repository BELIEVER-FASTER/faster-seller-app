import {useNavigation} from "@react-navigation/core";
import dayjs from "dayjs";
import React from "react";
import {Alert, Image, Text} from "react-native";
import {Swipeable} from "react-native-gesture-handler";
import {useProduct} from "../../modules/product";
import {ProdListItem} from "../../utils/data";
import Switch from "../Common/Switch";
import Badge from "./Badge";
import {
  PIPrice,
  PISummary,
  PITitle,
  ProdItemContainer,
  RemovedPrice,
  RemovedTitle,
  SwipedItem,
  TitleBox,
} from "./styles";

const renderRightActions = (onRemove: () => void) => {
  return (
    <SwipedItem onPress={onRemove}>
      <Text style={{color: "#fff"}}>삭제</Text>
    </SwipedItem>
  );
};

type ProdItemProps = {item: ProdListItem};
export default function ProdItem({item}: ProdItemProps): JSX.Element {
  const navigation = useNavigation();
  const {toggleActiveDispatch, removeProductDispatch} = useProduct();
  const toggleValue = () => {
    toggleActiveDispatch({
      productId: item.id,
      isActive: item.isActive === 1 ? 0 : 1,
    });
  };
  const goDetail = () => {
    navigation.navigate("DETAIL", {screen: "DETAIL_DETAIL", params: item});
  };
  const onRemove = () => {
    return Alert.alert("상품삭제", "정말 상품을 삭제하시겠습니까?", [
      {
        text: "네",
        onPress: () => removeProductDispatch({ProductId: item.id, name: item.name}),
      },
      {
        text: "취소",
      },
    ]);
  };
  const isUpdated = item.UpdatedProduct;
  const isUpdatedTitle = item.UpdatedProduct && item.UpdatedProduct.name !== item.name;
  const isUpdatedPr = item.UpdatedProduct && item.UpdatedProduct.price !== item.price;
  return (
    <Swipeable renderRightActions={() => renderRightActions(onRemove)}>
      <ProdItemContainer onPress={goDetail}>
        <Image
          style={{height: "100%", width: 70, borderRadius: 6}}
          source={{
            uri: `https://faster-seller.s3.ap-northeast-2.amazonaws.com/resize/300/product/${
              isUpdated ? item.UpdatedProduct?.thumbnail : item.thumbnail
            }`,
          }}
          resizeMode="cover"
        />
        <PISummary>
          <TitleBox>
            <PITitle ellipsizeMode="tail" numberOfLines={1}>
              {isUpdatedTitle ? item.UpdatedProduct?.name : item.name}
            </PITitle>
            {isUpdatedTitle ? <RemovedTitle>{item.name}</RemovedTitle> : <></>}
          </TitleBox>

          <Text style={{marginVertical: 5, fontSize: 12}}>
            {dayjs(item.createdAt).format("YY년 MM월 DD일 HH시 MM분")}
          </Text>
          <TitleBox>
            <PIPrice>
              {isUpdatedPr
                ? item.UpdatedProduct?.price.toLocaleString()
                : item.price.toLocaleString()}
              원
            </PIPrice>
            {isUpdatedPr ? (
              <RemovedPrice>{item.UpdatedProduct?.price.toLocaleString()}원</RemovedPrice>
            ) : (
              <></>
            )}
            <Badge state={item.state} />
          </TitleBox>
        </PISummary>
        <Switch value={item.isActive === 1} toggleValue={toggleValue} />
      </ProdItemContainer>
    </Swipeable>
  );
}

import dayjs from "dayjs";
import React from "react";
import {Image, Text} from "react-native";
import {Swipeable} from "react-native-gesture-handler";
import Switch from "../Common/Switch";
import {PISummary, PITitle, ProdItemContainer, SwipedItem} from "./styles";

type ProdItemProps = {item: any};
export default function ProdItem({item}: ProdItemProps): JSX.Element {
  const renderRightActions = () => {
    return (
      <SwipedItem>
        <Text style={{color: "#fff"}}>삭제</Text>
      </SwipedItem>
    );
  };
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <ProdItemContainer>
        <Image
          style={{height: "100%", width: 70, borderRadius: 6}}
          source={{
            uri: `https://faster-seller.s3.ap-northeast-2.amazonaws.com/original/product/${item.thumbnail}`,
          }}
          resizeMode="cover"
        />
        <PISummary>
          <PITitle>{item.name}</PITitle>
          <Text style={{marginVertical: 5}}>
            {dayjs(item.createdAt).format("YYYY년 MM월 DD일")}
          </Text>
          <Text>{item.price.toLocaleString()}원</Text>
        </PISummary>
        <Switch />
      </ProdItemContainer>
    </Swipeable>
  );
}

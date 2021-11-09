import React, {useEffect} from "react";
import {FlatList, ListRenderItem, View} from "react-native";
import {useProduct} from "../../modules/product";
import {FilterType, ProdListItem} from "../../utils/data";
import ProdItem from "./ProdItem";
import Skelleton from "./Skelleton";
// import {ProdListEndBox, ProdListEndText} from "./styles";

type ProdListProps = {
  keyword: string;
  sort: FilterType;
};
export default function ProdList({keyword, sort}: ProdListProps): JSX.Element {
  const {loadProductListDispatch, setPageDispatch, loadProductList, hasMore, page} =
    useProduct();
  const listFooter = React.useCallback((): JSX.Element => {
    return (
      <>
        {hasMore ? (
          <Skelleton />
        ) : (
          // <ProdListEndBox>
          //   <ProdListEndText>모든 상품을 불러왔습니다.</ProdListEndText>
          // </ProdListEndBox>
          <></>
        )}
      </>
    );
  }, [hasMore]);

  const fetchMore = () => {
    if (!hasMore) return;
    setPageDispatch("next");
  };

  useEffect(() => {
    if (!hasMore && page > 1) return;
    loadProductListDispatch({
      page: page,
      sort: sort ? (sort.value as "created" | "name" | "price") : "created",
      keyword: keyword ? (keyword as string) : "",
    });
  }, [page, hasMore, sort, keyword]);

  useEffect(() => {
    setPageDispatch(1);
  }, [keyword, sort]);

  const renderItem: ListRenderItem<ProdListItem> = ({item}) => <ProdItem item={item} />;
  return (
    <FlatList
      refreshing={loadProductList.loading}
      onRefresh={() => setPageDispatch(1)}
      data={loadProductList.data}
      renderItem={renderItem}
      ListFooterComponent={listFooter}
      keyExtractor={(item) => item.id + ""}
      onEndReached={fetchMore}
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
  );
}

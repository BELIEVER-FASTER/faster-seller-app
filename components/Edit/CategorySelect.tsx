import React, {useState} from "react";
import {Category} from "../../utils/data";
import {useQuery} from "react-query";
import {getCateList} from "../../utils/fetcher";
import {Pressable, ScrollView} from "react-native";
import {ProductForm} from "../../hooks/useProductForm";
import {
  StoreSelectBox,
  StoreSelectInput,
  StoreSelectText,
} from "../../screens/SignUp/styles";
import {
  CateContainer,
  CateSelectBox,
  CateSelectModal,
  CateSelectText,
  ImageInputTitle,
} from "./styles";

type CategorySelectProps = {
  currentCate: ProductForm["cate"];
};
export default function CategorySelect({
  currentCate: {cate, setCate},
}: CategorySelectProps): JSX.Element {
  const {data: categoryList} = useQuery(["ui", "category"], getCateList);
  const [main, setMain] = useState<Category | null>(null);
  const [open, setOpen] = useState(false);
  const [middleOpen, setMiddleOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  const onClickMain = (cate: Category) => {
    setMain(cate);
    if (cate.id === 7 || cate.id === 8) {
      if (cate.id === 7) {
        setCate({
          main: {id: cate.id, name: cate.name},
          middle: {id: 67, name: "원피스"},
        });
      }
      if (cate.id === 8) {
        setCate({
          main: {id: cate.id, name: cate.name},
          middle: {id: 68, name: "스커트"},
        });
      }
      setMain(null);
      return setOpen(false);
    }
    setOpen(false);
    setMiddleOpen(true);
  };
  const onClickMiddle = (cate: {id: number; name: string}) => {
    if (!main) return;
    setCate({main: {id: main.id, name: main.name}, middle: cate});
    setMain(null);
    setMiddleOpen(false);
  };

  if (!categoryList) return <></>;
  return (
    <>
      <ImageInputTitle>상품카테고리</ImageInputTitle>
      <StoreSelectBox>
        <Pressable onPress={onOpen}>
          <StoreSelectInput>
            <StoreSelectText strong={cate?.main.name || ""}>
              {cate?.middle.name
                ? `${cate?.main.name} > ${cate?.middle.name}`
                : "선택해주세요"}
            </StoreSelectText>
          </StoreSelectInput>
        </Pressable>
      </StoreSelectBox>
      {open && (
        <CateSelectModal animationType="slide" transparent>
          <Pressable
            style={{
              backgroundColor: "#00000020",
              flex: 1,
              alignItems: "center",
              justifyContent: "flex-end",
            }}
            onPress={onClose}
          >
            <CateContainer
              style={{
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 7,
                },
                shadowOpacity: 0.43,
                shadowRadius: 9.51,
                elevation: 15,
              }}
            >
              <ScrollView>
                {categoryList.map((cate) => (
                  <CateSelectBox key={cate.id} onPress={() => onClickMain(cate)}>
                    <CateSelectText>{cate.name}</CateSelectText>
                  </CateSelectBox>
                ))}
              </ScrollView>
            </CateContainer>
          </Pressable>
        </CateSelectModal>
      )}
      {middleOpen && (
        <CateSelectModal animationType="slide" transparent>
          <Pressable
            style={{
              backgroundColor: "#00000020",
              flex: 1,
              alignItems: "center",
              justifyContent: "flex-end",
            }}
            onPress={() => setMiddleOpen(false)}
          >
            <CateContainer
              style={{
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 7,
                },
                shadowOpacity: 0.43,
                shadowRadius: 9.51,
                elevation: 15,
              }}
            >
              <ScrollView>
                {main?.CategoryMiddles.map((cate) => (
                  <CateSelectBox onPress={() => onClickMiddle(cate)} key={cate.id}>
                    <CateSelectText>{cate.name}</CateSelectText>
                  </CateSelectBox>
                ))}
              </ScrollView>
            </CateContainer>
          </Pressable>
        </CateSelectModal>
      )}
    </>
  );
}

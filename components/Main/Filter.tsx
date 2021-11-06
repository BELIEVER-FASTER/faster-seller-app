import React, {useEffect, useRef, useState} from "react";
import {Animated, Pressable, Text, Dimensions} from "react-native";
import {FilterBtn, FilterContainer, FilterModalItem} from "./styles";
import {MaterialIcons, MaterialCommunityIcons} from "@expo/vector-icons";
import {FilterIcon, filterList} from "../../utils/data";

const {height, width} = Dimensions.get("screen");
type FilterModalProps = {
  open: boolean;
  onClose: () => void;
  selectedFilter: {
    id: number;
    name: string;
    value: string;
    icon: string;
  };
  setSelectedFilter: React.Dispatch<
    React.SetStateAction<{
      id: number;
      name: string;
      value: string;
      icon: string;
    }>
  >;
};
function FilterModal({
  selectedFilter,
  onClose,
  setSelectedFilter,
  open,
}: FilterModalProps) {
  const POSITION = useRef(new Animated.Value(300)).current;
  const [up, setUp] = useState(true);
  const moveUp = () => {
    Animated.timing(POSITION, {
      toValue: up ? 0 : 300,
      duration: 400,
      useNativeDriver: true,
    }).start(() => setUp((prev) => !prev));
  };
  const selectFilter = (ft: {id: number; name: string; value: string; icon: string}) => {
    setSelectedFilter(ft);
    onClose();
  };
  useEffect(() => {
    if (open) {
      moveUp();
    } else {
      moveUp();
    }
  }, [open]);
  return (
    <>
      <Pressable
        onPress={onClose}
        style={{
          width,
          height,
          position: "absolute",
          top: 0,
          left: 0,
          flex: 1,
          zIndex: 98,
        }}
      ></Pressable>
      <Animated.View
        style={{
          transform: [{translateY: POSITION}],
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 9,
          },
          shadowOpacity: 0.48,
          shadowRadius: 11.95,
          elevation: 18,
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          backgroundColor: "#fff",
          zIndex: 99,
        }}
      >
        {filterList.map((ft) => (
          <FilterModalItem
            selected={selectedFilter.id === ft.id}
            key={ft.id}
            onPress={() => selectFilter(ft)}
          >
            <MaterialCommunityIcons
              name={ft.icon as FilterIcon}
              size={24}
              color="black"
            />
            <Text>{ft.name}</Text>
          </FilterModalItem>
        ))}
      </Animated.View>
    </>
  );
}

type FilterProps = {
  filter: {
    id: number;
    name: string;
    value: string;
    icon: string;
  };
  setFilter: React.Dispatch<
    React.SetStateAction<{
      id: number;
      name: string;
      value: string;
      icon: string;
    }>
  >;
  totalCnt: number;
};
export default function Filter({filter, setFilter, totalCnt}: FilterProps): JSX.Element {
  const [open, setopen] = useState(false);
  return (
    <>
      <FilterContainer>
        <Text style={{color: "#fff", fontSize: 12}}>총 {totalCnt}개의 결과</Text>
        <FilterBtn onPress={() => setopen((prev) => !prev)}>
          <MaterialIcons
            name="arrow-drop-down"
            size={24}
            color="#fff"
            style={{transform: [{rotate: open ? "180deg" : "0deg"}]}}
          />
          <Text style={{color: "#fff"}}>{filter.name}</Text>
        </FilterBtn>
      </FilterContainer>
      {open && (
        <FilterModal
          open={open}
          onClose={() => setopen(false)}
          selectedFilter={filter}
          setSelectedFilter={setFilter}
        />
      )}
    </>
  );
}

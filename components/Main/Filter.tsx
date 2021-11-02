import React, {useEffect, useRef, useState} from "react";
import {Animated, Pressable, Text, Dimensions} from "react-native";
import {FilterBtn, FilterContainer, FilterModalItem} from "./styles";
import {MaterialIcons, MaterialCommunityIcons} from "@expo/vector-icons";

const {height, width} = Dimensions.get("screen");
type FilterModalProps = {
  open: boolean;
  onClose: () => void;
  selectedFilter: string;
  setSelectedFilter: React.Dispatch<React.SetStateAction<string>>;
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
        <FilterModalItem onPress={onClose}>
          <MaterialCommunityIcons name="calendar-arrow-left" size={24} color="black" />
          <Text>최근 등록일순</Text>
        </FilterModalItem>
        <FilterModalItem onPress={onClose}>
          <MaterialCommunityIcons name="sort-numeric-variant" size={24} color="black" />
          <Text>가격 낮은순</Text>
        </FilterModalItem>
        <FilterModalItem onPress={onClose}>
          <MaterialCommunityIcons
            name="sort-alphabetical-variant"
            size={24}
            color="black"
          />
          <Text>이름순</Text>
        </FilterModalItem>
      </Animated.View>
    </>
  );
}

export default function Filter(): JSX.Element {
  const [open, setopen] = useState(false);
  const [filter, setFilter] = useState("");
  return (
    <>
      <FilterContainer>
        <FilterBtn onPress={() => setopen((prev) => !prev)}>
          <MaterialIcons
            name="arrow-drop-down"
            size={24}
            color="#fff"
            style={{transform: [{rotate: open ? "180deg" : "0deg"}]}}
          />
          <Text style={{color: "#fff"}}>최근 등록일순</Text>
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

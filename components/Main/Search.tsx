import React, {useEffect, useRef, useState} from "react";
import {Animated, Text} from "react-native";
import {SearchBox, SearchContainer, SearchInput} from "./styles";
import {Octicons} from "@expo/vector-icons";

type SearchProps = {
  open: boolean;
};
const A_SearchCT = Animated.createAnimatedComponent(SearchContainer);
export default function Search({open}: SearchProps): JSX.Element {
  const POSITION = useRef(new Animated.Value(-50)).current;
  const [height, setHeight] = useState(0);
  const moveUp = () => {
    open && setHeight(50);
    Animated.timing(POSITION, {
      toValue: open ? 0 : -50,
      duration: 250,
      useNativeDriver: true,
    }).start(() => setHeight(open ? 50 : 0));
  };
  useEffect(() => {
    if (open) {
      moveUp();
    } else {
      moveUp();
    }
  }, [open]);

  return height ? (
    <A_SearchCT
      style={{
        transform: [{translateY: POSITION}],
      }}
    >
      <SearchBox>
        <Octicons name="search" size={20} color="#33205a" />
        <SearchInput />
      </SearchBox>
      <Text>리셋</Text>
    </A_SearchCT>
  ) : (
    <></>
  );
}

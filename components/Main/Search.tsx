import React, {useCallback, useEffect, useRef, useState} from "react";
import {Animated, Text, TouchableOpacity} from "react-native";
import {SearchBox, SearchContainer, SearchInput} from "./styles";
import {Octicons} from "@expo/vector-icons";
import _debounce from "lodash/debounce";
type SearchProps = {
  open: boolean;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
};
const A_SearchCT = Animated.createAnimatedComponent(SearchContainer);
export default function Search({open, setKeyword}: SearchProps): JSX.Element {
  const [currentKey, setCurrentKey] = useState("");
  const POSITION = useRef(new Animated.Value(-50)).current;
  const [height, setHeight] = useState(0);
  const debounce = useCallback(
    _debounce((emailV: string) => {
      setKeyword(emailV);
    }, 500),
    []
  );
  const onChangeKeyword = (text: string) => {
    setCurrentKey(text);
    debounce(text);
  };
  const onReset = () => {
    setCurrentKey("");
    setKeyword("");
  };
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
        <SearchInput value={currentKey} onChangeText={onChangeKeyword} />
      </SearchBox>
      <TouchableOpacity onPress={onReset}>
        <Text>리셋</Text>
      </TouchableOpacity>
    </A_SearchCT>
  ) : (
    <></>
  );
}

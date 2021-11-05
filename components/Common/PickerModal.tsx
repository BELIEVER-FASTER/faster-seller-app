import React, {useEffect, useRef, useState} from "react";
import {Picker, Animated, Pressable} from "react-native";
import {useQuery} from "react-query";
import {getStoreList} from "../../utils/fetcher";

type PMProps = {
  open: boolean;
  onClose: () => void;
  selectedValue: string;
  setSelectedValue: React.Dispatch<React.SetStateAction<string>>;
};
export default function PickerModal({
  selectedValue,
  onClose,
  setSelectedValue,
  open,
}: PMProps) {
  const {data: storeList} = useQuery(["ui", "store"], getStoreList);
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
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          flex: 1,
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
        <Picker
          onPress={() => console.log(1)}
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          {storeList?.map((store) => (
            <Picker.Item key={store.id} label={store.name} value={store.id} />
          ))}
        </Picker>
      </Animated.View>
    </>
  );
}

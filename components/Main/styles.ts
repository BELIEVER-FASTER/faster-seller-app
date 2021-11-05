import styled from "styled-components/native";

export const FilterContainer = styled.View`
  background: #33205a;
  height: 30px;
  width: 100%;
  align-items: flex-end;
  padding: 0 16px;
  z-index: 10;
`;
export const FilterBtn = styled.Pressable`
  flex-direction: row;
  align-items: center;
`;
export const SearchContainer = styled.View`
  height: 50px;
  padding: 0 16px;
  border-bottom-width: 0.2px;
  border-bottom-color: #33205a;
  flex-direction: row;
  align-items: center;
`;
export const SearchBox = styled.Pressable`
  flex: 1;
  border: 1px #33205a;
  border-radius: 6px;
  height: 35px;
  padding: 0 10px;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-right: 16px;
`;
export const SearchInput = styled.TextInput`
  flex: 1;
  margin-left: 10px;
`;
export const ProdItemContainer = styled.Pressable`
  width: 100%;
  flex-direction: row;
  align-items: center;
  height: 90px;
  padding: 10px 16px;
  background-color: #fff;
`;
export const PISummary = styled.View`
  padding: 0 12px;
  flex: 1;
`;
export const PITitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;
export const SwipedItem = styled.TouchableOpacity`
  width: 80px;
  height: 80px;
  align-items: center;
  justify-content: center;
  background-color: #ff0000;
`;

export const FilterModalItem = styled.TouchableOpacity<{selected: boolean}>`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px 16px;
  ${({selected}) =>
    selected &&
    `
    background-color:#eee;
  `}
`;

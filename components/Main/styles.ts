import styled from "styled-components/native";

export const FilterContainer = styled.View`
  background: #33205a;
  height: 30px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  z-index: 10;
  flex-direction: row;
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
  overflow: hidden;
`;
export const TitleBox = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const PITitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  flex: 1;
`;
export const RemovedTitle = styled.Text`
  font-size: 12px;
  text-decoration: line-through;
`;
export const PIPrice = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;
export const RemovedPrice = styled.Text`
  font-size: 10px;
  text-decoration: line-through;
  padding-left: 5px;
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

export const BadgeBox = styled.View<{state: number}>`
  align-items: center;
  justify-content: center;
  padding: 2px 5px;
  border-radius: 4px;
  margin-left: 4px;
  ${({state}) => {
    return state === 1
      ? `
          background-color: #7855af;
        `
      : `
          background-color: #ad1457;
        `;
  }}
`;

export const BadgeText = styled.Text`
  font-size: 12px;
  color: #fff;
`;

export const SkelletonBox = styled.View`
  flex-direction: row;
  padding: 10px 16px;
  height: 90px;
  align-items: center;
  width: 100%;
`;
export const SKSwitch = styled.View`
  background-color: #eee;
  width: 60px;
  height: 28px;
  border-radius: 30px;
`;
export const SKImage = styled.View`
  background-color: #eee;
  height: 100%;
  width: 70px;
  border-radius: 6px;
`;
export const SKTitle = styled.View`
  background-color: #eee;
  height: 18px;
  width: 60%;
`;
export const SKPrice = styled.View`
  background-color: #eee;
  height: 14px;
  width: 30%;
`;
export const SKDate = styled.View`
  margin: 9px 0;
  height: 9px;
  width: 40%;
  background-color: #eee;
`;

export const ProdListEndBox = styled.View`
  height: 40px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;
export const ProdListEndText = styled.Text`
  font-size: 17px;
`;

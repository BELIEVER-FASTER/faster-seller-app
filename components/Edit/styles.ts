import styled from "styled-components/native";

export const ImageInputTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
export const ImageInputDesc = styled.Text`
  font-size: 14px;
  margin: 8px 0 16px 0;
`;

export const ImageInputBox = styled.TouchableOpacity`
  background-color: #eee;
  width: 76px;
  height: 76px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
`;

export const CateSelectModal = styled.Modal`
  background-color: #aaa;
  width: 100%;
`;
export const CateContainer = styled.View`
  background-color: #fff;
  width: 90%;
  height: 324px;
  border-radius: 6px;
`;
export const CateSelectBox = styled.TouchableOpacity`
  padding: 5px;
`;
export const CateSelectText = styled.Text`
  padding: 5px;
  font-size: 16px;
`;

export const PieceSelectBox = styled.TouchableOpacity<{selected: boolean}>`
  width: 45%;
  padding: 8px;
  justify-content: center;
  align-items: center;
  background-color: #5b23b2;
  border-radius: 6px;
  border: 2px #5b23b2;
  ${({selected}) =>
    !selected &&
    `
    background-color: #fff;
  `}
`;
export const PieceSelectText = styled.Text<{selected: boolean}>`
  color: #fff;
  font-size: 15px;
  ${({selected}) =>
    !selected &&
    `
  color:#5b23b2;
  `}
`;

export const ColorPill = styled.TouchableOpacity`
  width: 22%;
  height: 32px;
  border-radius: 6px;
  border-color: #eee;
  background-color: #eee;
  border-width: 2px;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;

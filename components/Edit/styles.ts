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
  width: 88px;
  height: 88px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  margin-right: 12px;
  margin-top: 5px;
`;
export const ImageDeleteBtn = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  align-items: center;
  justify-content: center;
  background-color: #5b23b2;
  z-index: 9;
  position: absolute;
  top: -8px;
  right: -8px;
  border-radius: 50px;
`;
export const ImageView = styled.Image`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 6px;
`;
export const ImageLoadingModal = styled.Modal`
  background-color: #000;
  width: 100%;
  height: 100%;
`;
export const CateSelectModal = styled.Modal`
  background-color: #aaa;
  width: 100%;
`;
export const ImgLoadingBox = styled.View`
  background-color: #fbfbfb;
  width: 80%;
  height: 324px;
  border-radius: 12px;
  align-items: center;
  justify-content: space-evenly;
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
  height: 36px;
  border-radius: 6px;
  border-color: #eee;
  background-color: #eee;
  border-width: 2px;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;

export const SizePillList = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;
export const SizePillItem = styled.TouchableOpacity<{selected: boolean}>`
  background-color: #eee;
  height: 36px;
  width: 22%;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  ${({selected}) =>
    selected &&
    `
    background-color: #5b23b2;
  `}
`;
export const SizePillText = styled.Text<{selected: boolean}>`
  color: #000;
  ${({selected}) =>
    selected &&
    `
    color:#fff;
  `}
`;

export const DetailTextBox = styled.View`
  flex-direction: row;
  border-radius: 6px;
  background-color: #eee;
  margin-top: 8px;
  align-items: center;
`;
export const DetailTextInput = styled.TextInput`
  font-size: 15px;
  padding: 8px 9px;
  flex: 1;
`;
export const UnitText = styled.Text`
  color: #000;
  font-size: 14px;
  margin-right: 9px;
`;

export const CustomAddBtnBox = styled.TouchableOpacity<{minus?: boolean}>`
  width: 42px;
  height: 42px;
  background-color: #5b23b2;
  border: 1px #5b23b2;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  ${({minus}) =>
    minus &&
    `
  background-color: #fff;
  `}
`;
export const CustomTextInput = styled.TextInput`
  font-size: 15px;
  padding: 8px 9px;
  border-radius: 6px;
  background-color: #eee;
  flex: 1;
  margin-left: 10px;
`;

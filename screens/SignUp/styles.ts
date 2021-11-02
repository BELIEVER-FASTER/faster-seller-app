import styled from "styled-components/native";

export const SignUpContainer = styled.View`
  flex: 1;
  padding: 20px 32px 50px 32px;
`;
export const SignUpTitle = styled.Text`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 40px;
`;
export const StoreSelectBox = styled.View`
  margin-bottom: 24px;
`;
export const StoreSelectInput = styled.View`
  background-color: #eee;
  border-radius: 6px;
  margin-top: 8px;
`;
export const StoreSelectText = styled.Text<{strong: string}>`
  font-size: 15px;
  padding: 9px;
  border-radius: 6px;
  color: #aaa;
  ${({strong}) =>
    strong.trim() &&
    `
    color:#000;
  `}
`;
export const HintWrapper = styled.View`
  border-radius: 30px;
  align-items: flex-end;
  border-radius: 30px;
  background-color: #ff6c6c;
`;
export const HintTale = styled.View`
  background-color: #ff6c6c;
  height: 14px;
  width: 14px;
  transform: rotate(45deg) translate(-30px, -7px);
`;
export const HintText = styled.Text`
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  padding: 8px 12px;
`;
export const MultiLineText = styled.Text`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 4px;
`;
export const DoubleBtnWrapper = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

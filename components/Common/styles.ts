import styled from "styled-components/native";

export const LoginBtnBox = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const LoginBtnTouchable = styled.TouchableOpacity`
  height: 27px;
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const LoginInputContainer = styled.View`
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: #fff;
  padding: 10px 0;
  margin: 10px 0;
`;
export const LoginInputBox = styled.TextInput`
  font-size: 16px;
  color: #fff;
  flex: 1;
  margin-left: 16px;
`;

export const BtnWrapper = styled.TouchableOpacity<{
  width: string;
  outlined: boolean;
  disabled: boolean;
}>`
  border: 3px rgba(0, 0, 0, 0);
  border-radius: 6px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #33205a;
  ${({outlined}) =>
    outlined &&
    `
    background-color: rgba(0, 0, 0, 0);
    border: 3px #33205A;
  `}
  ${({disabled}) =>
    disabled &&
    `
    background-color: #948AA8;
`}
  ${({width}) =>
    width &&
    `
    width:${width};
`}
`;
export const BtnText = styled.Text<{outlined: boolean; textColor?: string}>`
  color: #fff;
  font-size: 16px;
  padding: 15px;
  font-weight: 600;
  ${({outlined}) =>
    outlined &&
    `
      color:#33205A;
  `}
  ${({textColor}) =>
    textColor &&
    `
      color:${textColor};
  `}
`;

export const CommonInputWrapper = styled.View``;
export const CommonInputText = styled.TextInput`
  background-color: #eee;
  font-size: 15px;
  padding: 9px;
  border-radius: 6px;
  margin-top: 8px;
`;

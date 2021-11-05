import styled from "styled-components/native";

export const HeaderBtnBox = styled.TouchableOpacity<{outlined?: boolean}>`
  padding: 6px 10px;
  background-color: #5b23b2;
  border-radius: 6px;
  margin-left: 10px;
  border-width: 1px;
  border-color: #5b23b2;
  ${({outlined}) =>
    outlined &&
    `
    background-color: #fff;
  `}
`;

export const HeaderBtnText = styled.Text<{outlined?: boolean}>`
  color: #fff;
  font-weight: bold;
  font-size: 13px;
  ${({outlined}) =>
    outlined &&
    `
    color: #5b23b2;
  `}
`;

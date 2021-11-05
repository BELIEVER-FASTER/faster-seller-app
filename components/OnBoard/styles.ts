import styled from "styled-components/native";

export const MainOBModal = styled.Modal``;
export const MainOBContainer = styled.View`
  flex: 1;
  background-color: #000000bb;
  align-items: center;
  justify-content: flex-end;
  padding: 60px 30px;
`;
export const MainOBDescBox = styled.View`
  position: absolute;
`;
export const MainOBDescReset = styled(MainOBDescBox)`
  top: 15%;
  left: 40%;
  align-items: center;
`;
export const MainOBDescDelete = styled(MainOBDescBox)`
  top: 50%;
  right: 30px;
  align-items: flex-end;
`;
export const MainOBDescText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  line-height: 22px;
`;

export const LoginOBModal = styled.Modal``;
export const LoginOBContainer = styled.View`
  flex: 1;
  padding: 100px 30px;
  align-items: center;
  justify-content: space-between;
`;
export const LoginOBTitle = styled.Text`
  color: #fff;
  font-size: 28px;
  font-weight: bold;
  line-height: 40px;
`;
export const DescText = styled.Text`
  text-align: center;
  line-height: 22px;
  font-size: 16px;
  color: #fff;
`;
export const OBBtnBox = styled.TouchableOpacity`
  width: 100%;
  height: 51px;
  background-color: #33205a;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
`;

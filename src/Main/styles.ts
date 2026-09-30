import { SafeAreaView } from "react-native-safe-area-context";
import { styled } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background: #fafafa;
`;

export const CategoriesContainer = styled.View`
  height: 73px;
  margin-top: 34px;
`;

export const MenuContainer = styled.View`
  flex: 1;
`;

export const Footer = styled.View`
  min-height: 110px;
  background: #fff;
  padding: 24px 24px;
`;

export const FooterContainer = styled(SafeAreaView)``;

export const CenteredContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

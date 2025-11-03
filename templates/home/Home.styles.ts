import { Typography } from "@/components";
import { Image } from "expo-image";
import { styled } from "styled-components/native";

export const ErrorText = styled(Typography)`
  color: ${({ theme }) => theme.colors.text.void};
  text-align: center;
  padding: 16px;
`;

export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 64px;
`;

export const Logo = styled(Image)`
  width: 100%;
  height: 34px;
  margin-vertical: 24px;
`;

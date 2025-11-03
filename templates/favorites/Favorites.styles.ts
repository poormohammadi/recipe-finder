import { Typography } from "@/components";
import { styled } from "styled-components/native";

export const Container = styled.View`
  padding: 32px 16px;
`;

export const Header = styled.View`
  padding-bottom: 16px;
`;

export const Title = styled(Typography)`
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const EmptyContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding: 32px;
  height: 100%;
`;

export const EmptyText = styled(Typography)`
  color: ${({ theme }) => theme.colors.text.secondary};
  text-align: center;
`;

export const ErrorText = styled(Typography)`
  color: ${({ theme }) => theme.colors.text.void};
  text-align: center;
  padding: 16px;
`;

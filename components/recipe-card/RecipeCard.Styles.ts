import { styled } from "styled-components/native";
import { Typography } from "../typography";

export const Card = styled.TouchableOpacity<{ $isListMode?: boolean }>`
  border-radius: 16px;
  ${({ $isListMode }) =>
    $isListMode
      ? `
  flex-direction: row;
  margin-bottom: 16px;
   `
      : `flex:1;`}
`;

export const CardImage = styled.Image<{ $isListMode?: boolean }>`
  border-radius: 16px;
  ${({ $isListMode }) =>
    $isListMode
      ? `
    width: 80px;
    height: 72px;
  `
      : `
    width: 100%;
    height: 150px;
  `}
`;

export const CardContent = styled.View<{ $isListMode?: boolean }>`
  padding: ${({ $isListMode }) => ($isListMode ? "16px 8px" : "8px 0")};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

export const CategoryLabel = styled(Typography)`
  color: ${({ theme }) => theme.colors.success.main};
  margin-bottom: 6px;
`;

export const FavoriteButton = styled.TouchableOpacity<{
  $isListMode?: boolean;
  $isFavorite?: boolean;
}>`
  padding: 16px;
  border-radius: 12px;
  background-color: ${({ theme, $isFavorite }) =>
    $isFavorite ? theme.colors.success.light : "transparent"};
  width: 48px;
  height: 48px;
  margin-left: 16px;
  align-items: center;
  justify-content: center;
`;

export const FavoriteIconContainer = styled.View`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 6px 8px;
  background-color: ${({ theme }) => theme.colors.success.light};
  border-radius: 12px;
`;

export const CardTextContainer = styled.View`
  flex: 1;
  max-width: 80%;
`;
import { BackButton, Typography } from "@/components";
import { styled } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background.paper};
`;

export const ScrollContent = styled.ScrollView`
  flex: 1;
`;

export const StyledBackButton = styled(BackButton)`
  position: absolute;
  top: 48px;
  left: 16px;
  z-index: 1000;
`;

export const HeaderImage = styled.Image`
  width: 100%;
  height: 300px;
`;

export const Content = styled.View`
  padding: 16px;
`;

export const FoodType = styled(Typography)`
  margin-bottom: 6px;
  color: ${({ theme }) => theme.colors.success.main};
`;

export const Title = styled(Typography)`
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 24px;
`;

export const TagsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 16px;
`;

export const Tag = styled.View`
  border: 1px solid ${({ theme }) => theme.colors.icon.selected};
  padding: 8px 16px;
  border-radius: 16px;
  margin-right: 8px;
  margin-bottom: 8px;
`;

export const MealTypeTag = styled(Tag)`
  background-color: ${({ theme }) => theme.colors.icon.selected};
`;

export const TagText = styled(Typography)`
  color: ${({ theme }) => theme.colors.text.midnight};
  text-transform: uppercase;
`;
export const MealTypeTagText = styled(TagText)`
  color: ${({ theme }) => theme.colors.text.midnight};
`;

export const Description = styled(Typography)`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 16px;
  line-height: 22px;
`;

export const StatsContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  gap: 8px;
`;

export const StatBox = styled.View`
  background-color: ${({ theme }) => theme.colors.background.default};
  padding: 16px;
  border-radius: 16px;
  align-items: center;
  flex: 1;
  margin: 8px 0;
`;

export const StatLabel = styled(Typography)`
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 4px;
`;

export const StatValue = styled(Typography)`
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const SectionTitle = styled(Typography)`
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 16px;
  margin-top: 32px;
`;

export const ListItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;
  gap: 8px;
`;

export const ListText = styled(Typography)`
  flex: 1;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const FavoriteButton = styled.TouchableOpacity<{ $isFavorite: boolean }>`
  background-color: ${({ theme, $isFavorite }) =>
    $isFavorite ? "transparent" : theme.colors.icon.selected};
  padding: 12px 16px;
  border-radius: 12px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-vertical: 32px;
  border: ${({ theme, $isFavorite }) =>
    $isFavorite ? `1px solid ${theme.colors.icon.selected}` : "none"};
`;

export const FavoriteButtonText = styled(Typography)<{ $isFavorite: boolean }>`
  color: ${({ theme }) => theme.colors.text.midnight};
  margin-left: 8px;
`;

export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ErrorText = styled(Typography)`
  color: ${({ theme }) => theme.colors.text.void};
  text-align: center;
  padding: 16px;
`;

export const ListNumber = styled(Typography)`
  color: ${({ theme }) => theme.colors.icon.selected};
  font-family: Epilogue;
  font-weight: 800;
  font-size: 18px;
`;

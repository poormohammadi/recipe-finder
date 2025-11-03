import { Meal } from "@/types";
import React from "react";

import { FavoritesIcon } from "@/icons";
import { useTheme } from "styled-components/native";
import { Typography } from "../typography";
import {
  Card,
  CardContent,
  CardImage,
  CardTextContainer,
  CategoryLabel,
  FavoriteButton,
  FavoriteIconContainer,
} from "./RecipeCard.Styles";

interface RecipeCardProps {
  meal: Meal;
  category?: string;
  onPress: () => void;
  isFavorite?: boolean;
  onFavoriteToggle?: () => void;
  isListMode?: boolean;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({
  meal,
  category,
  onPress,
  isFavorite = false,
  onFavoriteToggle,
  isListMode = false,
}) => {
  const theme = useTheme();
  return (
    <Card $isListMode={isListMode} onPress={onPress}>
      <CardImage source={{ uri: meal.image }} $isListMode={isListMode} />
      {!isListMode && isFavorite && (
        <FavoriteIconContainer>
          <FavoritesIcon
            width={11}
            height={11}
            color={theme.colors.icon.selected}
          />
        </FavoriteIconContainer>
      )}
      <CardContent $isListMode={isListMode}>
        <CardTextContainer>
          {category && (
            <CategoryLabel variant="caption">{category}</CategoryLabel>
          )}
          <Typography variant="h3" numberOfLines={isListMode ? 3 : 2}>
            {meal.name}
          </Typography>
        </CardTextContainer>

        {isListMode && (
          <FavoriteButton
            $isListMode={isListMode}
            $isFavorite={isFavorite}
            onPress={() => (isListMode ? onFavoriteToggle?.() : undefined)}
          >
            <FavoritesIcon
              width={16}
              height={16}
              color={
                isFavorite
                  ? theme.colors.icon.selected
                  : theme.colors.icon.default
              }
            />
          </FavoriteButton>
        )}
      </CardContent>
    </Card>
  );
};

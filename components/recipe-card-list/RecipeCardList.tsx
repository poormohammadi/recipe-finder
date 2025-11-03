import { Meal } from "@/types";
import React, { useCallback } from "react";
import { FlatList, ListRenderItem } from "react-native";
import { RecipeCard } from "../recipe-card";

interface RecipeCardListProps {
  meals: Meal[];
  onMealPress: (meal: Meal) => void;
  onFavoriteToggle?: (mealId: number) => void;
  favorites?: number[];
  isGridView?: boolean;
}

export const RecipeCardList: React.FC<RecipeCardListProps> = ({
  meals,
  onMealPress,
  onFavoriteToggle,
  favorites = [],
  isGridView = true,
}) => {
  const renderItem: ListRenderItem<Meal> = useCallback(
    ({ item }) => {
      const isFavorite = favorites.includes(item.id);
      const category = item.cuisine?.toUpperCase() || "";

      return (
        <RecipeCard
          meal={item}
          category={category}
          onPress={() => onMealPress(item)}
          isFavorite={isFavorite}
          onFavoriteToggle={() => onFavoriteToggle?.(item.id)}
          isListMode={!isGridView}
        />
      );
    },
    [onMealPress, onFavoriteToggle, favorites, isGridView]
  );

  return (
    <FlatList
      data={meals}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={isGridView ? 2 : 1}
      contentContainerStyle={{ paddingBottom: 178 }}
      columnWrapperStyle={isGridView ? { gap: 16 } : undefined}
      showsVerticalScrollIndicator={false}
    />
  );
};

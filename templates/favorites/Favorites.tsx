import { apiClient } from "@/api";
import { RecipeCardList } from "@/components";
import { useFavorites } from "@/contexts";
import { Meal } from "@/types";
import { useRouter } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Container,
  EmptyContainer,
  EmptyText,
  ErrorText,
  Header,
  Title,
} from "./Favorites.styles";

export const Favorites = () => {
  const router = useRouter();
  const { favorites, removeFavorite } = useFavorites();
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadFavoriteMeals = useCallback(async () => {
    if (favorites.length === 0) {
      setMeals([]);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const mealPromises = favorites.map((id) => apiClient.getMealDetails(id));
      const mealDetails = await Promise.all(mealPromises);
      const favoriteMeals: Meal[] = mealDetails.map((meal) => ({
        id: meal.id,
        name: meal.name,
        image: meal.image,
        cuisine: meal.cuisine,
      }));
      setMeals(favoriteMeals);
    } catch {
      setError("Failed to load favorites. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [favorites]);

  useEffect(() => {
    loadFavoriteMeals();
  }, [favorites, loadFavoriteMeals]);

  const handleMealPress = (meal: Meal) => {
    router.push(`/meal/${meal.id}`);
  };

  if (loading) {
    return (
      <Container>
        <ActivityIndicator style={{ marginTop: 128 }} size="large" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <ErrorText variant="body">{error}</ErrorText>
      </Container>
    );
  }

  return (
    <SafeAreaView>
      <Container>
        <Header>
          <Title variant="h1">My Favourites</Title>
        </Header>
        {meals.length === 0 ? (
          <EmptyContainer>
            <EmptyText variant="body">
              No favorites yet. Start adding recipes to your favorites!
            </EmptyText>
          </EmptyContainer>
        ) : (
          <RecipeCardList
            meals={meals}
            onMealPress={handleMealPress}
            onFavoriteToggle={removeFavorite}
            favorites={favorites}
            isGridView={false}
          />
        )}
      </Container>
    </SafeAreaView>
  );
};

import { apiClient } from "@/api";
import { RecipeCardList, SearchBox, Typography } from "@/components";
import { useFavorites } from "@/contexts";
import { Meal } from "@/types";

import { router } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ErrorText, LoadingContainer, Logo } from "./Home.styles";

export const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [meals, setMeals] = useState<Meal[]>([]);
  const [isGridView, setIsGridView] = useState(true);

  const { favorites, addFavorite, removeFavorite } = useFavorites();

  const handleFavoriteToggle = (mealId: number) => {
    if (favorites.includes(mealId)) {
      removeFavorite(mealId);
    } else {
      addFavorite(mealId);
    }
  };

  const loadMeals = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = searchQuery
        ? await apiClient.searchMeals(searchQuery)
        : await apiClient.listMeals();
      setMeals(response.recipes);
      setIsGridView(!searchQuery);
    } catch {
      setError("Failed to load recipes. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    const timer = setTimeout(() => {
      loadMeals();
    }, 500);

    return () => clearTimeout(timer);
  }, [loadMeals]);

  return (
    <SafeAreaView style={{ padding: 16 }}>
      <Logo
        source={require("@/assets/images/mindeats-logo.png")}
        contentFit="contain"
      />
      <SearchBox
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search recipes"
      />
      {loading ? (
        <LoadingContainer>
          <ActivityIndicator size="large" />
        </LoadingContainer>
      ) : error ? (
        <ErrorText variant="body">{error}</ErrorText>
      ) : (
        <>
          <Typography variant="h2" style={{ marginBottom: 16, marginTop: 24 }}>
            Popular
          </Typography>
          {meals.length === 0 && !!searchQuery ? (
            <Typography variant="body">No recipes found.</Typography>
          ) : (
            <RecipeCardList
              meals={meals}
              onMealPress={(meal) => {
                router.push(`/meal/${meal.id}`);
              }}
              onFavoriteToggle={handleFavoriteToggle}
              favorites={favorites}
              isGridView={isGridView}
            />
          )}
        </>
      )}
    </SafeAreaView>
  );
};

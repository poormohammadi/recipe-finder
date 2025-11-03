import { apiClient } from "@/api";
import { RatingStar } from "@/components";
import { BulletIcon, HeartOutlineIcon } from "@/icons";
import { MealDetails as MealDetailsType } from "@/types";
import { useRouter } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { useFavorites } from "../../contexts/FavoritesContext";
import {
  Container,
  Content,
  Description,
  ErrorText,
  FavoriteButton,
  FavoriteButtonText,
  FoodType,
  HeaderImage,
  ListItem,
  ListNumber,
  ListText,
  LoadingContainer,
  MealTypeTag,
  MealTypeTagText,
  ScrollContent,
  SectionTitle,
  StatBox,
  StatLabel,
  StatsContainer,
  StatValue,
  StyledBackButton,
  Tag,
  TagsContainer,
  TagText,
  Title,
} from "./MealDetails.styles";

export function MealDetails({ mealId }: { mealId: number }) {
  const router = useRouter();
  const [meal, setMeal] = useState<MealDetailsType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  const isFavorite = favorites.includes(mealId);

  const loadMealDetails = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const mealDetails = await apiClient.getMealDetails(mealId);
      setMeal(mealDetails);
    } catch {
      setError("Failed to load recipe details. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [mealId]);

  useEffect(() => {
    if (mealId) {
      loadMealDetails();
    }
  }, [loadMealDetails, mealId]);

  const handleFavoriteToggle = async () => {
    if (isFavorite) {
      await removeFavorite(mealId);
    } else {
      await addFavorite(mealId);
    }
  };

  if (loading) {
    return (
      <Container>
        <LoadingContainer>
          <ActivityIndicator size="large" color="#4CAF50" />
        </LoadingContainer>
      </Container>
    );
  }

  if (error || !meal) {
    return (
      <Container>
        <ErrorText variant="body">{error || "Recipe not found"}</ErrorText>
      </Container>
    );
  }

  return (
    <Container>
      <ScrollContent>
        <HeaderImage source={{ uri: meal.image }} />
        <StyledBackButton onPress={() => router.back()} />
        <Content>
          <FoodType variant="caption">{meal.cuisine?.toUpperCase()}</FoodType>
          <Title variant="h1">{meal.name}</Title>

          {((meal.mealType && meal.mealType.length > 0) ||
            (meal.tags && meal.tags.length > 0)) && (
            <TagsContainer>
              {meal.mealType?.map((tag: string, index: number) => (
                <MealTypeTag key={index}>
                  <MealTypeTagText variant="caption">
                    {tag.toUpperCase()}
                  </MealTypeTagText>
                </MealTypeTag>
              ))}
              {meal.tags?.map((tag: string, index: number) => (
                <Tag key={index}>
                  <TagText variant="caption">{tag.toUpperCase()}</TagText>
                </Tag>
              ))}
            </TagsContainer>
          )}

          {meal.description && (
            <Description variant="body">{meal.description}</Description>
          )}

          <StatsContainer>
            <StatBox>
              <StatLabel variant="body">Servings</StatLabel>
              <StatValue variant="h4">
                {meal.servings || "N/A"} people
              </StatValue>
            </StatBox>
            <StatBox>
              <StatLabel variant="body">Cook time</StatLabel>
              <StatValue variant="h4">
                {meal.cookTimeMinutes || meal.prepTimeMinutes || "N/A"}’ min
              </StatValue>
            </StatBox>
            <StatBox>
              <StatLabel variant="body">Rating</StatLabel>
              {meal.rating ? (
                <RatingStar rating={meal.rating} />
              ) : (
                <StatValue variant="h4">N/A</StatValue>
              )}
            </StatBox>
          </StatsContainer>

          {meal.ingredients && meal.ingredients.length > 0 && (
            <>
              <SectionTitle variant="h2">Ingredients</SectionTitle>
              {meal.ingredients.map((ingredient: string, index: number) => (
                <ListItem key={index}>
                  <BulletIcon />
                  <ListText variant="body">{ingredient}</ListText>
                </ListItem>
              ))}
            </>
          )}

          {meal.instructions && meal.instructions.length > 0 && (
            <>
              <SectionTitle variant="h2">Instructions</SectionTitle>
              {meal.instructions.map((instruction: string, index: number) => (
                <ListItem key={index}>
                  <ListNumber variant="h1">{index + 1}.</ListNumber>
                  <ListText variant="body">{instruction}</ListText>
                </ListItem>
              ))}
            </>
          )}

          <FavoriteButton
            $isFavorite={isFavorite}
            onPress={handleFavoriteToggle}
          >
            {isFavorite ? <HeartOutlineIcon /> : <HeartOutlineIcon />}
            <FavoriteButtonText variant="h3" $isFavorite={isFavorite}>
              {isFavorite ? "Remove from Favourites" : "Add to Favourites"}
            </FavoriteButtonText>
          </FavoriteButton>
        </Content>
      </ScrollContent>
    </Container>
  );
}

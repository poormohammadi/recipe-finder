import { MealDetails } from "@/templates";
import { useLocalSearchParams } from "expo-router";
import React from "react";

export default function MealDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const mealId = parseInt(id);
  return <MealDetails mealId={mealId} />;
}

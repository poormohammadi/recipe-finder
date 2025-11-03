export interface Meal {
  id: number;
  name: string;
  image: string;
  cuisine?: string;
}

export interface MealDetails extends Meal {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
  description: string;
}

export interface MealsResponse {
  recipes: Meal[];
  total: number;
  skip: number;
  limit: number;
}

import { MealDetails, MealsResponse } from '@/types';
import axios from 'axios';

const API_BASE_URL = 'https://dummyjson.com';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export const apiClient = {
  listMeals: async (limit: number = 10, skip: number = 0): Promise<MealsResponse> => {
    const response = await axiosInstance.get<MealsResponse>(
      `/recipes?limit=${limit}&skip=${skip}&select=name,image,cuisine`
    );
    return response.data;
  },

  searchMeals: async (
    query: string,
    limit: number = 10,
    skip: number = 0
  ): Promise<MealsResponse> => {
    const response = await axiosInstance.get<MealsResponse>(
      `/recipes/search?q=${encodeURIComponent(query)}&limit=${limit}&skip=${skip}&select=name,image,cuisine`
    );
    return response.data;
  },

  getMealDetails: async (id: number | string): Promise<MealDetails> => {
    const response = await axiosInstance.get<MealDetails>(`/recipes/${id}`);
    return response.data;
  },
};


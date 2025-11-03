import { Tabs } from 'expo-router';
import React from 'react';
import { useTheme } from 'styled-components/native';

import { FavoritesIcon, HomeIcon, ProfileIcon } from "@/icons";

export default function TabLayout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.icon.selected,
        tabBarInactiveTintColor: theme.colors.text.secondary,
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: 700,
          lineHeight: 14,
          fontFamily: "Epilogue_500Medium",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorites",
          tabBarIcon: ({ color }) => <FavoritesIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <ProfileIcon color={color} />,
        }}
      />
    </Tabs>
  );
}

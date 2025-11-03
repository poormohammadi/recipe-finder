import {
  Epilogue_400Regular,
  Epilogue_500Medium,
  Epilogue_600SemiBold,
  Epilogue_700Bold,
  Epilogue_800ExtraBold,
  useFonts,
} from "@expo-google-fonts/epilogue";

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { ThemeProvider } from "styled-components/native";

import { lightTheme } from "@/theme/theme";
import { ActivityIndicator } from "react-native";
import { FavoritesProvider } from "../contexts";

export default function RootLayout() {
  const theme = lightTheme;

  const [fontsLoaded] = useFonts({
    Epilogue_400Regular,
    Epilogue_700Bold,
    Epilogue_800ExtraBold,
    Epilogue_600SemiBold,
    Epilogue_500Medium,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#4CAF50" />;
  }

  return (
    <ThemeProvider theme={theme}>
      <FavoritesProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="meal/[id]" options={{ headerShown: false }} />
        </Stack>
        <StatusBar style="auto" />
      </FavoritesProvider>
    </ThemeProvider>
  );
}

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { UserProvider } from '@/context/UserContext';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <UserProvider>
       <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="selection/selection"  options={{ headerShown: false }} />
        <Stack.Screen name="grade2/introduction"  options={{ headerShown: false }} />
        {/* PAGE NOT FOUND */}
        <Stack.Screen name="+not-found" />
      </Stack>
    </UserProvider>
      
  );
}

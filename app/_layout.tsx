import { UserProvider } from '@/context/UserContext';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <UserProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="selection/selection" options={{ headerShown: false }} />
        <Stack.Screen name="introduction/introduction" options={{ headerShown: false }} />
        <Stack.Screen name="content/content" options={{ headerShown: false }} />
        <Stack.Screen name="library/library" options={{ headerShown: false }} />
        <Stack.Screen name="test/test" options={{ headerShown: false }} />
        <Stack.Screen name="lessons/objectives/objectives" options={{ headerShown: false }} />
        {/* COUNTING NUMBERS */}
        <Stack.Screen name="count/count" options={{ headerShown: false }} />
        {/* LESSONS */}
        {/* ADDITION */}
        <Stack.Screen name="lessons/addition/addition" options={{ headerShown: false }} />
        {/* SUBTRACTION */}
        <Stack.Screen name="lessons/subtraction/subtraction" options={{ headerShown: false }} />
        {/* MULTIPLICATION */}
        <Stack.Screen name="lessons/multiplication/multiplication" options={{ headerShown: false }} />
        {/* DIVISION */}
        <Stack.Screen name="lessons/division/division" options={{ headerShown: false }} />
        {/* not found */}
        <Stack.Screen name="+not-found" />
      </Stack>
    </UserProvider>
  );
}

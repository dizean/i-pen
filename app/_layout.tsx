import { UserProvider } from '@/context/UserContext';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <UserProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="selection/selection" options={{ headerShown: false }} />
        {/* COUNTING NUMBERS */}
        <Stack.Screen name="count/count" options={{ headerShown: false }} />
        {/* LESSONS */}
        {/* ADDITION */}
        <Stack.Screen name="lessons/addition/addition" options={{ headerShown: false }} />
        <Stack.Screen name="lessons/addition/introduction/introduction" options={{ headerShown: false }} />
        <Stack.Screen name="lessons/addition/parts/parts" options={{ headerShown: false }} />
        <Stack.Screen name="lessons/addition/examples/examples" options={{ headerShown: false }} />
        <Stack.Screen name="lessons/addition/methods/methods" options={{ headerShown: false }} />
        {/* GRADE 2 */}
        <Stack.Screen name="grade2/content/content" options={{ headerShown: false }} />
        <Stack.Screen name="grade2/pretest/pretest" options={{ headerShown: false }} />
        <Stack.Screen name="grade2/introduction" options={{ headerShown: false }} />
        <Stack.Screen name="grade2/lesson1/objectives" options={{ headerShown: false }} />
        <Stack.Screen name="grade2/lesson2/objectives" options={{ headerShown: false }} />
        <Stack.Screen name="grade2/posttest/posttest" options={{ headerShown: false }} />
        {/* GRADE 3 */}
        <Stack.Screen name="grade3/content/content" options={{ headerShown: false }} />
        <Stack.Screen name="grade3/pretest/pretest" options={{ headerShown: false }} />
        <Stack.Screen name="grade3/introduction" options={{ headerShown: false }} />
        <Stack.Screen name="grade3/lesson1/objectives" options={{ headerShown: false }} />
        <Stack.Screen name="grade3/lesson2/objectives" options={{ headerShown: false }} />
        <Stack.Screen name="grade3/lesson3/objectives" options={{ headerShown: false }} />
        <Stack.Screen name="grade3/posttest/posttest" options={{ headerShown: false }} />
        {/* not found */}
        <Stack.Screen name="+not-found" />
      </Stack>
    </UserProvider>
  );
}

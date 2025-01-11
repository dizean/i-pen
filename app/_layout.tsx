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
        <Stack.Screen name="lessons/addition/objectives/objectives" options={{ headerShown: false }} />
        <Stack.Screen name="lessons/addition/introduction/introduction" options={{ headerShown: false }} />
        <Stack.Screen name="lessons/addition/parts/parts" options={{ headerShown: false }} />
        <Stack.Screen name="lessons/addition/examples/examples" options={{ headerShown: false }} />
        <Stack.Screen name="lessons/addition/methods/methods" options={{ headerShown: false }} />
        {/* SUBTRACTION */}
        <Stack.Screen name="lessons/subtraction/subtraction" options={{ headerShown: false }} />
        <Stack.Screen name="lessons/subtraction/objectives/objectives" options={{ headerShown: false }} />
        {/* MULTIPLICATION */}
        <Stack.Screen name="lessons/multiplication/multiplication" options={{ headerShown: false }} />
        <Stack.Screen name="lessons/multiplication/objectives/objectives" options={{ headerShown: false }} />
        {/* DIVISION */}
        <Stack.Screen name="lessons/division/division" options={{ headerShown: false }} />
        <Stack.Screen name="lessons/division/objectives/objectives" options={{ headerShown: false }} />


        {/* GRADE 2 */}
        <Stack.Screen name="grade2/introduction" options={{ headerShown: false }} />
        <Stack.Screen name="grade2/content/content" options={{ headerShown: false }} />
        <Stack.Screen name="grade2/pretest/pretest" options={{ headerShown: false }} />
        <Stack.Screen name="grade2/posttest/posttest" options={{ headerShown: false }} />
        {/* GRADE 3 */}
        <Stack.Screen name="grade3/introduction" options={{ headerShown: false }} />
        <Stack.Screen name="grade3/content/content" options={{ headerShown: false }} />
        <Stack.Screen name="grade3/pretest/pretest" options={{ headerShown: false }} />
        <Stack.Screen name="grade3/posttest/posttest" options={{ headerShown: false }} />
        {/* GRADE 2 */}
        <Stack.Screen name="grade4/introduction" options={{ headerShown: false }} />
        <Stack.Screen name="grade4/content/content" options={{ headerShown: false }} />
        <Stack.Screen name="grade4/pretest/pretest" options={{ headerShown: false }} />
        <Stack.Screen name="grade4/posttest/posttest" options={{ headerShown: false }} />
        {/* GRADE 2 */}
        <Stack.Screen name="grade5/introduction" options={{ headerShown: false }} />
        <Stack.Screen name="grade5/content/content" options={{ headerShown: false }} />
        <Stack.Screen name="grade5/pretest/pretest" options={{ headerShown: false }} />
        <Stack.Screen name="grade5/posttest/posttest" options={{ headerShown: false }} />
        {/* GRADE 2 */}
        <Stack.Screen name="grade6/introduction" options={{ headerShown: false }} />
        <Stack.Screen name="grade6/content/content" options={{ headerShown: false }} />
        <Stack.Screen name="grade6/pretest/pretest" options={{ headerShown: false }} />
        <Stack.Screen name="grade6/posttest/posttest" options={{ headerShown: false }} />
        {/* not found */}
        <Stack.Screen name="+not-found" />
      </Stack>
    </UserProvider>
  );
}

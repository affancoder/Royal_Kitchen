import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
        contentStyle: {
          backgroundColor: "#000000",
        },
      }}
    >
      {/* Root */}
      <Stack.Screen name="index" />

      {/* Authentication */}
      <Stack.Screen name="auth/login" />
      <Stack.Screen name="auth/signup" />

      {/* Application Pages */}
      <Stack.Screen name="pages/homescreen" />
      <Stack.Screen name="pages/about"/>
      <Stack.Screen name="pages/services" />
      <Stack.Screen name="pages/menu" />
      <Stack.Screen name="pages/contact" />
      <Stack.Screen name="pages/profile" />
    </Stack>
  );
}

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ClerkProvider } from '@clerk/clerk-expo'
import { tokenCache } from "@/cache";


const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

if (!publishableKey) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

export default function RootLayout() {
  return <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>

    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
        <StatusBar style={"light"} />
        <Stack screenOptions={{ headerShown: false }} />
      </SafeAreaView></SafeAreaProvider>

  </ClerkProvider>
}



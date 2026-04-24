
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ClerkProvider } from '@clerk/clerk-expo'
import { tokenCache } from "@/cache";
import Initiallayout from "@/components/Initiallayout";


const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

if (!publishableKey) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

export default function RootLayout() {
  return <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      
        <Initiallayout />
      </SafeAreaView></SafeAreaProvider>

  </ClerkProvider>
}



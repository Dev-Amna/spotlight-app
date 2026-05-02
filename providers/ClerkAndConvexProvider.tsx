// // This provider connects Clerk (auth) with Convex (backend)
// and wraps the app so authenticated users can access backend data securely
import { tokenCache } from "@/cache"
import { ClerkLoaded, ClerkProvider, useAuth } from "@clerk/clerk-expo"
import { ConvexReactClient } from "convex/react"
import React from "react";
import { ConvexProviderWithClerk } from "convex/react-clerk";

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});
const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

if (!publishableKey) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

export default function ClerkAndConvexProvider({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        <ClerkLoaded>
          {children}
        </ClerkLoaded>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  )
}



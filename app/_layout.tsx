
import { StatusBar } from "expo-status-bar";

import Initiallayout from "@/components/Initiallayout";
import { usePathname } from "expo-router";
import { useEffect } from "react";
import ClerkAndConvexProvider from "@/providers/ClerkAndConvexProvider";
import { SafeAreaView } from "react-native-safe-area-context";


export default function RootLayout() {
  const pathname = usePathname();

  useEffect(() => {
    console.log("User in : ", pathname);

  }, [pathname])

  return(
   <ClerkAndConvexProvider>
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <StatusBar style={"light"} />
      <Initiallayout />
    </SafeAreaView>
  </ClerkAndConvexProvider>
  )
}



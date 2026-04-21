import * as SecureStore from "expo-secure-store"

import { TokenCache } from "@clerk/clerk-expo";
import { Platform } from "react-native";

const createTokenCache = (): TokenCache => {
    return {
        getToken: async (key: string) => {
            try {
                const items = await SecureStore.getItemAsync(key);
                if (items) {
                    console.log(`${key} was used  🔐 \n`);
                } else {
                    console.log("No values store under the key : " + key);
                }
                return items;
            } catch (error) {
                console.log("secure store get item error", error);
                await SecureStore.deleteItemAsync(key);
                return null;
            }
        },
        saveToken: (key: string, token: string) => {
            return SecureStore.setItemAsync(key, token);
        }
    }
}

// Secure Store is not supported on web
export const tokenCache = Platform.OS !== 'web' ? createTokenCache() : undefined;
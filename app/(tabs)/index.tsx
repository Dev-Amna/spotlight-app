import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useAuth } from '@clerk/clerk-expo'

export default function Home() {
  const { signOut } = useAuth();
  return (
    <View>
      <TouchableOpacity
        onPress={() => signOut()}
        style={{
          backgroundColor: "#ff4d4d",
          paddingVertical: 12,
          paddingHorizontal: 20,
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 16,
            fontWeight: "600",
          }}
        >
          Sign Out
        </Text>
      </TouchableOpacity>
    </View>
  )
}
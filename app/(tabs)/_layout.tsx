
import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import { COLORS } from '../constants/theme';
const TabsLayout = () => {
    return (
        <Tabs screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarActiveTintColor: COLORS.primary,
            tabBarInactiveTintColor: COLORS.grey,
            tabBarStyle: {
                backgroundColor: "black",
                borderTopWidth: 0,
                height: 40,
                position: "absolute",
                elevation: 0,
                paddingBottom: 0
            }
        }}
        >
            <Tabs.Screen name='index'
                options={{
                    tabBarIcon: ({ size, color }) => <Ionicons name="home" size={size} color={color} />
                }}
            />
            <Tabs.Screen name='bookmark'
                options={{
                    tabBarIcon: ({ size, color }) => <Ionicons name="bookmark" size={size} color={color} />
                }} />


            <Tabs.Screen name='create'
                options={{
                    tabBarIcon: ({ size }) => <Ionicons name="add-circle" size={size} color={COLORS.primary} />
                }}
            />

            <Tabs.Screen name='notification'
                options={{
                    tabBarIcon: ({ size, color }) => <Ionicons name="heart-sharp" size={size} color={color} />
                }} />

            <Tabs.Screen name='profile'
                options={{
                    tabBarIcon: ({ size, color }) => <Ionicons name="person-circle-sharp" size={size} color={color} />
                }}
            />
        </Tabs>
    )
}

export default TabsLayout
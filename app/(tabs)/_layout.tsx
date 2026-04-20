
import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
const TabsLayout = () => {
    return (
        <Tabs screenOptions={{
            tabBarShowLabel: false
        }}
        >
            <Tabs.Screen name='index'
                options={{
                    tabBarIcon: () => <Ionicons name="home" size={24} color="black" />
                }}
            />
            <Tabs.Screen name='bookmark'
                options={{
                    tabBarIcon: () => <Ionicons name="bookmark" size={24} color="black" />
                }} />


            <Tabs.Screen name='create'
                options={{
                    tabBarIcon: () => <Ionicons name="duplicate" size={24} color="black" />
                }}
            />

            <Tabs.Screen name='notification'
                options={{
                    tabBarIcon: () => <Ionicons name="heart-sharp" size={24} color="black" />
                }} />

            <Tabs.Screen name='profile'
                options={{
                    tabBarIcon: () => <Ionicons name="person-circle-sharp" size={24} color="black" />
                }}
            />
        </Tabs>
    )
}

export default TabsLayout
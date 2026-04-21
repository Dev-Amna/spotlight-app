import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../styles/auth.styles'
import Ionicons from '@expo/vector-icons/Ionicons'
import { COLORS } from '../constants/theme'

export default function logic() {
    return (
        <View style={styles.container}>

            {/* BRAND SECTION */}
            <View style={styles.brandSection}>
                <View style={styles.logoContainer}>
                    <Ionicons name='leaf' size={32} color={COLORS.primary} />

                </View>
                <Text style={styles.appName}>spotlight</Text>
                <Text style={styles.tagline}>don't miss anything</Text>

                {/* ILLUSTRATUON */}
                <View style={styles.illustrationContainer}>
                    <Image
                        source={require("../../assets/images/auth-bg-2.png")}
                        style={styles.illustration}
                        resizeMode='cover'
                    />
                </View>

                {/* LOGIN SECTION */}
                <View style={styles.loginSection}>
                    <TouchableOpacity style={styles.googleButton} onPress={() => console.log("Con with google ")} activeOpacity={0.9}>
                        <View style={styles.googleIconContainer}>
                            <Ionicons name='logo-google' size={20} color={COLORS.surface} />
                        </View>
                        <Text style={styles.googleButtonText}>Continue with Google</Text>
                    </TouchableOpacity>

                    <Text style={styles.termsText}>
                        By continuing, you agree to out Terms and Privacy  Policy
                    </Text>
                </View>
            </View>
        </View>
    )
}
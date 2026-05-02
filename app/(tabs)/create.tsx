import { View, Text, TouchableOpacity, KeyboardAvoidingView, Platform, ActivityIndicator, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router'
import { useUser } from '@clerk/clerk-expo';
import { styles } from '@/styles/create.styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { COLORS } from '@/constants/theme';
import * as ImagePicker from "expo-image-picker"
const Create = () => {
  const router = useRouter();
  const { user } = useUser();

  const [caption, setCaption] = useState("");
  const [seletedImage, setSeletedImage] = useState<string | null>(null);
  const [isSharing, setIsSharing] = useState(false);


  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: "images",
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8
    });
    if (!result.canceled) setSeletedImage(result.assets[0].uri);
    console.log(result)
  }

  const handleShare = () => {

  }

  if (!seletedImage) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name='arrow-back' size={28} color={COLORS.primary} />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>New Post</Text>
          <View style={{ width: 28 }} />
        </View>


        <TouchableOpacity style={styles.emptyImageContainer} onPress={pickImage}>
          <Ionicons name='image-outline' size={48} color={COLORS.primary} />
          <Text style={styles.emptyImageText}>Tap to select an image </Text>
        </TouchableOpacity>
      </View>

    )
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === "ios" ? 20 : 0}>

      <View style={styles.contentContainer}>
        {/* HEADER*/}
        <View style={styles.header}>
          <TouchableOpacity
            disabled={isSharing}
            onPress={() => {
              setSeletedImage(null);
              setCaption("")
            }}>
            <Ionicons name='close-outline' size={38} color={isSharing ? COLORS.grey : COLORS.white} />

          </TouchableOpacity>

          <Text style={styles.headerTitle}>New Post</Text>
          <TouchableOpacity style={[styles.shareButton, isSharing && styles.shareButtonDisabled]}
            disabled={isSharing || !isSharing}
            onPress={handleShare}>
            {true ? (
              <ActivityIndicator size="small" color="green" />
            ) :
              <Text style={styles.shareText}>Share</Text>}
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.container}>

        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Create
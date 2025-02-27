import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert, TextInput, StyleSheet, ImageBackground, Image } from "react-native";
import { useUser } from "@/context/UserContext";
import styles from "./styles";
import { useRouter } from "expo-router";
import { useRoute } from "@react-navigation/native";
interface RouteParams {
  grade?: string; 
}
export default function Introduction() {
  const router = useRouter()
  const route = useRoute() 
  const {grade} = route.params as RouteParams || {}
  const { setUser } = useUser();
  const [nameInput, setNameInput] = useState("");

  const handleSetUsername = () => {
    if (nameInput.trim() === "") {
      Alert.alert("Error", "Please enter your name.");
      return;
    }
    setUser(nameInput.trim(), grade ?? null);
    router.push('/grade3/content/content')
  };

  return (
    <ImageBackground style={styles.container} source={require('../../assets/images/bgstart.png')}>
      <View style={styles.wrapper}>
        <Image style={styles.image} source={require('../../assets/images/calculator.png')}/>
        <Text style={styles.title}> Before we get started,</Text>
        <Text style={styles.subtitle}> Enter your name.</Text>
        <TextInput
          style={styles.input}
          placeholder="Type your name"
          value={nameInput}
          onChangeText={(text) => setNameInput(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleSetUsername} disabled={!nameInput}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
  </ImageBackground>
  );
}

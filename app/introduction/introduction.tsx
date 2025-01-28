import React, { useEffect, useRef, useState } from "react";
import {
  View,
  TouchableOpacity,
  Alert,
  ImageBackground,
  Animated,
  Easing,
} from "react-native";
import { useUser } from "@/context/UserContext";
import styles from "./styles";
import { useRouter } from "expo-router";
import { TextNormal, TextLight, TextInput } from "@/context/FontContent";
export default function PreTest() {
  const router = useRouter();
  const { setUser, setPostTestScore, setPreTestScore, grade } = useUser();
  const [nameInput, setNameInput] = useState("");

  const handleSetUsername = () => {
    if (nameInput.trim() === "") {
      Alert.alert("Error", "Please enter your name.");
      return;
    }
    setUser(nameInput.trim(), grade);
    router.push("/test/test");
  };
  const rotateValue = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 7000, 
        easing: Easing.linear, 
        useNativeDriver: true,
      })
    ).start();
  }, []);
  const rotate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <ImageBackground
      style={styles.container}
      // source={require("../../assets/images/bgyellowcut.png")}
    >
      <View style={styles.wrapper}>
        <Animated.Image
          style={[styles.image, { transform: [{ rotate }] }]} // Using Animated.Image
          source={require("../../assets/images/calculator.png")}
        />
        <TextNormal style={styles.subtitle}>Enter your name</TextNormal>
        <TextInput
          style={styles.input}
          placeholder="Type your name"
          value={nameInput}
          onChangeText={setNameInput}
        />
        <TouchableOpacity
          style={[styles.button, !nameInput && styles.disabledButton]}
          onPress={handleSetUsername}
          disabled={!nameInput}
        >
          <TextNormal
            style={[styles.buttonText, !nameInput && styles.disabledButtonText]}
          >
            Next
          </TextNormal>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

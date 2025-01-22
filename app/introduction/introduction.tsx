import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  TextInput,
  ImageBackground,
  Image,
  Animated,
  Easing,
} from "react-native";
import { useUser } from "@/context/UserContext";
import styles from "./styles";
import { useRouter } from "expo-router";

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
    setPostTestScore(0);
    setPreTestScore(0);
    switch (grade) {
          case "2":
            router.push("/grade2/pretest/pretest");
            break;
          case "3":
            router.push("/grade3/pretest/pretest");
            break;
          case "4":
            router.push("/grade4/pretest/pretest");
            break;
          case "5":
            router.push("/grade5/pretest/pretest");
            break;
          case "6":
            router.push("/grade6/pretest/pretest");
            break;
          default:
            Alert.alert("Error", "Grade not set.");
            break;
      }
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
      source={require("../../assets/images/bgyellowcut.png")}
    >
      <View style={styles.wrapper}>
        <Animated.Image
          style={[styles.image, { transform: [{ rotate }] }]} // Using Animated.Image
          source={require("../../assets/images/calculator.png")}
        />
        <Text style={styles.subtitle}>Enter your name</Text>
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
          <Text
            style={[styles.buttonText, !nameInput && styles.disabledButtonText]}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

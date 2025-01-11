import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert, TextInput, StyleSheet } from "react-native";
import { useUser } from "@/context/UserContext";
import styles from "./styles";
import { useRouter } from "expo-router";
import { useRoute } from "@react-navigation/native";
export default function Objectives() {
  const router = useRouter()
  const route = useRoute() 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lesson 4 : Division</Text>
      <Text style={styles.title}>Objectives</Text>
      <Text>
      At the end of this lesson, you should be able to:
      Develop skills to perform division of numbers
      using various methods and strategies with the
      aid of computer-assisted tools.
      </Text>
    </View>
  );
}

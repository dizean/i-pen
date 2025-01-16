import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert, TextInput, StyleSheet } from "react-native";
import { useUser } from "@/context/UserContext";
import styles from "../styles";
import { useRouter } from "expo-router";
import { useRoute } from "@react-navigation/native";
import CountNumbers from "@/app/count/count";
interface RouteParams {
  grade?: string; 
}
export default function Objectives() {
  const router = useRouter()
  const route = useRoute() 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lesson 1 : Addition</Text>
      <Text style={styles.subtitle}>Objectives</Text>
      <Text style={styles.text}>
      At the end of this lesson, you should be able to:
      </Text>
      <Text style={styles.text}>
      Develop skills to perform addition of numbers
      using various methods and strategies with the
      aid of computer-assisted tools.
      </Text>
    </View>
  );
}

import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert, TextInput, StyleSheet } from "react-native";
import { useUser } from "@/context/UserContext";
import styles from "../styles";
import { useRouter } from "expo-router";
import { useRoute } from "@react-navigation/native";
interface RouteParams {
  grade?: string; 
}
export default function Lesson2() {
  const router = useRouter()
  const route = useRoute() 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lesson 2 : Subtraction</Text>
    </View>
  );
}

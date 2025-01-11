import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import styles from "../styles";

export default function Methods() {
  const [currentSection, setCurrentSection] = useState(1);
  const router = useRouter();

  const handleNext = () => {
    if (currentSection < 3) {
      setCurrentSection(currentSection + 1);
    }
  };

  const handlePrev = () => {
    if (currentSection > 1) {
      setCurrentSection(currentSection - 1);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.title}>Methodss of Numbers</Text>
      
    </ScrollView>
  );
}
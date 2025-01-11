import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import styles from "./styles";
import Objectives from "./objectives/objectives";

export default function Division() {
  const [currentSection, setCurrentSection] = useState(1);
  const [isPracticeComplete, setIsPracticeComplete] = useState(false); 
  const router = useRouter();

  const handleNext = () => {
    if (currentSection < 4) {
      setCurrentSection(currentSection + 1);
    }
  };

  const handlePrev = () => {
    if (currentSection > 1) {
      setCurrentSection(currentSection - 1);
    }
  };

  const handlePracticeComplete = () => {
    setIsPracticeComplete(true); 
    setCurrentSection(4); 
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.title}>Division of Numbers</Text>
      {currentSection === 1 && (
        <Objectives/>
      )}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handlePrev} disabled={currentSection === 1}>
          <Text style={styles.buttonText}>Prev</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={handleNext}
          disabled={currentSection === 4 || (currentSection === 3 && !isPracticeComplete)}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import styles from "./styles";
import AdditionPractice from "./examples/examples";
import Methods from "./methods/methods";
import Introduction from "./introduction/introduction";
import Parts from "./parts/parts";
import Objectives from "./objectives/objectives";

export default function Addition() {
  const [currentSection, setCurrentSection] = useState(1);
  const [isPracticeComplete, setIsPracticeComplete] = useState(false); 
  const router = useRouter();

  const handleNext = () => {
    if (currentSection < 5) {
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
      <Text style={styles.title}>ADDITION of Numbers</Text>
      {currentSection === 1 && (
        <Objectives/>
      )}
      {currentSection === 2 && (
        <Introduction/>
      )}
      {currentSection === 3 && (
        <Parts/>
      )}
      {currentSection === 4 && (
        <>
          <AdditionPractice onComplete={handlePracticeComplete} />
        </>
      )}
      {currentSection === 5 && (
        <>
          <Methods />
        </>
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

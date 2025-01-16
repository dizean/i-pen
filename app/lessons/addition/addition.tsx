import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import styles from "./styles";
import AdditionPractice from "./examples/examples";
import Introduction from "./introduction/introduction";
import Parts from "./parts/parts";
import Objectives from "./objectives/objectives";
import WoRegroup from "./methods/woregroup/woregroup";
import WRegroup from "./methods/wregroup/wregroup";
import LineAdd from "./methods/lineadd/lineadd";
import Properties from "./properties/properties";
import WordProblem from "./wordproblems/wordproblems";
import LineAdditionPractice from "./practice/practice";

export default function Addition() {
  const [currentSection, setCurrentSection] = useState(1);
  const [isPracticeComplete, setIsPracticeComplete] = useState(false);
  const router = useRouter();

  const handleNext = () => {
    if (currentSection < 10) {
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
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff8e1" }}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {currentSection === 1 && <Objectives />}
        {currentSection != 1 &&
         <Text  style={styles.title}>Addition {'\n'}of Numbers</Text>
        }
       
        {currentSection === 2 && <Introduction />}
        {currentSection === 3 && <Parts />}
        {currentSection === 4 &&
        <Text style={styles.subtitle}>Addition Practice</Text>
        }
        
        {currentSection === 4 && (
          <AdditionPractice onComplete={handlePracticeComplete} />
        )}
        {currentSection === 5 && <WoRegroup />}
        {currentSection === 6 && <WRegroup />}
        {currentSection === 7 && <LineAdd />}
        {currentSection === 8 && <Properties />}
        {currentSection === 9 && <WordProblem />}
        {currentSection === 10 &&
        <Text style={styles.subtitle}>Addition Practice</Text>
        }
        {currentSection === 10 && <LineAdditionPractice />}
      </ScrollView>
      <View style={styles.fixedButtonContainer}>
        <TouchableOpacity style={styles.button} onPress={handlePrev} disabled={currentSection === 1}>
          <Text style={styles.buttonText}>Prev</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={handleNext}
          disabled={
            currentSection === 4 && !isPracticeComplete // Allow only if practice is complete
          }
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


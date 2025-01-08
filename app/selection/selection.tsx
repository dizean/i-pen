import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useRouter } from "expo-router";

export default function Selection() {
  const router = useRouter();

  const handleSelection = (grade: string) => {
    router.push(`/grade2/introduction`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Grade</Text>
      <View style={styles.optionsContainer}>
        {["2", "3", "4", "5", "6"].map((grade) => (
          <TouchableOpacity
            key={grade}
            style={styles.optionButton}
            onPress={() => handleSelection(grade)}
          >
            <Text style={styles.optionText}>Grade {grade}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

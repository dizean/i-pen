import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router"; // Importing useRouter for navigation
import styles from "./styles";
export default function CountingGrid() {
  const [visibleNumbers, setVisibleNumbers] = useState<number[]>([]); // Track visible numbers
  const numbers = Array.from({ length: 10 }, (_, i) => i + 1); // Numbers 1 to 10
  const router = useRouter(); // Hook for navigation

  const handleShowNextNumber = () => {
    if (visibleNumbers.length < numbers.length) {
      // Add next number to visible numbers
      setVisibleNumbers((prev) => [...prev, numbers[prev.length]]);
    }
  };

  // Effect to navigate to the next screen after all numbers are shown
  useEffect(() => {
    if (visibleNumbers.length === numbers.length) {
      router.push('/lessons/addition/addition');
    }
  }, [visibleNumbers]); // Dependency on visibleNumbers

  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {numbers.map((number, index) => (
          <View key={index} style={styles.cell}>
            <Text style={styles.number}>
              {visibleNumbers.includes(number) ? number : ""}
            </Text>
          </View>
        ))}
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={handleShowNextNumber}
        disabled={visibleNumbers.length >= numbers.length}
      >
        <Text style={styles.buttonText}>
          {visibleNumbers.length >= numbers.length
            ? "All Numbers Shown"
            : "Show Next Number"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

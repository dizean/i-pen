import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router"; 
import styles from "./styles";
export default function CountingGrid() {
  const [visibleNumbers, setVisibleNumbers] = useState<number[]>([]); 
  const numbers = Array.from({ length: 10 }, (_, i) => i + 1); 
  const router = useRouter(); 
  const handleShowNextNumber = () => {
    if (visibleNumbers.length < numbers.length) {
      setVisibleNumbers((prev) => [...prev, numbers[prev.length]]);
    }
  };

  useEffect(() => {
    if (visibleNumbers.length === numbers.length) {
      router.push("/lessons/addition/addition");
    }
  }, [visibleNumbers]); 

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

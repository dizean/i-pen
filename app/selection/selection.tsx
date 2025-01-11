import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import styles from "./styles";
import { useRouter } from "expo-router";

export default function Selection() {
  const router = useRouter();

  const handleSelection = (grade: string) => {
    router.push({pathname:`/grade2/introduction`, params:{grade}});
  };

  return (
    <ImageBackground style={styles.container} source={require('../../assets/images/bgstart.png')}>
      <View style={{ 
        width: '95%', 
        backgroundColor: "rgba(114, 114, 110, 0.3)", 
        borderRadius: 10,
        paddingVertical: 20,
        alignSelf: 'center',
      }}>
      <Text style={styles.title}>What Grade Are You?</Text>
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
    </ImageBackground>
  );
}

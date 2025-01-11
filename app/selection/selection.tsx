import React from "react";
import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import styles from "./styles";
import { useRouter } from "expo-router";

export default function Selection() {
  const router = useRouter();
  const navigateToGrade2 = () => router.push("/grade2/introduction");
  const navigateToGrade3 = () => router.push("/grade3/introduction");
  const navigateToGrade4 = () => router.push("/grade4/introduction");
  const navigateToGrade5 = () => router.push("/grade5/introduction");
  const navigateToGrade6 = () => router.push("/grade6/introduction");

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
          <TouchableOpacity
            style={styles.optionButton}
            onPress={navigateToGrade2}
          >
            <Text style={styles.optionText}>Grade 2</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.optionButton}
            onPress={navigateToGrade3}
          >
            <Text style={styles.optionText}>Grade 3</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.optionButton}
            onPress={navigateToGrade4}
          >
            <Text style={styles.optionText}>Grade 4</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.optionButton}
            onPress={navigateToGrade5}
          >
            <Text style={styles.optionText}>Grade 5</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.optionButton}
            onPress={navigateToGrade6}
          >
            <Text style={styles.optionText}>Grade 6</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

  import React from "react";
  import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
  import { useRouter } from "expo-router";
  import { useUser } from "@/context/UserContext";
  import styles from "./styles";
  export default function ContentPage() {
    const router = useRouter();
    const { username, preTestScore, postTestScore } = useUser();
    return (
      <ImageBackground style={styles.container} source={require('../../../assets/images/bgstart.png')}>
        <View style={styles.headerSection}>
          <Text style={styles.headerText}>Grade: 4</Text>
          <Text style={styles.headerTextName}>{username}</Text>
        </View>
        <View style={styles.scoreSection}>
          <View style={styles.scoreCard}>
          <Text style={styles.scoreTitle}>Pre-test{"\n"}Score</Text>
            <Text style={styles.scoreValue}>{preTestScore || 0}</Text>
          </View>
          <View style={styles.scoreCard}>
            <Text style={styles.scoreTitle}>Post-test{"\n"}Score</Text>
            <Text style={styles.scoreValue}>{postTestScore || 0}</Text>
          </View>
        </View>
        {/* Grid Layout for Buttons */}
        <View style={styles.gridContainer}>
          <TouchableOpacity
            style={[styles.gridItem, preTestScore !== 0 && preTestScore !== null && styles.disabledButton]} 
            onPress={() => router.push("/grade4/pretest/pretest")}
            disabled={preTestScore !== 0 && preTestScore !== null} 
          >
            <Text style={styles.buttonText}>Pre Test</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.gridItem}
            onPress={() => router.push("/lessons/addition/addition")}
            disabled={!preTestScore}
          >
            <Text style={styles.buttonText}>Lesson 1</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.gridItem}
            onPress={() => router.push("/lessons/subtraction/subtraction")}
            disabled={!preTestScore}
          >
            <Text style={styles.buttonText}>Lesson 2</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.gridItem}
            onPress={() => router.push("/lessons/multiplication/multiplication")}
            disabled={!preTestScore}
          >
            <Text style={styles.buttonText}>Lesson 3</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.gridItem}
            onPress={() => router.push("/lessons/division/division")}
            disabled={!preTestScore}
          >
            <Text style={styles.buttonText}>Lesson 4</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.gridItem}
            onPress={() => router.push("/grade4/posttest/posttest")}
            disabled={!preTestScore}
          >
            <Text style={styles.buttonText}>Post Test</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }


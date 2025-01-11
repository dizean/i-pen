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
          <Text style={styles.headerText}>Grade: 3</Text>
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
            style={styles.gridItem}
            onPress={() => router.push("/grade2/pretest/pretest")}
          >
            <Text style={styles.buttonText}>Pre Test</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.gridItem}
            onPress={() => router.push("/grade2/lesson1/objectives")}
            disabled={!preTestScore}
          >
            <Text style={styles.buttonText}>Lesson 1</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.gridItem}
            onPress={() => router.push("/grade2/lesson2/objectives")}
            disabled={!preTestScore}
          >
            <Text style={styles.buttonText}>Lesson 2</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.gridItem}
            onPress={() => router.push("/grade2/lesson2/objectives")}
            disabled={!preTestScore}
          >
            <Text style={styles.buttonText}>Lesson 3</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.gridItem}
            onPress={() => router.push("/grade2/posttest/posttest")}
            disabled={!preTestScore}
          >
            <Text style={styles.buttonText}>Post Test</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }


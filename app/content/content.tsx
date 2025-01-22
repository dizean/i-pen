import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import { useUser } from "@/context/UserContext";
import styles from "./styles";

export default function ContentPage() {
  const router = useRouter();
  const { username, grade, preTestScore, postTestScore } = useUser();
  const takePostTest = () => {
    switch (grade) {
      case "2":
        router.push("/grade2/posttest/posttest");
        break;
      case "3":
        router.push("/grade3/posttest/posttest");
        break;
      case "4":
        router.push("/grade4/posttest/posttest");
        break;
      case "5":
        router.push("/grade5/posttest/posttest");
        break;
      case "6":
        router.push("/grade6/posttest/posttest");
        break;
      default:
        Alert.alert("Error", "Grade not set.");
        break;
    }
  };

  return (
    <ImageBackground
      style={styles.container}
      source={require("../../assets/images/bgstart.png")}
    >
      <View style={styles.headerSection}>
        <Text style={styles.headerText}>Grade: {grade}</Text>
        <Text style={styles.headerTextName}>Student Name : {username}</Text>
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
      <View style={styles.gridContainer}>
        {(grade ?? "") >= "2" && (
          <TouchableOpacity
            style={styles.gridItem}
            onPress={() => router.push("/lessons/addition/addition")}
            disabled={!preTestScore}
          >
            <Text style={styles.buttonText}>Lesson 1</Text>
          </TouchableOpacity>
        )}

        {(grade ?? "") >= "2" && (
          <TouchableOpacity
            style={styles.gridItem}
            onPress={() => router.push("/lessons/subtraction/subtraction")}
            disabled={!preTestScore}
          >
            <Text style={styles.buttonText}>Lesson 2</Text>
          </TouchableOpacity>
        )}

        {(grade ?? "") >= "3" && (
          <TouchableOpacity
            style={styles.gridItem}
            onPress={() =>
              router.push("/lessons/multiplication/multiplication")
            }
            disabled={!preTestScore}
          >
            <Text style={styles.buttonText}>Lesson 3</Text>
          </TouchableOpacity>
        )}

        {(grade ?? "") >= "4" && (
          <TouchableOpacity
            style={styles.gridItem}
            onPress={() => router.push("/lessons/division/division")}
            disabled={!preTestScore}
          >
            <Text style={styles.buttonText}>Lesson 4</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={styles.gridItem}
          onPress={takePostTest}
          disabled={!preTestScore}
        >
          <Text style={styles.buttonText}>Post Test</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

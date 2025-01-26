import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { Image } from "expo-image";
import * as Speech from "expo-speech";
import styles from "./styles";
import { useUser } from "@/context/UserContext";

export default function App() {
  const route = useRouter();
  const [done, setDone] = useState(true);
  const speak = () => {
    const welcomeMessage =
      "Welcome to i-Pen! Enjoy your interactive learning experience. What are you waiting for? Let’s start learning!";
    const options = {
      pitch: 1.8,
      rate: 0.7,
      volume: 1.0,
      onDone: () => setDone(true),
    };
    Speech.speak(welcomeMessage, options);
  };

  const stopSpeaking = () => {
    Speech.stop();
    setDone(true);
  };
const { setUser} =
    useUser();
  
  useEffect(() => {
    // speak();
  }, []);

  return (
    <ImageBackground style={styles.background}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.view}>
          <Text style={styles.title}>
            <Text style={styles.titleHighlight}>i</Text>-Pen
          </Text>
          <Text style={styles.text}>Interactive Presentation for</Text>
          <Text style={styles.text}>Enhancing Numeracy</Text>
          <Image
            source={require("../assets/images/math.gif")}
            contentFit="contain"
            transition={1000}
            style={styles.math}
          />
        </View>
        <View style={styles.space}>
          <View style={styles.images}>
            <Image
              source={require("../assets/images/girlwave.gif")}
              style={styles.girl}
              contentFit="contain"
              transition={1000}
            />
            <Image
              source={require("../assets/images/boywave.gif")}
              style={styles.boy}
              contentFit="contain"
              transition={1000}
            />
          </View>
          <TouchableOpacity
            style={[
              styles.button,
              !done && { backgroundColor: "gray" },
            ]}
            disabled={!done} 
            onPress={() => {
              route.push("/content/content");
              stopSpeaking();
              setUser('Charles Denver Ean Torres', '3')
            }}
          >
            <Text style={styles.buttonText}>Start Learning</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

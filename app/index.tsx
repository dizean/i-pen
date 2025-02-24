import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  SafeAreaView,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import { Image } from "expo-image";
import * as Speech from "expo-speech";
import styles from "./styles";
import { useFonts } from "expo-font";
import { Text } from "@/context/FontContent";

export default function App() {
  const [fontsLoaded] = useFonts({
    Font: require("../assets/fonts/mouse-memoirs.regular.ttf"),
  });

  const route = useRouter();
  const [done, setDone] = useState(false);

  const speak = () => {
    const welcomeMessage =
      "Welcome to i-Pen! Enjoy your interactive learning experience. What are you waiting for? Let’s start learning!";
    const options = {
      voice: "en-us-x-iol-local",
      rate: 0.9,
      onDone: () => setDone(true),
    };
    Speech.speak(welcomeMessage, options);
  };

  const stopSpeaking = () => {
    Speech.stop();
    setDone(true);
  };

  // Ensure fonts are loaded before running useEffect
  useEffect(() => {
    if (fontsLoaded) {
      speak();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={styles.background}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.view}>
          <Image
            source={require("../assets/images/ipenlogo2.png")}
            contentFit="contain"
            transition={1000}
            style={styles.logo}
          />
          <Text style={styles.text}>Interactive Program for Enhancing Numeracy</Text>
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
            style={[styles.button, !done && { backgroundColor: "gray" }]}
            disabled={!done}
            onPress={() => {
              route.push("/selection/selection");
              stopSpeaking();
            }}
          >
            <Text style={styles.buttonText}>Start Learning</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

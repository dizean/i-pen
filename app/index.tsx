import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { useRouter } from "expo-router";
import { Image } from "expo-image";
import * as Speech from "expo-speech";
import styles from "./styles";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    Font: require("../assets/fonts/mouse-memoirs.regular.ttf"),
  });
useEffect(() => {
  }, [fontsLoaded]);
  useEffect(() => {
    speak();
  }, []);
  const route = useRouter();
  const [done, setDone] = useState(true);
  const speak = () => {
    const welcomeMessage =
      "Welcome to i-Pen! Enjoy your interactive learning experience. What are you waiting for? Let’s start learning!";
    const options = {
     voice: 'en-us-x-iol-local',
     rate: .9,
      onDone: () => setDone(true),
    };
    Speech.speak(welcomeMessage, options);
  };
// en-us-x-tpf-local,en-us-x-iob-local,en-us-x-tpd-network,en-us-x-tpc-network,en-us-x-iob-network
// en-us-x-iol-network,en-us-x-iom-network,en-us-x-iol-local
  const stopSpeaking = () => {
    Speech.stop();
    setDone(true);
  };
  return (
    <View style={styles.background}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.view}>
        <Image
            source={require("../assets/images/ipenlogo2.png")}
            contentFit="contain"
            transition={1000}
            style={styles.math}
          />
          {/* <Text style={styles.title}>
            <Text style={styles.titleHighlight}>i</Text>-Pen
          </Text> */}
          <Text style={styles.text}>Interactive Program for Enhancing Numeracy</Text>
          {/* <Text style={styles.text}>Enhancing Numeracy</Text> */}
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

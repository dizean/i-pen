import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  SafeAreaView,
  View,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { Image } from "expo-image";
import * as Speech from "expo-speech";
import styles from "./styles";
import { TextBold, TextNormal } from "@/context/FontContent";
import { useFonts } from "expo-font";

export default function App() {
  
const [fontsLoaded] = useFonts({
  ComicSans: require("../assets/fonts/Ldfcomicsans-jj7l.ttf"),
  ComicSansLight: require("../assets/fonts/Ldfcomicsanslight-6dZo.ttf"),
  ComicSansMedium: require("../assets/fonts/Ldfcomicsanshairline-5PmL.ttf"), 
  ComicSansBold: require("../assets/fonts/Ldfcomicsansbold-zgma.ttf"), 
});
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
  useEffect(() => {
    speak();
  }, []);

  return (
    <View style={styles.background}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.view}>
        <Image
            source={require("../assets/images/ipenlogo.png")}
            contentFit="contain"
            transition={1000}
            style={styles.math}
          />
          {/* <Text style={styles.title}>
            <Text style={styles.titleHighlight}>i</Text>-Pen
          </Text> */}
          <TextBold style={styles.text}>Interactive Presentation for</TextBold>
          <TextBold style={styles.text}>Enhancing Numeracy</TextBold>
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
            <TextBold style={styles.buttonText}>Start Learning</TextBold>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

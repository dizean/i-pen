import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { View, TouchableOpacity, ImageBackground } from "react-native";
import * as Speech from "expo-speech";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import { RFPercentage } from "react-native-responsive-fontsize";
import styles from "../../styles";
import { Text } from "@/context/FontContent";
import { Image } from "expo-image";
const LineAdd = forwardRef((props, ref) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const router = useRouter();
  const content = [
    { id: 1, text: "Methods in Solving Addition Problems", styling: styles.subtitle },
    { id: 2, text: "Line Addition", styling: styles.sectiontititle },
    { id: 3, text: "Another way to add numbers is with the help of number lines.", styling: styles.text },
    { id: 4, text: "Let us understand the addition on a number line with the help of an example and the number line given below.", styling: styles.text },
    { id: 5, text: "Example:", styling: styles.text },
    { id: 6, text: "Add 10 and 3", styling: styles.text },
    { id: 7, text: "Solution:", styling: styles.text },
    { id: 8, text: "We start by marking the number 10 on the number line. When we add using a number line, we count by moving one number at a time to the right of the number.", styling: styles.text },
    { id: 9, text: "Since we are adding 10 and 3, we will move 3 steps to the right. This brings us to 13.", styling: styles.text },
    { id: 10, text: "Hence, 10 + 3 = 13.", styling: styles.text },
  ];
  useImperativeHandle(ref, () => ({
    toggleSpeech: () => handleSpeechToggle(),
    stopSpeech: () => stopSpeaking(),
  }));
  
  useEffect(() => {
    return () => {
      Speech.stop(); 
    };
  }, []);
  
  const handleSpeechToggle = () => {
    if (isSpeaking) {
      stopSpeaking();
    } else {
      startSpeaking();
    }
  };
const startSpeaking = () => {
    setIsSpeaking(true);
    setCurrentIndex(0); 
    Speech.speak(content[0].text, {voice: 'en-us-x-iol-local',
      rate: .9,
      volume: 1.0, onDone: () => speakNext(1) });
  };

  const stopSpeaking = () => {
    Speech.stop();
    setIsSpeaking(false);
    setCurrentIndex(-1); 
  };

  const speakNext = (index: number) => {
    if (index < content.length) {
      setCurrentIndex(index); 
      Speech.speak(content[index].text, {voice: 'en-us-x-iol-local',
        rate: .9,
        volume: 1.0, onDone: () => speakNext(index + 1) });
    } else {
      setIsSpeaking(false);
      setCurrentIndex(-1);
    }
  };
  return (
    <View>
      <ImageBackground
        style={styles.playnav}
      >
        <TouchableOpacity
  style={{ width: "50%", borderColor: "#38bfe7" }}
  onPress={() => {
    stopSpeaking(); // stop speech first
    router.push("/content/content"); // then navigate
  }}
>
  <Text style={{ fontSize: RFPercentage(5), color: "#38bfe7" }}>
    <AntDesign name="home" size={40} color="#38bfe7" />
  </Text>
</TouchableOpacity>


        <TouchableOpacity onPress={handleSpeechToggle}>
          {isSpeaking ? (
            <AntDesign name="pausecircle" size={40} color="#38bfe7" />
          ) : (
            <AntDesign name="play" size={40} color="#38bfe7" />
          )}
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.container}>
        {content.map((line, index) => (
          <Text
            key={index}
            style={[
              line.styling,
              index === currentIndex
                ? { marginBottom: 10, color: "#FFA500", }
                : { marginBottom: 10 },
            ]}
          >
            {line.text}
          </Text>
        ))}
        <Image source={require('../../../../../assets/images/lineadd.png')}
        style={[styles.image, {height:100}]}
      />
      </View>
    </View>
  );
});

export default LineAdd;

import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { View, TouchableOpacity, ImageBackground } from "react-native";
import * as Speech from "expo-speech";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import { RFPercentage } from "react-native-responsive-fontsize";
import styles from "../../styles";
import { Text } from "@/context/FontContent";
import { Image } from "expo-image";
const Line = forwardRef((props, ref) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const router = useRouter();
  const content = [
    { id: 1, text: "Methods in Solving Addition Problems", styling: styles.subtitle },
    { id: 2, text: "Line Subtraction", styling: styles.sectiontititle },
    { id: 3, text: "A number line is a visual aid that helps us understand subtraction because it allows us to jump backward and forward on each number.", styling: styles.text },
    { id: 4, text: "To understand how this works, let us explore subtraction using a number line.", styling: styles.text },
    { id: 5, text: "Example:", styling: styles.text },
    { id: 6, text: "Let us subtract 4 from 9 using a number line.", styling: styles.text },
    { id: 7, text: "Solution:", styling: styles.text },
    { id: 8, text: "We will start by marking the number 9 on the number line.", styling: styles.text },
    { id: 9, text: "When we subtract using a number line, we count by moving one number at a time towards the left-hand side.", styling: styles.text },
    { id: 10, text: "Since we are subtracting 4 from 9, we will move 4 times to the left.", styling: styles.text },
    { id: 11, text: "The number on which you land after 4 backward jumps, is the answer. Thus, 9 minus 4 = 5.", styling: styles.text },
    { id: 12, text: "Thus, 9 minus 4 = 5.", styling: styles.text },
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
    Speech.speak(content[0].text, { onDone: () => speakNext(1) });
  };

  const stopSpeaking = () => {
    Speech.stop();
    setIsSpeaking(false);
    setCurrentIndex(-1); 
  };

  const speakNext = (index: number) => {
    if (index < content.length) {
      setCurrentIndex(index); 
      Speech.speak(content[index].text, { onDone: () => speakNext(index + 1) });
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
        <Image source={require('../../../../../assets/images/linesub.png')}
        style={[styles.image, {height:100}]}
      />
      </View>
    </View>
  );
});

export default Line;

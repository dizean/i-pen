import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { View, TouchableOpacity, ImageBackground } from "react-native";
import * as Speech from "expo-speech";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import { RFPercentage } from "react-native-responsive-fontsize";
import styles from "../styles";
import { Text } from "@/context/FontContent";
import { Image } from "expo-image";
const Introduction = forwardRef((props, ref) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const router = useRouter();
  const content = [
    { id: 1, text: "What is Addition?", styling: styles.subtitle },
    { id: 2, text: "Addition is the process of adding two or more items together.", styling: styles.text },
    { id: 3, text: "Addition in Math is the method of calculating the sum of two or more numbers.", styling: styles.text },
    { id: 4, text: "Addition Symbol", styling: styles.sectiontititle },
    { id: 5, text: "The addition symbol consists of one horizontal line and one vertical line.", styling: styles.text },
    { id: 6, text: "It is also known as the addition sign or the plus sign.", styling: styles.text },
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
          onPress={() => router.push("/content/content")}
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
        <Image
        contentFit='contain'
        source={require("../../../../assets/images/plus.png")}
        style={[styles.image, {height:100}]}
      />
      </View>
    </View>
  );
});

export default Introduction;

import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { View, TouchableOpacity, ImageBackground } from "react-native";
import * as Speech from "expo-speech";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import { RFPercentage } from "react-native-responsive-fontsize";
import styles from "../../styles";
import { Text } from "@/context/FontContent";
import { Image } from "expo-image";
const WoRegroup = forwardRef((props, ref) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const router = useRouter();
  const content = [
    { id: 1, text: "Methods in Solving Subtraction Problems", styling: styles.subtitle },
    { id: 2, text: "Subtraction Without Regrouping", styling: styles.sectiontititle },
    { id: 3, text: "Example:", styling: styles.text },
    { id: 4, text: "Subtract 25632 from 48756", styling: styles.text },
    { id: 5, text: "Solution:", styling: styles.text },
    { id: 6, text: "Follow the given steps and try to relate them with the following figure.", styling: styles.text },
    { id: 7, text: "Step 1:", styling: styles.text },
    { id: 8, text: "Start with the digits in the ones (O) column.", styling: styles.text },
    { id: 9, text: "(6 − 2 = 4)", styling: styles.text },
    { id: 10, text: "Step 2:", styling: styles.text },
    { id: 11, text: "Move to the digits in the tens (T) column.", styling: styles.text },
    { id: 12, text: "(5 − 3 = 2)", styling: styles.text },
    { id: 13, text: "Step 3:", styling: styles.text },
    { id: 14, text: "Now subtract the digits in the hundreds (H) column.", styling: styles.text },
    { id: 15, text: "(7 − 6 = 1)", styling: styles.text },
    { id: 16, text: "Step 4:", styling: styles.text },
    { id: 17, text: "After this, subtract the digits in the thousands (Th) column.", styling: styles.text },
    { id: 18, text: "(8 − 5 = 3).", styling: styles.text },
    { id: 19, text: "Step 5:", styling: styles.text },
    { id: 20, text: "Finally, subtract the digits in the ten thousands (T-th) column.", styling: styles.text },
    { id: 21, text: "(4 − 2 = 2)", styling: styles.text },
    { id: 22, text: "Step 6:", styling: styles.text },
    { id: 23, text: "Therefore, the difference between the two given numbers is:", styling: styles.text },
    { id: 24, text: "48756 − 25632 = 23124.", styling: styles.text }
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
        <Image source={require('../../../../../assets/images/subworegrp.png')}
        style={[styles.image, {height:200}]}
      />
      </View>
    </View>
  );
});

export default WoRegroup;

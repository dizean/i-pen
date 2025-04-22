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
    { id: 1, text: "Methods in Solving Multiplication Problems", styling: styles.subtitle },
    { id: 2, text: "Line Multiplication", styling: styles.sectiontititle },
    { id: 3, text: "Multiplication on a number line means to apply the multiplication operation on a given set of numbers through a number line.", styling: styles.text },
    { id: 4, text: "Example:", styling: styles.text },
    { id: 5, text: "Multiply 3 by 5 using a number line.",styling: [styles.text, styles.formula] },
    { id: 6, text: "Solution:", styling: styles.text },
    { id: 7, text: "Observe the following number line to see the working of 3 ×  5 = 15. ", styling: styles.text },
    { id: 8, text: "We will start from 0 and move towards the right of the number line, we will form 3 groups of 5 equal intervals.", styling: styles.text },
    { id: 9, text: "This will take us to 15.", styling: styles.text },
    { id: 10, text: "The above number line shows 3 × 5 is 15.", styling: styles.text },
    { id: 11, text: "The representation can also be written as 5 + 5 + 5 = 15.", styling: styles.text },
    { id: 12, text: "The multiplication statement is expressed as, 3 × 5 = 15.", styling: styles.text }
  ];
  const imageIndexes = [6, 7, 10, 11];
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
    <AntDesign name="home" size={50} color="#fff" />
  </Text>
</TouchableOpacity>


        <TouchableOpacity onPress={handleSpeechToggle}>
          {isSpeaking ? (
            <AntDesign name="pausecircle" size={50} color="#fff" />
          ) : (
            <AntDesign name="play" size={50} color="#fff" />
          )}
        </TouchableOpacity>
      </ImageBackground>
      {content.map((line, index) => (
      <View style={styles.container}>
          <Text
            key={index}
            style={[
              line.styling,
              index === currentIndex
                ? { marginBottom: 10, color: "#FDDA0D", }
                : { marginBottom: 10 },
            ]}
          >
            {line.text}
          </Text>
          {imageIndexes.includes(index) && (
              <Image
                source={require("../../../../../assets/images/linemulti.png")}
                style={{ height: 200, width: "100%" }}
                contentFit="contain"
              />
            )}
      </View>
    ))}
    </View>
  );
});

export default Line;

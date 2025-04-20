import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { View, TouchableOpacity, ImageBackground } from "react-native";
import * as Speech from "expo-speech";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import { RFPercentage } from "react-native-responsive-fontsize";
import styles from "../../styles";
import { Text } from "@/context/FontContent";
import { Image } from "expo-image";
const WRegroup = forwardRef((props, ref) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const router = useRouter();
  const content = [
    { id: 1, text: "Methods in Solving Addition Problems", styling: styles.subtitle },
    { id: 2, text: "Addition With Regrouping", styling: styles.sectiontititle },
    { id: 3, text: "While adding numbers, if the sum of the addends is greater than 9 in any of the columns, we regroup this sum into tens and ones. Then we carry over the tens digit of the sum to the preceding column and write the ones digit of the sum in that particular column.", styling: styles.text },
    { id: 4, text: "Let us understand how to add two or more numbers by regrouping with the help of an example.", styling: styles.text },
    { id: 5, text: "Example:", styling: styles.text },
    { id: 6, text: "Add 3475 and 2865", styling: styles.text },
    { id: 7, text: "Solution:", styling: styles.text },
    { id: 8, text: "We will use the following given steps and try to relate them with the following figure.", styling: styles.text },
    { id: 9, text: "Step 1:", styling: styles.text },
    { id: 10, text: "Start with the digits in the ones (O) column.", styling: styles.text },
    { id: 11, text: "(5 + 5 = 10).", styling: styles.text },
    { id: 12, text: "Here the sum is 10. The tens digit of the sum, that is, 1, will be carried to the preceding column.", styling: styles.text },
    { id: 13, text: "Step 2:", styling: styles.text },
    { id: 14, text: "Add the digits in the tens (T) column along with the carryover 1.", styling: styles.text },
    { id: 15, text: "1 (carry-over) + 7 + 6 = 14", styling: styles.text },
    { id: 16, text: "Here the sum is 14. The tens digit of the sum, that is, 1, will be carried to the hundreds column.", styling: styles.text },
    { id: 17, text: "Step 3:", styling: styles.text },
    { id: 18, text: "Now, add the digits in the hundreds (H) place along with the carryover digit 1.", styling: styles.text },
    { id: 19, text: "1 (carry-over) + 4 + 8 = 13.", styling: styles.text },
    { id: 20, text: "Here the sum is 13. The tens digit of the sum, that is, 1, will be carried to the thousands column.", styling: styles.text },
    { id: 21, text: "Step 4:", styling: styles.text },
    { id: 22, text: "Now, add the digits in the thousands place (Th) along with the carryover digit 1.", styling: styles.text },
    { id: 23, text: "1 (carry-over) + 3 + 2 = 6.", styling: styles.text },
    { id: 24, text: "Step 5:", styling: styles.text },
    { id: 25, text: "Therefore,", styling: styles.text },
    { id: 26, text: "3475 + 2865 = 6340", styling: styles.text }
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
        <Image source={require('../../../../../assets/images/wregroup.png')}
        style={[styles.image, {height:200}]}
      />
      </View>
    </View>
  );
});

export default WRegroup;

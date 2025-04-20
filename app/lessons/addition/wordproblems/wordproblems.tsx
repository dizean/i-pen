import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { View, TouchableOpacity, ImageBackground } from "react-native";
import * as Speech from "expo-speech";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import { RFPercentage } from "react-native-responsive-fontsize";
import styles from "../styles";
import { Text } from "@/context/FontContent";
import { Image } from "expo-image";

const WordProblem = forwardRef((props, ref) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const router = useRouter();
  const content = [
    { id: 1, text: "Word Problems in Addition", styling: styles.subtitle },
    { id: 2, text: "The concept of the addition operation is used in our day-to-day activities. We should carefully observe the situation and identify the solution using the tips and tricks that follows addition.", styling: styles.text },
    { id: 3, text: "Let us understand how to solve addition word problems with the help of an interesting example.", styling: styles.text },
    { id: 4, text: "Example :", styling: styles.text },
    { id: 5, text: "A soccer match had 4535 spectators in the first row and 2332 spectators in the second row. Using the concept of addition find the total number of spectators present in the match.", styling: styles.text },
    { id: 6, text: "Solution :", styling: styles.text },
    { id: 7, text: "The number of spectators in the first row is 4535.", styling: styles.text },
    { id: 8, text: "The number of spectators in the second row is 2332.", styling: styles.text },
    { id: 9, text: "We can get the total number of spectators if we add the given number of spectators in the two rows.", styling: styles.text },
    { id: 10, text: "Here 4535 and 2332 are the addends.", styling: styles.text },
    { id: 11, text: "Let us find the total number of spectators by adding these two numbers using the following steps.", styling: styles.text },
    { id: 12, text: "Step 1:", styling: styles.text },
    { id: 13, text: "Add the digits in the ones (O) place.", styling: styles.text },
    { id: 14, text: "(5 + 2 = 7)", styling: styles.text },
    { id: 15, text: "Step 2:", styling: styles.text },
    { id: 16, text: "Add the digits in the tens (T) place.", styling: styles.text },
    { id: 17, text: "(3 + 3 = 6)", styling: styles.text },
    { id: 18, text: "Step 3:", styling: styles.text },
    { id: 19, text: "Add the digits in the hundreds (H) place.", styling: styles.text },
    { id: 20, text: "(5 + 3 = 8)", styling: styles.text },
    { id: 21, text: "Step 4:", styling: styles.text },
    { id: 22, text: "Add the digits in the thousands (Th) place.", styling: styles.text },
    { id: 23, text: "(4 + 2 = 6)", styling: styles.text },
    { id: 24, text: "Step 5:", styling: styles.text },
    { id: 25, text: "4535 + 2332 = 6867", styling: styles.text },
    { id: 26, text: "Therefore, the total number of spectators present in the match is", styling: styles.text },
    { id: 27, text: "6867.", styling: styles.text },
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
    isSpeaking ? stopSpeaking() : startSpeaking();
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
      <ImageBackground style={styles.playnav}>
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
          <View key={index}>
            <Text
              style={[
                line.styling,
                index === currentIndex
                  ? { marginBottom: 10, color: "#FFA500" }
                  : { marginBottom: 10 },
              ]}
            >
              {line.text}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
});

export default WordProblem;

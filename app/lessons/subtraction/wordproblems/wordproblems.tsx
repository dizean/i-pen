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
    { id: 1, text: "Word Problems in Subtraction", styling: styles.subtitle },
    { id: 2, text: "The concept of subtraction is often used in our day-to-day activities.", styling: styles.text },
    { id: 3, text: "Let us understand how to solve action word problems with the help of an interesting example.", styling: styles.text },
    { id: 4, text: "Example :", styling: styles.text },
    { id: 5, text: "A soccer match had a total of 4535 spectators. After the first innings, 2332 spectators left the stadium. Find the number of remaining spectators.", styling: styles.text },
    { id: 6, text: "Solution :", styling: styles.text },
    { id: 7, text: "The total number of spectators present in the first innings is 4535", styling: styles.text },
    { id: 8, text: "The number of spectators who left the stadium after the first innings is 2332", styling: styles.text },
    { id: 9, text: "Here, 4535 is the minuend and 2332 is the subtrahend.", styling: styles.text },
    { id: 10, text: "Therefore, the number of remaining spectators = 2203.", styling: styles.text },
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
      <ImageBackground style={styles.playnav}>
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
            {index === 8 && (
              <Image
                source={require("../../../../assets/images/sword.png")}
                style={{ height: 200, width: "100%" }}
                contentFit="contain"
              />
            )}
          </View>
        ))}
      </View>
    </View>
  );
});

export default WordProblem;

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
    { id: 1, text: "Word Problems in Multiplication", styling: styles.subtitle },
    { id: 2, text: "Multiplication word problems can be easily solved by carefully observing the situation and identifying the solution.", styling: styles.text },
    { id: 3, text: "Example :", styling: styles.text },
    { id: 4, text: "A box contains 245 fruits. Find the number of fruits in 4 such boxes using the multiplication formula.", styling: styles.text },
    { id: 5, text: "Solution :", styling: styles.text },
    { id: 6, text: "To solve such multiplication word problems the easiest way is to note down the given parameters and then solve.", styling: styles.text },
    { id: 7, text: "The total number of fruits in one box = 245", styling: styles.text },
    { id: 8, text: "The number of boxes = 4", styling: styles.text },
    { id: 9, text: "Let us multiply 245 by 4 using the steps given below and try to relate them with the following figure.", styling: styles.text },
    { id: 10, text: "Step 1:", styling: styles.text },
    { id: 11, text: "Start with the digit in ones place.", styling: styles.text },
    { id: 12, text: "4 × 5 = 20", styling: styles.text },
    { id: 13, text: "Now carry 2 to the tens column.", styling: styles.text },
    { id: 14, text: "Step 2:", styling: styles.text },
    { id: 15, text: "Multiply 4 with the digit in tens place, that is,", styling: styles.text },
    { id: 16, text: "4 × 4 = 16", styling: styles.text },
    { id: 17, text: "Now, add this to the carry-over from the previous step.", styling: styles.text },
    { id: 18, text: "16 + 2 (carry-over from step 1) = 18", styling: styles.text },
    { id: 19, text: "From this, carry 1 to the hundreds column.", styling: styles.text },
    { id: 20, text: "Step 3:", styling: styles.text },
    { id: 21, text: "Multiply 4 with the digit in hundreds place,", styling: styles.text },
    { id: 22, text: "4 × 2 = 8", styling: styles.text },
    { id: 23, text: "8 + 1 (carry-over from step 2) = 9", styling: styles.text },
    { id: 24, text: "Step 4:", styling: styles.text },
    { id: 25, text: "Therefore,", styling: styles.text },
    { id: 26, text: "the product of 245 × 4 is", styling: styles.text },
    { id: 27, text: "980", styling: styles.text }
  ];
  
  const imageIndexes = [9, 13, 19,26];
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
            {imageIndexes.includes(index) && (
              <Image
                source={require("../../../../assets/images/wordmulti.png")}
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

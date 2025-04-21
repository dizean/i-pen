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
import styles from "../../styles";
import { Text } from "@/context/FontContent";
import { Image } from "expo-image";
const WRegroup = forwardRef((props, ref) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const router = useRouter();
  const content = [
    { id: 1, text: "Methods in Solving Multiplication Problems", styling: styles.subtitle },
    { id: 2, text: "Multiplication With Regrouping", styling: styles.sectiontititle },
    { id: 3, text: "Multiplication of more than two numbers with regrouping involves numbers with a 2-digit product.", styling: styles.text },
    { id: 4, text: "Example:", styling: styles.text },
    { id: 5, text: "Multiply 2468 with 8", styling: styles.text },
    { id: 6, text: "Solution:", styling: styles.text },
    { id: 7, text: "Let us multiply 2468 by 8 using the steps given below and try to relate them with the following figure.", styling: styles.text },
    { id: 8, text: "Step 1:", styling: styles.text },
    { id: 9, text: "Start with the digit in ones place, that is", styling: styles.text },
    { id: 10, text: "8 × 8 = 64", styling: styles.text },
    { id: 12, text: "Now, carry 6 tens to the tens column.", styling: styles.text },
    { id: 13, text: "Step 2:", styling: styles.text },
    { id: 14, text: "Multiply 8 with the digit in the tens place, that is, 6.", styling: styles.text },
    { id: 15, text: "8 × 6 = 48", styling: styles.text },
    { id: 16, text: "Now, we will add this to the carry-over. This means,", styling: styles.text },
    { id: 17, text: "48 + 6 (carry-over from step 1) = 54", styling: styles.text },
    { id: 18, text: "Carry 5 to the hundreds column.", styling: styles.text },
    { id: 19, text: "Step 3:", styling: styles.text },
    { id: 20, text: "Multiply 8 with the digit in the hundreds place, that is, 4.", styling: styles.text },
    { id: 21, text: "8 × 4 = 32", styling: styles.text },
    { id: 22, text: "Now, let us add this to the carry-over from the previous step. This means,", styling: styles.text },
    { id: 23, text: "32 + 5 (carry-over from step 2) = 37", styling: styles.text },
    { id: 24, text: "We will again carry 3 to the thousands column.", styling: styles.text },
    { id: 25, text: "Step 4:", styling: styles.text },
    { id: 26, text: "Multiply 8 with the digit in the thousands place, that is, 2.", styling: styles.text },
    { id: 27, text: "8 × 2 = 16", styling: styles.text },
    { id: 28, text: "So, let us again add this to the carry-over, that is,", styling: styles.text },
    { id: 29, text: "16 + 3 (carry-over from step 3) = 19", styling: styles.text },
    { id: 30, text: "Step 5:", styling: styles.text },
    { id: 31, text: "Therefore, the product of 2468 × 8 is", styling: styles.text },
    { id: 32, text: "19744", styling: styles.text }
  ];
  

  const imageIndexes = [7, 12, 18, 24, 30];
  useImperativeHandle(ref, () => ({
    toggleSpeech: () => handleSpeechToggle(),
    stopSpeech: () => stopSpeaking(),
  }));
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
      {content.map((line, index) => (
        <View style={styles.container}>
          <Text
            key={index}
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
              source={require("../../../../../assets/images/wregmulti.png")}
              style={{ height: 200, width: "100%" }}
              contentFit="contain"
            />
          )}
        </View>
      ))}
    </View>
  );
});

export default WRegroup;

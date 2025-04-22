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
const WoRegroup = forwardRef((props, ref) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const router = useRouter();
  const content = [
    { id: 1, text: "Methods in Solving Addition Problems", styling: styles.subtitle },
    { id: 2, text: "Addition Without Regrouping", styling: styles.sectiontititle },
    { id: 3, text: "The addition in which the sum of the digits is less than or equal to 9 in each column is called addition without regrouping.", styling: styles.text },
    { id: 4, text: "Let us understand how to add two or more numbers without regrouping with the help of an example.", styling: styles.text },
    { id: 5, text: "Example:", styling: [styles.text, styles.steps] },
    { id: 6, text: "Add 11234 and 21123", styling: [styles.text, styles.formula] },
    { id: 7, text: "Solution:", styling: [styles.text, styles.steps] },
    { id: 8, text: "Step 1:", styling: [styles.text, styles.steps] },
    { id: 9, text: "Start with the digits in the ones (O) column.", styling: styles.text },
    { id: 10, text: "4 + 3 = 7", styling: [styles.text, styles.formula] },
    { id: 11, text: "Step 2:", styling: [styles.text, styles.steps] },
    { id: 12, text: "Move to the digits in the tens (T) column.", styling: styles.text },
    { id: 13, text: "3 + 2 = 5", styling: [styles.text, styles.formula] },
    { id: 14, text: "Step 3:", styling: [styles.text, styles.steps] },
    { id: 15, text: "Now add the digits in the hundreds (H) column.", styling: styles.text },
    { id: 16, text: "2 + 1 = 3",styling: [styles.text, styles.formula] },
    { id: 17, text: "Step 4:", styling: [styles.text, styles.steps] },
    { id: 18, text: " After this, add the digits in the thousands (Th) column.", styling: styles.text },
    { id: 19, text: "1 + 1 = 2",styling: [styles.text, styles.formula] },
    { id: 20, text: "Step 5", styling: [styles.text, styles.steps] },
    { id: 21, text: "Finally, add the digits in the ten thousands (T-th) column.", styling: styles.text },
    { id: 22, text: "1 + 2 = 3", styling: [styles.text, styles.formula] },
    { id: 23, text: "Step 6", styling: [styles.text, styles.steps] },
    { id: 24, text: "Hence,", styling: styles.text },
    { id: 25, text: "11234 + 21123 = 32357", styling: [styles.text, styles.formula] },
  ];
  const imageIndexes = [8, 11, 14, 17, 20, 23];
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
    Speech.speak(content[0].text, {
      voice: "en-us-x-iol-local",
      rate: 0.9,
      volume: 1.0,
      onDone: () => speakNext(1),
    });
  };

  const stopSpeaking = () => {
    Speech.stop();
    setIsSpeaking(false);
    setCurrentIndex(-1);
  };

  const speakNext = (index: number) => {
    if (index < content.length) {
      setCurrentIndex(index);
      Speech.speak(content[index].text, {
        voice: "en-us-x-iol-local",
        rate: 0.9,
        volume: 1.0,
        onDone: () => speakNext(index + 1),
      });
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
                ? { marginBottom: 10, color: "#FDDA0D" }
                : { marginBottom: 10 },
            ]}
          >
            {line.text}
          </Text>
          {imageIndexes.includes(index) && (
            <Image
              source={require("../../../../../assets/images/woregroup1.png")}
              style={{ height: 200, width: "100%" }}
              contentFit="contain"
            />
          )}
        </View>
      ))}
    </View>
  );
});

export default WoRegroup;

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
    { id: 1, text: "Methods in Solving Subtraction Problems", styling: styles.subtitle },
    { id: 2, text: "Subtraction With Regrouping", styling: styles.sectiontititle },
    { id: 3, text: "Example:", styling: styles.text },
    { id: 4, text: "Subtract 3678 from 8162", styling: styles.text },
    { id: 5, text: "Solution:", styling: styles.text },
    { id: 6, text: "We will use the following given steps and try to relate them with the following figure.", styling: styles.text },
    { id: 7, text: "Step 1:", styling: [styles.text, styles.steps] },
    { id: 8, text: "Start subtracting the digits at ones place.", styling: styles.text },
    { id: 9, text: "We can see that 8 is greater than 2.", styling: styles.text },
    { id: 10, text: "So, we will borrow 1 from the tens column which will make it 12.", styling: styles.text },
    { id: 11, text: "Now,", styling: styles.text },
    { id: 12, text: "12 − 8 = 4.", styling: [styles.text, styles.formula] },
    { id: 13, text: "Step 2:", styling: [styles.text, styles.steps] },
    { id: 14, text: "After giving 1 to the ones column in the previous step, 6 becomes 5.", styling: styles.text },
    { id: 15, text: "Now, let us subtract the digits at the tens place, ", styling: styles.text },
    { id: 16, text: "5 − 7", styling: [styles.text, styles.formula] },
    { id: 17, text: "Here, 7 is greater than 5, so we will borrow 1 from the hundreds column.", styling: styles.text },
    { id: 18, text: "This will make it 15. So, ", styling: styles.text },
    { id: 19, text: "15 − 7 = 8", styling: [styles.text, styles.formula] },
    { id: 20, text: "Step 3:", styling: [styles.text, styles.steps] },
    { id: 21, text: "In step 2 we had given 1 to the tens column, so we are left with 0 at the hundreds place.", styling: styles.text },
    { id: 22, text: "To subtract the digits on the hundreds place, i.e., (0 − 6) we will borrow 1 from the thousands column.", styling: styles.text },
    { id: 23, text: "This will make it 10. So,", styling: styles.text },
    { id: 24, text: "10 − 6 = 4", styling: [styles.text, styles.formula] },
    { id: 25, text: "Step 4:", styling: [styles.text, styles.steps] },
    { id: 26, text: "Now, let us subtract the digits at the thousands place.", styling: styles.text },
    { id: 27, text: "After giving 1 to the hundreds column, we have 7. So,", styling: styles.text },
    { id: 28, text: "7 − 3 = 4", styling: [styles.text, styles.formula] },
    { id: 29, text: "Step 5", styling: [styles.text, styles.steps] },
    { id: 30, text: "Therefore, the difference between the two given numbers is:", styling: styles.text },
    { id: 31, text: "8162 − 3678 = 4484", styling: [styles.text, styles.formula] },
  ];
  const imageIndexes = [9, 16, 21, 25, 30];
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
      <View style={styles.container}>
        {content.map((line, index) => (
          <View key={index}>
            <Text
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
                source={require("../../../../../assets/images/subwregrp.png")}
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

export default WRegroup;

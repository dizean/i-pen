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
const Parts = forwardRef((props, ref) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const router = useRouter();
  const content = [
    { id: 1, text: "Parts of Multiplication", styling: styles.subtitle },
    { id: 2, text: "Multiplicand", styling: styles.sectiontititle },
    { id: 3, text: "Multiplicand is The first number (factor).", styling: styles.text },
    { id: 4, text: "Multiplier", styling: styles.sectiontititle },
    { id: 5, text: "Multiplier is The second number (factor).", styling: styles.text },
    { id: 6, text: "The Product", styling: styles.sectiontititle },
    { id: 7, text: "Product is The final result after multiplying the multiplicand and multiplier.", styling: styles.text },
    { id: 8, text: "Multiplication Symbol", styling: styles.sectiontititle },
    { id: 9, text: "Connects the entire expression.", styling: styles.text },
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
          </View>
        ))}
      </View>
      <Image
        contentFit="contain"
        source={require("../../../../assets/images/MUL.png")}
        style={[styles.image, { height: 200 }]}
      />
    </View>
  );
});
export default Parts;

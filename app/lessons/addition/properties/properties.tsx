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

const Properties = forwardRef((props, ref) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const router = useRouter();
  const content = [
    { id: 1, text: "Properties of Addition", styling: styles.subtitle },
    { id: 2, text: "Commutative Property", styling: styles.sectiontititle },
    { id: 3, text: "According to this property, the sum of two or more addends remains the same irrespective of the order of the addends.", styling: styles.text },
    { id: 4, text: "Example :", styling: styles.text },
    { id: 5, text: "Associative Property", styling: styles.sectiontititle },
    { id: 6, text: "According to this property, the sum of three or more addends remains the same irrespective of the grouping of the addends.", styling: styles.text },
    { id: 7, text: "Example :", styling: styles.text },
    { id: 8, text: "Additive Identity Property", styling: styles.sectiontititle },
    { id: 9, text: "According to this property of addition, if we add 0 to any number, the resultant sum is always the actual number.", styling: styles.text },
    { id: 10, text: "Example :", styling: styles.text }
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

            {index === 4 && (
              <Image
                source={require("../../../../assets/images/AddComm.png")}
                style={{ height: 200, width: "100%" }}
                contentFit="contain"
              />
            )}
            {index === 7 && (
              <Image
                source={require("../../../../assets/images/AddAsso.png")}
                style={{ height: 200, width: "100%" }}
                contentFit="contain"
              />
            )}
            {index === 9 && (
              <Image
                source={require("../../../../assets/images/AddIdentity.png")}
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

export default Properties;

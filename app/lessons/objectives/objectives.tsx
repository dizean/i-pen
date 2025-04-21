import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { View, TouchableOpacity, ImageBackground } from "react-native";
import * as Speech from "expo-speech";
import AntDesign from "@expo/vector-icons/AntDesign";
import styles from "./styles";
import { Text } from "@/context/FontContent";
import { useRoute } from "@react-navigation/native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { useRouter } from "expo-router";
interface RouteParams {
  topic?: string;
}
const Objectives = forwardRef((props, ref) => {
  const route = useRoute();
  const router = useRouter();
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const { topic } = (route.params as RouteParams) || {};
  const [useTopic] = useState(() => ({
    lesson: (() => {
      switch (topic) {
        case "Addition":
          return "1";
        case "Subtraction":
          return "2";
        case "Multiplication":
          return "3";
        case "Division":
          return "4";
        default:
          return null;
      }
    })(),
    title: topic,
    text: topic?.toLowerCase(),
  }));
  const content = [
    {
      id: 1,
      text: `Lesson ${useTopic.lesson}: ${useTopic.title}`,
      styling: styles.subtitle,
    },
    { id: 2, text: "Objectives", styling: styles.subtitle },
    {
      id: 3,
      text: "At the end of this lesson, you should be able to:",
      styling: styles.text,
    },
    {
      id: 5,
      text: `Develop skills to perform ${useTopic.text} of numbers using various methods and strategies with the aid of computer-assisted tools.`,
      styling: styles.text,
    },
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
              index === currentIndex ? { color: "#FFA500" } : {},
            ]}
          >
            {line.text}
          </Text>
        ))}
      </View>
    </View>
  );
});

export default Objectives;

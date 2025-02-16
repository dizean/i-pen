import React, { forwardRef, useImperativeHandle, useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import * as Speech from "expo-speech";
import styles from "../styles";
import AntDesign from "@expo/vector-icons/AntDesign";

interface SpeechComponentProps {
  currentSection: number;
}

const SpeechComponent = forwardRef(({ currentSection }: SpeechComponentProps, ref) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const textList = getTextListForSection(currentSection);

  const speakWithKidTone = (text: string, callback?: () => void) => {
    Speech.speak(text, {
      voice: 'en-us-x-iol-local',
     rate: .9,
      volume: 1.0,
      onDone: callback,
    });
  };

  const playAllText = () => {
    let index = 0;
    const speakNext = () => {
      if (index < textList.length) {
        speakWithKidTone(textList[index], speakNext);
        index++;
      } else {
        setIsSpeaking(false);
      }
    };
    setIsSpeaking(true);
    speakNext();
  };

  const stopSpeech = () => {
    Speech.stop();
    setIsSpeaking(false);
  };

  const handleSpeechToggle = () => {
    if (isSpeaking) {
      stopSpeech();
    } else {
      playAllText();
    }
  };
  useImperativeHandle(ref, () => ({
    stopSpeech,
  }));

  return (
    <TouchableOpacity style={[styles.button]} onPress={handleSpeechToggle}>
      <Text style={styles.buttonText}>
        {isSpeaking ? (
          <AntDesign name="pausecircle" size={24} color="black" />
        ) : (
          <AntDesign name="play" size={24} color="black" />
        )}
      </Text>
    </TouchableOpacity>
  );
});
const getTextListForSection = (currentSection: number) => {
  switch (currentSection) {
    case 1:
      return ["Objectives of Divison",
        `At the end of this lesson, you should be able to:`,
        `Develop skills to perform Divison of numbers
        using various methods and strategies with the aid of computer-assisted tools.`
      ];
    case 2:
      return [
       "Introduction to Divison",
      "What is Divison?",
      `Division is separating a group into equal parts. 
      Division is used to separate a class into equal groups for a game or activity or even slicing a pizza into equal portions between a group of friends.`,
      "Addition symbol",
      `The division sign is a mathematical symbol consisting of a short horizontal line with a dot above and another dot below, 
      used in Anglophone countries to indicate the operation of division.`,
      ];
    case 3:
      return [
        `The division formula`,
          `The division formula is expressed as, Dividend ÷ Divisor = Quotient, `,
          `where in 8 divided by 4 = 2, 8 is the dividend`,
          `DIVIDEND is the number that will be divided.`,
          `4 is the divisor`,
          `DIVISOR is A number by which another number is to be divided.`,
          `2 is the kwoshnt`,
          `kwoshnt is the result obtained by dividing one quantity by another.`,
          `And the Division symbol which connects the entire expression`,
          ];
      case 4:
        return [
          "Let us Practice What You have LEarned.",
          ];
      default:
        return [];
  }
};

export default SpeechComponent;

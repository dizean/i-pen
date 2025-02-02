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
      pitch: 1.8,
      rate: 0.7,
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
      return ["Objectives of Addition",
        `At the end of this lesson, you should be able to:`,
        `Develop skills to perform addition of numbers
        using various methods and strategies with the aid of computer-assisted tools.`
      ];
      case 2:
        return ["Together, Let us SIng the addition song"
        ];
    case 3:
      return [
       "Introduction to Addition",
      "What is Addition?",
      `Addition is the process of adding two or more items together.
      Addition in Math is the method of calculating the sum of two or more numbers.`,
      "Addition symbol",
      `The addition symbol consists of one horizontal line and one vertical line.
      It is also known as the addition sign or the plus sign.`,
      ];
    case 4:
      return ["Parts of Addition",
        `Addends`,
        `The numbers that are added together are known as the addends.`,
        `Addition Symbol`,
        `There is the addition symbol (+), which is placed between the addends`,
        `Lastly, The Sum`,
        `The final result obtained after adding the addends is known as the sum.`,
        
      ];
    case 5:
      return ["Let us Practice Adding",
        'Choose the correct answer'
      ];
    case 6:
        return [
            "Methods in Solving Addition Problem",
            "Addition Without Regrouping",
            "The addition in which the sum of the digits is less than or equal to 9 in each column is called addition without regrouping.",
            "Let us understand how to add two or more numbers without regrouping with the help of an example.",
            "Example:",
            "Add 11234 and 21123",
            "Solution:",
            "We will use the following given steps and try to relate them with the following figure.",
            "Step 1: Start with the digits in the ones (O) column. (4 + 3 = 7)",
            "Step 2: Move to the digits in the tens (T) column. (3 + 2 = 5)",
            "Step 3: Now add the digits in the hundreds (H) column. (2 + 1 = 3)",
            "Step 4: After this, add the digits in the thousands (Th) column. (1 + 1 = 2)",
            "Step 5: Finally, add the digits in the ten thousands (T-th) column. (1 + 2 = 3)",
            "Step 6: Hence, 11234 + 21123 = 32357"];
    case 7:
        return [
            "Addition With Regrouping",
            "While adding numbers, if the sum of the addends is greater than 9 in any of the columns, we regroup this sum into tens and ones. Then we carry over the tens digit of the sum to the preceding column and write the ones digit of the sum in that particular column.",
            "Let us understand how to add two or more numbers by regrouping with the help of an example.",
            "Example:",
            "Add 3475 and 2865",
            "Solution:",
            "We will use the following given steps and try to relate them with the following figure.",
            "Step 1:",
            "Start with the digits in the ones (O) place.",
            "(5 + 5 = 10).",
            "Here the sum is 10. The tens digit of the sum, that is, 1, will be carried to the preceding column.",
            "Step 2:",
            "Add the digits in the tens (T) column along with the carryover 1.",
            "1 (carry-over) + 7 + 6 = 14.",
            "Here the sum is 14. The tens digit of the sum, that is, 1, will be carried to the hundreds column.",
            "Step 3:",
            "Now, add the digits in the hundreds (H) place along with the carryover digit 1.",
            "1 (carry-over) + 4 + 8 = 13.",
            "Here the sum is 13. The tens digit of the sum, that is, 1, will be carried to the thousands column.",
            "Step 4:",
            "Now, add the digits in the thousands place (Th) along with the carryover digit 1.",
            "1 (carry-over) + 3 + 2 = 6.",
            "Step 5:",
            "Therefore, the sum of 3475 + 2865 is 6340."];
    case 8:
        return [
          "Number Line Addition",
            "Another way to add numbers is with the help of number lines.",
            "Let us understand the addition on a number line with the help of an example and the number line given below.",
            "Example:",
            "Add 10 and 3",
            "Solution:",
            "We start by marking the number 10 on the number line. When we add using a number line, we count by moving one number at a time to the right of the number.",
            "Since we are adding 10 and 3, we will move 3 steps to the right. This brings us to 13.",
            "Hence, 10 + 3 = 13."  
        ];
    case 9:
        return [
            "Properties of Addition",
            "Commutative Property",
            "According to this property, the sum of two or more addends remains the same irrespective of the order of the addends.",
            "Example :",
            "8 + 7 = 7 + 8 = 15.",
            "Associative Property",
            "According to this property, the sum of three or more addends remains the same irrespective of the grouping of the addends.",
            "Example :",
            "5 + (7 + 3) = (5 + 7) + 3 = 15.",
            "Additive Identity Property",
            "According to this property of addition, if we add 0 to any number, the resultant sum is always the actual number.",
            "Example :",
            "0 + 7 = 7."
        ];
    case 10:
        return [
            "Word Problems in Addition",
            "The concept of the addition operation is used in our day-to-day activities. We should carefully observe the situation and identify the solution using the tips and tricks that follows addition.",
            "Let us understand how to solve addition word problems with the help of an interesting example.",
            "Example :",
            "A soccer match had 4535 spectators in the first row and 2332 spectators in the second row. Using the concept of addition find the total number of spectators present in the match.",
            "Solution :",
            "The number of spectators in the first row is 4545.",
            "The number of spectators in the second row is 2332.",
            "We can get the total number of spectators if we add the given number of spectators in the two rows.",
            "Here 4545 and 2332 are the addends.",
            "Let us find the total number of spectators by adding these two numbers using the following steps.",
            "Step 1:",
            "Add the digits in the ones (O) place.",
            "(5 + 2 = 7)",
            "Step 2:",
            "Add the digits in the tens (T) place.",
            "(3 + 3 = 6)",
            "Step 3:",
            "Add the digits in the hundreds (H) place.",
            "(5 + 3 = 8)",
            "Step 4:",
            "Add the digits in the thousands (Th) place.",
            "(4 + 2 = 6)",
            "Step 5:",
            "4535 + 2332 = 6867",
            "Therefore, the total number of spectators present in the match is 6867."
            ];
    case 11:
      return [
          "Let us Practice What You have LEarned.",
          ];
        default:
      return [];
  }
};

export default SpeechComponent;

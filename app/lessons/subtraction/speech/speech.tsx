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
      return ["Objectives of Subtraction",
        `At the end of this lesson, you should be able to:`,
        `Develop skills to perform Subtraction of numbers
        using various methods and strategies with the aid of computer-assisted tools.`
      ];
      case 2:
        return ["Together, Let us SIng the Subtraction song"
        ];
    case 3:
      return [
       "Introduction to Subtraction",
      "What is Subtraction?",
      `Subtraction is the process of taking away a number from another. 
      It is a primary arithmetic operation that is denoted by a subtraction symbol and is the method of calculating the difference between two numbers.
      `,
      "Subtraction symbol",
      `In mathematics, we have different symbols. 
      The subtraction symbol is one of the important math symbol that we use while performing subtraction. 
      The subtraction symbol is called minus.
`,
      ];
    case 4:
      return ["Parts of Subtraction",
        `Minuend`,
        `The number from which the other number is subtracted.`,
        `Subtrahend`,
        `The number which is to be subtracted from the minuend.`,
        `Difference`,
        `The final result after subtracting the subtrahend from the minuend.`,
        `The subtraction formula is written as: `,
        `Minuend - Subtrahend = Difference`,
        
      ];
    case 5:
      return ["Let us Practice Subtracting",
        'Choose the correct answer'
      ];
    case 6:
        return [
            "Methods in Solving Subtraction Problem",
            "Subtraction Without Regrouping",
            "Example:",
            "Subtract 25632 from 48756.",
            "Solution:",
            "Follow the given steps and try to relate them with the following figure.",
            "Step 1: Start with the digits in the ones (O) column. (6 minus 2 = 4)",
            "Step 2: Move to the digits in the tens (T) column. 5 minus 3 = 2",
            "Step 3: Now subtract the digits in the hundreds (H) column. 7 minus 6 = 1",
            "Step 4: Now subtract the digits at  the digits in the thousands (Th) column. (8 minus 5 = 3)",
            "Step 5: Finally, add the subtract in the ten thousands (T-th) column. (4 minus 2 = 2)",
            "Step 6: Therefore, the difference between the two given numbers is: 48756 minus 25632 = 23124."];
    case 7:
        return [
            "Subtraction With Regrouping",
            "Example:",
            "Subtract 3678 from 8162.",
            "Solution:",
            "Follow the given steps and try to relate them with the following figure.",
            "Step 1:",
            `Start subtracting the digits at ones place. 
            We can see that 8 is greater than 2.
            So, we will borrow 1 from the tens column which will make it 12. 
            Now, 12 minus 8 = 4.`,
            "Step 2:",
            `After giving 1 to the ones column in the previous step, 6 becomes 5. 
            Now, let us subtract the digits at the tens place (5 minus 7). 
            Here, 7 is greater than 5, so we will borrow 1 from the hundreds column. 
            This will make it 15. So, 15 minus 7 = 8.
            `,
            "Step 3:",
            "In step 2 we had given 1 to the tens column, so we are left with 0 at the hundreds place. ",
            "To subtract the digits on the hundreds place, i.e., (0 minus 6) we will borrow 1 from the thousands column. ",
            "This will make it 10. So, 10 minus 6 = 4.",
            "Step 4:",
            "Now, let us subtract the digits at the thousands place. ",
            "After giving 1 to the hundreds column, we have 7. So, 7 minus 3 = 4",
            "Step 5:",
            "Therefore, the difference between the two given numbers is: 8162 minus 3678 = 4484"];
    case 8:
        return [
          "Number Line Subtraction",
            "A number line is a visual aid that helps us understand subtraction because it allows us to jump backward and forward on each number.",
            "To understand how this works, let us explore subtraction using a number line. ",
            "Let us subtract 4 from 9 using a number line. ",
            "We will start by marking the number 9 on the number line.",
            "When we subtract using a number line, we count by moving one number at a time towards the left-hand side. ",
            "Since we are subtracting 4 from 9, we will move 4 times to the left.",
            "The number on which you land after 4 backward jumps, is the answer. Thus, 9 minus 4 = 5."  
        ];
    case 9:
        return [
            "Word Problems in Subtraction",
            "The concept of subtraction is often used in our day-to-day activities. ",
            "Let us understand how to solve action word problems with the help of an interesting example.",
            "Example :",
            "A soccer match had a total of 4535 spectators. After the first innings, 2332 spectators left the stadium. Find the number of remaining spectators.",
            "Solution :",
            "The total number of spectators present in the first innings = 4535",
            "The number of spectators who left the stadium after the first innings = 2332",
            "Here, 4535 is the minuend and 2332 is the subtrahend.",
            "Therefore, the number of remaining spectators = 2203.",
            ];
    case 10:
      return [
          "Let us Practice What You have LEarned.",
          ];
        default:
      return [];
  }
};

export default SpeechComponent;

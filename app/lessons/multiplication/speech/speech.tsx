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
      return ["Objectives of multiplication",
        `At the end of this lesson, you should be able to:`,
        `Develop skills to perform multiplication of numbers
        using various methods and strategies with the aid of computer-assisted tools.`
      ];
      case 2:
        return ["Together, Let us SIng the multiplication song"
        ];
    case 3:
      return [
       "Introduction to multiplication",
      "What is multiplication?",
      `In math, multiplication is the method of finding the product of two or more numbers. 
     It is a primary arithmetic operation that is used quite often in real life. 
      Multiplication is used when we need to combine groups of equal sizes.
    `,
    `Multiplication is an operation that represents the basic idea of repeated addition of the same number. 
    Multiplication is used to simplify the task of repeated addition of the same number.
`,
      "multiplication symbol",
      `The multiplication symbol is one of the commonly used math symbols. 
      Apart from the cross symbol, multiplication is also denoted by the mid-line dot operator, 
      and by the asterisk sign 
      .`,
      ];
    case 4:
      return [
        `The multiplication formula`,
          `The multiplication formula is expressed as,Multiplicand times Multiplier = Product, `,
          `where in 7 times 5 = 35, 7 is the Multiplicand`,
          `Multiplicand is The first number (factor).`,
          `5 is the Multiplier`,
          `Multiplier is The second number (factor).`,
          `35 is the Product`,
          `Product is The final result after multiplying the multiplicand and multiplier.`,
          `And the Product symbol which connects the entire expression`,
          ];
    case 5:
        return [
            "Methods in Solving multiplication Problem",
            "multiplication Without Regrouping",
           `Multiplication of two numbers without regrouping involves smaller numbers where there is no need to take a carry-over to the next higher place value.`,
            "Example:",
            "Multiply 3014 by 2.",
            "Solution:",
            "Let us multiply 3014 by 2 using the steps given below and try to relate them with the following figure.",
            "Step 1: Start with the digit in ones place. (2 times 4 = 8)",
            "Step 2: Multiply 2 with the digit in tens place. (2 times 1 = 2)",
            "Step 3: Now, multiply 2 with the digit in hundreds place. (2 times 0 = 0)",
            "Step 4: Now multiply 2 with the digit in thousands place. (2 times 3 = 6)",
            "Step 6: Hence, 3014 times 2 = 6028."];
    case 6:
        return [
            "multiplication With Regrouping",
            "Multiplication of more than two numbers with regrouping involves numbers with a 2-digit product.",
            "Example:",
            "Multiply 2468 with 8",
            "Solution:",
            "Let us multiply 2468 by 8 using the steps given below and try to relate them with the following figure.",
            "Step 1:",
            `Start with the digit in ones place, that is, 8 times 8 = 64 ones which means 6 tens 4 ones. 
            Now, carry 6 tens to the tens column.`,
            "Step 2:",
           `Multiply 8 with the digit in the tens place, that is, 8 times 6 = 48 tens. 
           Now, we will add this to the carry-over. This means, 48 + 6 (carry-over from step 1) = 54. 
           Carry 5 to the hundreds column.`,
            "Step 3:",
            `Multiply 8 with the digit in the hundreds place, that is, 8 times 4 = 32 hundreds. 
            Now, let us add this to the carry-over from the previous step. 
            This means, 32 + 5 (carry-over from step 2) = 37. We will again carry 3 to thousands column.`,
            "Step 4:",
            `Multiply 8 with the digit in the thousands place, that is, 8 times 2 = 16 thousands. 
            So, let us again add this to the carry-over, that is, 16 + 3 (carry-over from step 3) = 19`,
            "Step 5:",
            "Therefore, the product of 2468 times 8 = 19744."];
    case 7:
        return [
          "Number Line multiplication",
            "Multiplication on a number line means to apply the multiplication operation on a given set of numbers through a number line.",
            "Example:",
            "Multiply 3 by 5 using a number line.",
            "Solution:",
           `Observe the following number line to see the working of 3 by 5 = 15. 
           We will start from 0 and move towards the right of the number line, we will form 3 groups of 5 equal intervals. 
           This will take us to 15.`,
            `The above number line shows 3 times 5 is 15. 
            The representation can also be written as 5 + 5 + 5 = 15. The multiplication statement is expressed as, 3 times 5 = 15.`
        ];
    case 8:
        return [
            "Word Problems in multiplication",
            "Multiplication word problems can be easily solved by carefully observing the situation and identifying the solution.",
            "Example :",
            "A box contains 245 fruits. Find the number of fruits in 4 such boxes using the multiplication formula.",
            "Solution :",
            `To solve such multiplication word problems the easiest way is to note down the given parameters and then solve.`,
            "The total number of fruits in one box = 245",
            "The number of boxes = 4",
            "Total number of fruits in 4 such boxes = 245 times 4",
            "Let us multiply 245 by 4 using the steps given below and try to relate them with the following figure.",
            "Step 1:",
            "Start with the digit in ones place. Multiply 4 by 5 = 20. Now carry 2 to the tens column.",
            "Step 2:",
            `Multiply 4 with the digit in tens place, that is, 4 by 4 = 16. 
            Now, add this to the carry-over from the previous step. 16 + 2 (carry-over from step 1) = 18. 
            From this, carry 1 to the hundreds column.`,
            "Step 3:",
            `Multiply 4 with the digit in hundreds place, 4 by 2 = 8 hundreds. 8 + 1 (carry-over from step 2) = 9.`,
            "Step 4:",
            "Therefore, the product of 245 times 4 = 980.",
            ];
    case 9:
      return [
          "Let us Practice What You have LEarned.",
          ];
        default:
      return [];
  }
};

export default SpeechComponent;

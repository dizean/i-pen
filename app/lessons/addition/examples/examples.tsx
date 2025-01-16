import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";

export default function AdditionPractice({ onComplete }: { onComplete: () => void }) {
  const generateRandomNumber = () => Math.floor(Math.random() * 9) + 1;

  const generateProblems = () => [
    { num1: generateRandomNumber(), num2: generateRandomNumber(), image1: require('../../../../assets/images/dog.png'), image2: require('../../../../assets/images/dog.png') },
    { num1: generateRandomNumber(), num2: generateRandomNumber(), image1: require('../../../../assets/images/house.png'), image2: require('../../../../assets/images/house.png') },
    { num1: generateRandomNumber(), num2: generateRandomNumber(), image1: require('../../../../assets/images/star.png'), image2: require('../../../../assets/images/star.png') },
  ];

  const [problems] = useState(generateProblems());
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
  const [choices, setChoices] = useState<number[]>([]); // Store choices for the current problem
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [resultMessage, setResultMessage] = useState("");
  const [isPracticeComplete, setIsPracticeComplete] = useState(false);

  const calculateAnswer = (num1: number, num2: number) => num1 + num2;

  const generateChoices = (correctAnswer: number) => {
    let wrongAnswers: number[] = [];
    while (wrongAnswers.length < 2) {
      let wrongAnswer = generateRandomNumber() + generateRandomNumber();
      if (wrongAnswer !== correctAnswer && !wrongAnswers.includes(wrongAnswer)) {
        wrongAnswers.push(wrongAnswer);
      }
    }
    let choices = [...wrongAnswers, correctAnswer];
    return choices.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    const currentProblem = problems[currentProblemIndex];
    const correctAnswer = calculateAnswer(currentProblem.num1, currentProblem.num2);
    setChoices(generateChoices(correctAnswer));
  }, [currentProblemIndex]);

  const handleChoiceSelection = (choice: number) => {
    const currentProblem = problems[currentProblemIndex];
    const correctAnswer = calculateAnswer(currentProblem.num1, currentProblem.num2);
    setSelectedAnswer(choice);
    if (choice === correctAnswer) {
      setResultMessage("Correct! Well done.");
    } else {
      setResultMessage(`Oops! The correct answer is  ${correctAnswer}`);
    }

    setTimeout(() => {
      if (currentProblemIndex < problems.length - 1) {
        setCurrentProblemIndex(currentProblemIndex + 1);
        setSelectedAnswer(null);
        setResultMessage("");
      } else {
        setResultMessage("Great job! You've finished all the problems. Press Next to Proceed");
        setIsPracticeComplete(true);
        onComplete();
      }
    }, 2000);
  };

  const currentProblem = problems[currentProblemIndex];

  useEffect(() => {
    if (isPracticeComplete) {
      onComplete();
    }
  }, [isPracticeComplete]);

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      

      <View style={styles.problem}>
        <Text style={styles.problemText}>
          {renderNumberImage(currentProblem.num1, currentProblem.image1)}
        </Text>
        <Text style={styles.problemText}>+</Text>
        <Text style={styles.problemText}>
          {renderNumberImage(currentProblem.num2, currentProblem.image2)}
        </Text>
      </View>

      <View style={styles.choices}>
        {choices.map((choice, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.choiceButton,
              selectedAnswer === choice
                ? choice === calculateAnswer(currentProblem.num1, currentProblem.num2)
                  ? styles.correct
                  : styles.incorrect
                : null,
            ]}
            onPress={() => handleChoiceSelection(choice)}
          >
            <Text style={styles.choiceText}>{choice}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {resultMessage && <Text style={styles.resultMessage}>{resultMessage}</Text>}
    </ScrollView>
  );

  function renderNumberImage(number: number, image: any) {
    return (
      <View style={styles.numberContainer}>
        {[...Array(number)].map((_, i) => (
          <Image key={i} source={image} style={styles.numberImage} />
        ))}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1a237e",
    marginBottom: 20,
  },
  problem: {
    marginBottom: 20,
    alignItems: "center",
  },
  problemText: {
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
    color: "#5d4037",
  },
  numberContainer: {
    flexDirection: "row",
    marginVertical: 5,
    flexWrap: "wrap", // Ensures images don't overflow
    justifyContent: "center", // Center the images horizontally
  },
  numberImage: {
    width: 40,
    height: 40,
    margin: 5,
  },
  choices: {
    flexDirection: "row", // This makes the choices appear in a single row
    justifyContent: "space-evenly", // Evenly space the choices
    width: "100%", // Ensure it takes up the full width
    marginVertical: 20,
  },
  choiceButton: {
    backgroundColor: "#fbc02d",
    padding: 15,
    borderRadius: 8,
    width: "30%", // You can adjust this to control the width of each button
    alignItems: "center",
    marginHorizontal: 5,
  },
  choiceText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1a237e",
  },
  correct: {
    backgroundColor: "#388e3c", // Green for correct answer
  },
  incorrect: {
    backgroundColor: "#d32f2f", // Red for incorrect answer
  },
  resultMessage: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1a237e",
    marginTop: 10,
  },
});

import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";

export default function AdditionPractice({ onComplete }: { onComplete: () => void }) {
  const generateRandomNumber = () => Math.floor(Math.random() * 9) + 1;

  const problems = [
    { num1: generateRandomNumber(), num2: generateRandomNumber(), image1: require('../../../../assets/images/dog.png'), image2: require('../../../../assets/images/dog.png') },
    { num1: generateRandomNumber(), num2: generateRandomNumber(), image1: require('../../../../assets/images/house.png'), image2: require('../../../../assets/images/house.png') },
    // { num1: generateRandomNumber(), num2: generateRandomNumber(), image1: require('../../../../assets/images/star.png'), image2: require('../../../../assets/images/star.png') },
  ];

  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [resultMessage, setResultMessage] = useState("");
  const [isPracticeComplete, setIsPracticeComplete] = useState(false);

  const calculateAnswer = (num1: any, num2: any) => num1 + num2;

  const generateChoices = (correctAnswer: any) => {
    let wrongAnswers: number[] = [];
    while (wrongAnswers.length < 2) {
      let wrongAnswer = generateRandomNumber() + generateRandomNumber();
      if (wrongAnswer !== correctAnswer && !wrongAnswers.includes(wrongAnswer)) {
        wrongAnswers.push(wrongAnswer);
      }
    }
    let choices = [...wrongAnswers, correctAnswer];
    choices = choices.sort(() => Math.random() - 0.5);
    return choices;
  };

  const handleChoiceSelection = (choice: any) => {
    const correctAnswer = calculateAnswer(problems[currentProblemIndex].num1, problems[currentProblemIndex].num2);
    setSelectedAnswer(choice);
    if (choice === correctAnswer) {
      setResultMessage("Correct! Well done.");
    } else {
      setResultMessage("Oops! Try again.");
    }
    setTimeout(() => {
      if (currentProblemIndex < problems.length - 1) {
        setCurrentProblemIndex(currentProblemIndex + 1);
        setSelectedAnswer(null);
        setResultMessage("");
      } else {
        setResultMessage("Great job! You've finished all the problems.");
        setIsPracticeComplete(true);
        onComplete();  // Notify parent that practice is complete
      }
    }, 2000);
  };

  const currentProblem = problems[currentProblemIndex];
  const correctAnswer = calculateAnswer(currentProblem.num1, currentProblem.num2);
  const choices = generateChoices(correctAnswer);

  useEffect(() => {
    if (isPracticeComplete) {
      onComplete();  // Call the parent onComplete function when practice is done
    }
  }, [isPracticeComplete]);

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>Addition Practice</Text>

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
            style={[styles.choiceButton, 
                    selectedAnswer === choice 
                    ? (choice === correctAnswer ? styles.correct : styles.incorrect) 
                    : null]}
            onPress={() => handleChoiceSelection(choice)}
          >
            <Text style={styles.choiceText}>{choice}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {resultMessage && <Text style={styles.resultMessage}>{resultMessage}</Text>}
    </ScrollView>
  );

  function renderNumberImage(number: any, image: any) {
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

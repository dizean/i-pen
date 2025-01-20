import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const LineAdditionPractice = () => {
  const [questions, setQuestions] = useState(generateProblems());
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentSelection, setCurrentSelection] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string>("");
  const [isAnswering, setIsAnswering] = useState<boolean>(false); 
  const numberLine = Array.from({ length: 20 }, (_, i) => i + 1);
  function generateProblems() {
    return Array.from({ length: 3 }).map(() => generateProblem());
  }

  function generateProblem() {
    const startNumber = Math.floor(Math.random() * 15) + 1; 
    const steps = Math.floor(Math.random() * 5) + 1; 
    return { startNumber, steps };
  }
  const handleSelectNumber = (number: number) => {
    if (isAnswering) return; 
    const { startNumber, steps } = questions[currentQuestionIndex];

    if (currentSelection === null) {
      if (number === startNumber) {
        setCurrentSelection(startNumber);
        setFeedback("Great! Now count the steps and select the correct answer.");
      } else {
        setFeedback(`Please start with the number ${startNumber}.`);
      }
    } else {
      const expectedAnswer = startNumber + steps;
      setIsAnswering(true);
      if (number === expectedAnswer) {
        setFeedback("Correct! Great job!");
      } else {
        setFeedback(`Incorrect. The correct answer is ${expectedAnswer}.`);
      }
      setTimeout(() => {
        moveToNextQuestion();
      }, 1500); 
    }
  };
  const moveToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentSelection(null);
      setFeedback("");
      setIsAnswering(false); 
    } else {
      setFeedback("You've completed all the questions!");
    }
  };
  const { startNumber, steps } = questions[currentQuestionIndex];

  return (
    <View style={styles.container}>
      <Text style={styles.problem}>
        Solve: {startNumber} + {steps}
      </Text>
      <View style={styles.numberLineContainer}>
        {numberLine.map((num) => (
          <TouchableOpacity
            key={num}
            style={[
              styles.number,
              num === currentSelection ? styles.selectedStartingNumber : null,
            ]}
            onPress={() => handleSelectNumber(num)}
            disabled={isAnswering}
          >
            <Text style={styles.numberText}>{num}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {feedback && <Text style={styles.feedback}>{feedback}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff8e1",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  problem: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 20,
    textAlign: "center",
  },
  numberLineContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 20,
  },
  number: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  numberText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  selectedStartingNumber: {
    backgroundColor: "#4caf50",
  },
  feedback: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 20,
    textAlign: "center",
  },
  resetButton: {
    marginTop: 20,
    padding: 15,
    borderRadius: 8,
    backgroundColor: "#f44336",
  },
  resetButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default LineAdditionPractice;

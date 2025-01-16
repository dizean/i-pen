import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const LineAdditionPractice = () => {
  const [problem, setProblem] = useState(() => generateProblem());
  const [currentSelection, setCurrentSelection] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string>("");

  const numberLine = Array.from({ length: 20 }, (_, i) => i + 1); // Numbers 1 to 20

  function generateProblem() {
    const startNumber = Math.floor(Math.random() * 15) + 1; // Random starting number between 1 and 15
    const steps = Math.floor(Math.random() * 5) + 1; // Random steps between 1 and 5
    return { startNumber, steps };
  }

  const handleSelectNumber = (number: number) => {
    const { startNumber, steps } = problem;

    if (currentSelection === null) {
      if (number === startNumber) {
        setCurrentSelection(startNumber);
        setFeedback("Great! Now count the steps and select the correct answer.");
      } else {
        setFeedback(`Please start with the number ${startNumber}.`);
      }
    } else {
      const expectedAnswer = startNumber + steps;
      if (number === expectedAnswer) {
        setFeedback("Correct! Great job!");
      } else {
        setFeedback(`Incorrect. The correct answer is ${expectedAnswer}.`);
      }
    }
  };

  const resetPractice = () => {
    setProblem(generateProblem());
    setCurrentSelection(null);
    setFeedback("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Line Addition Practice</Text>
      <Text style={styles.problem}>
        Solve: {problem.startNumber} + {problem.steps}
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
          >
            <Text style={styles.numberText}>{num}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {feedback && <Text style={styles.feedback}>{feedback}</Text>}
      <TouchableOpacity style={styles.resetButton} onPress={resetPractice}>
        <Text style={styles.resetButtonText}>New Problem</Text>
      </TouchableOpacity>
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

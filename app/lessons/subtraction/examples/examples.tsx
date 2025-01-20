import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

export default function Practice({ onComplete }: { onComplete: () => void }) {
  const generateRandomNumber = () => Math.floor(Math.random() * 9) + 1;

  const generateProblems = () => [
    {
      num1: generateRandomNumber(),
      num2: (() => {
        const num1 = generateRandomNumber();
        return Math.floor(Math.random() * num1) + 1;
      })(),
      image1: require("../../../../assets/images/dog.png"),
      image2: require("../../../../assets/images/dog.png"),
    },
    {
      num1: generateRandomNumber(),
      num2: (() => {
        const num1 = generateRandomNumber();
        return Math.floor(Math.random() * num1) + 1;
      })(),
      image1: require("../../../../assets/images/house.png"),
      image2: require("../../../../assets/images/house.png"),
    },
    {
      num1: generateRandomNumber(),
      num2: (() => {
        const num1 = generateRandomNumber();
        return Math.floor(Math.random() * num1) + 1;
      })(),
      image1: require("../../../../assets/images/star.png"),
      image2: require("../../../../assets/images/star.png"),
    },
  ];

  const [problems] = useState(generateProblems());
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
  const [choices, setChoices] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [correctAnswer, setCorrectAnswer] = useState<number | null>(null);
  const [resultMessage, setResultMessage] = useState("");
  const [isPracticeComplete, setIsPracticeComplete] = useState(false);

  const calculateAnswer = (num1: number, num2: number) => num1 - num2;

  const generateChoices = (correctAnswer: number) => {
    let wrongAnswers: number[] = [];
    while (wrongAnswers.length < 2) {
      let wrongAnswer = Math.floor(Math.random() * 10);
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
    setCorrectAnswer(correctAnswer); 
  }, [currentProblemIndex]);

  const handleChoiceSelection = (choice: number) => {
    const currentProblem = problems[currentProblemIndex];
    const correctAnswer = calculateAnswer(currentProblem.num1, currentProblem.num2);
    setSelectedAnswer(choice);

    if (choice === correctAnswer) {
      setResultMessage("Correct! Well done.");
    } else {
      setResultMessage(`Oops! The correct answer is ${correctAnswer}`);
    }

    setTimeout(() => {
      if (currentProblemIndex < problems.length - 1) {
        setCurrentProblemIndex(currentProblemIndex + 1);
        setSelectedAnswer(null);
        setCorrectAnswer(null);
        setResultMessage("");
      } else {
        setResultMessage(
          "Great job! You've finished all the problems. Press Next to Proceed"
        );
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
        <View style={styles.problem}>
          {renderNumberImage(currentProblem.num1, currentProblem.image1)}
        </View>
        <Text style={styles.problemText}>-</Text>
        <View style={styles.problem}>
          {renderNumberImage(currentProblem.num2, currentProblem.image2)}
        </View>
      </View>
      <View style={styles.choices}>
        {choices.map((choice, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.choiceButton,
              selectedAnswer === choice
                ? choice === correctAnswer
                  ? styles.correct
                  : styles.incorrect
                : null,
              selectedAnswer !== null && choice === correctAnswer && styles.correctAnswer,
            ]}
            onPress={() => handleChoiceSelection(choice)}
            disabled={selectedAnswer !== null} // Disable buttons after a selection
          >
            <Text style={styles.choiceText}>{choice}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* {resultMessage && <Text style={styles.resultMessage}>{resultMessage}</Text>} */}
    </ScrollView>
  );

  function renderNumberImage(number: number, image: any) {
    const imagesArray = [...Array(number)];
    const rows = [];
    for (let i = 0; i < imagesArray.length; i += 4) {
      rows.push(imagesArray.slice(i, i + 4));
    }

    return (
      <View>
        {rows.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.numberRow}>
            {row.map((_, i) => (
              <Image key={i} source={image} style={styles.numberImage} />
            ))}
          </View>
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
  problem: {},
  problemText: {
    fontSize: 30,
    fontWeight: "500",
    textAlign: "center",
    color: "#5d4037",
    padding: 10,
  },
  numberRow: {
    flexDirection: "row",
    marginVertical: 5,
  },
  numberImage: {
    width: 40,
    height: 40,
    marginHorizontal: 5,
  },
  choices: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    marginVertical: 20,
  },
  choiceButton: {
    backgroundColor: "#fbc02d",
    padding: 15,
    borderRadius: 8,
    width: "30%",
    alignItems: "center",
    marginHorizontal: 5,
  },
  choiceText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1a237e",
  },
  correct: {
    backgroundColor: "#388e3c",
  },
  incorrect: {
    backgroundColor: "#d32f2f",
  },
  correctAnswer: {
    backgroundColor: "#4caf50",
  },
  resultMessage: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1a237e",
    marginTop: 10,
  },
});

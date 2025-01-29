import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import * as Text from "@/context/FontContent";
import { useRoute } from "@react-navigation/native";
interface RouteParams {
  topic?: string;
}
export default function Practice({ onComplete }: { onComplete: () => void }) {
  const route = useRoute();
  const { topic } = (route.params as RouteParams) || {};
  const generateRandomNumber = () => Math.floor(Math.random() * 9) + 1;

  const generateProblems = () =>
    [
      {
        num1: generateRandomNumber(),
        num2: generateRandomNumber(),
        image1: require("../../../assets/images/dog.png"),
        image2: require("../../../assets/images/dog.png"),
      },
      {
        num1: generateRandomNumber(),
        num2: generateRandomNumber(),
        image1: require("../../../assets/images/house.png"),
        image2: require("../../../assets/images/house.png"),
      },
      {
        num1: generateRandomNumber(),
        num2: generateRandomNumber(),
        image1: require("../../../assets/images/star.png"),
        image2: require("../../../assets/images/star.png"),
      },
    ].map((problem) => {
      if (topic === "Subtraction" && problem.num1 < problem.num2) {
        [problem.num1, problem.num2] = [problem.num2, problem.num1];
      }
      return problem;
    });

  const [problems] = useState(generateProblems());
  const [operation] = useState(topic === "Addition" ? "+" : "-");
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
  const [choices, setChoices] = useState<number[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [correctAnswer, setCorrectAnswer] = useState<number | null>(null);
  const [resultMessage, setResultMessage] = useState("");
  const [isPracticeComplete, setIsPracticeComplete] = useState(false);
  const calculateAnswer = (num1: number, num2: number) =>
    topic === "Addition" ? num1 + num2 : num1 - num2;
  const generateChoices = (correctAnswer: number) => {
    let wrongAnswers: number[] = [];

    while (wrongAnswers.length < 2) {
      let wrongAnswer;
      if (topic === "Addition") {
        wrongAnswer =
          correctAnswer +
          (Math.random() < 0.5 ? -1 : 1) * (Math.floor(Math.random() * 3) + 1);
      } else {
        let num1 = generateRandomNumber();
        let num2 = generateRandomNumber();
        if (num1 < num2) {
          [num1, num2] = [num2, num1];
        }
        wrongAnswer = num1 - num2;
        if (Math.abs(wrongAnswer - correctAnswer) > 2) {
          wrongAnswer = correctAnswer + (Math.random() < 0.5 ? -1 : 1);
        }
      }
      if (
        wrongAnswer !== correctAnswer &&
        wrongAnswer >= 0 &&
        !wrongAnswers.includes(wrongAnswer)
      ) {
        wrongAnswers.push(wrongAnswer);
      }
    }
    let choices = [...wrongAnswers, correctAnswer];
    return choices.sort(() => Math.random() - 0.5);
  };
  useEffect(() => {
    const currentProblem = problems[currentProblemIndex];
    const correctAnswer = calculateAnswer(
      currentProblem.num1,
      currentProblem.num2
    );
    setChoices(generateChoices(correctAnswer));
    setCorrectAnswer(correctAnswer);
  }, [currentProblemIndex]);

  const handleChoiceSelection = (choice: number) => {
    const currentProblem = problems[currentProblemIndex];
    const correctAnswer = calculateAnswer(
      currentProblem.num1,
      currentProblem.num2
    );
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
        <Text.TextMedium style={styles.problemText}>
          {operation}
        </Text.TextMedium>
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
              selectedAnswer !== null &&
                choice === correctAnswer &&
                styles.correctAnswer,
            ]}
            onPress={() => handleChoiceSelection(choice)}
            disabled={selectedAnswer !== null}
          >
            <Text.TextMedium style={styles.choiceText}>
              {choice}
            </Text.TextMedium>
          </TouchableOpacity>
        ))}
      </View>
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
    width: "100%",
    padding: "3%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    backdropFilter: "blur(10px)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",
  },
  problem: {},
  problemText: {
    fontSize: 30,
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
    backgroundColor: "#FDDA0D",
    width: "30%",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginVertical: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    borderWidth: 2,
    borderColor: "#38bfe7",
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

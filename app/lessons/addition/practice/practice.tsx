import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";

interface Problem {
  startNumber: number;
  steps: number;
}
interface Question {
  question: string;
  correctAnswer: number;
  options: number[];
}
export default function Test() {
  const [currentPractice, setCurrentPractice] = useState<"addition" | "line">(
    "addition"
  );
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const generateQuestions = (count: number) => {
    const questions = [];
    for (let i = 0; i < count; i++) {
      const num1 = Math.floor(Math.random() * 10);
      const num2 = Math.floor(Math.random() * (10 - num1));
      const correctAnswer = num1 + num2;
      const options = new Set<number>();
      options.add(correctAnswer);
      while (options.size < 4) {
        options.add(Math.floor(Math.random() * 20));
      }
      questions.push({
        question: `What is ${num1} + ${num2}?`,
        correctAnswer,
        options: Array.from(options).sort(() => Math.random() - 0.5),
      });
    }
    return questions;
  };



  const generateProblems = () => {
    const problems = [];
    for (let i = 0; i < 3; i++) {
      const startNumber = Math.floor(Math.random() * 15) + 1;
      const steps = Math.floor(Math.random() * 5) + 1;
      problems.push({ startNumber, steps });
    }
    return problems;
  };

  const [problems] = useState(generateProblems());
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
  const [currentSelection, setCurrentSelection] = useState<number | null>(null);
  const [currentSecondSelection, setCurrentSecondSelection] = useState<number | null>(null);
  const [feedback, setFeedback] = useState("");
  const [isAnswering, setIsAnswering] = useState(false);
  const [secondSelectionCorrect, setSecondSelectionCorrect] = useState<boolean | null>(null); 
  const [correctAnswer, setCorrectAnswer] = useState<number | null>(null); 
  const [wrongAnswer, setWrongAnswer] = useState<number | null>(null);
  const [answerSelected, setAnswerSelected] = useState<number | null>(null);
  const numberLine = Array.from({ length: 20 }, (_, i) => i + 1);
  const [questionss, setQuestions] = useState<Question[]>([]);
  useEffect(() => {
    const questions = generateQuestions(7);
    setQuestions(questions);
  }, []);
  const handleAdditionAnswer = (selectedAnswer: number) => {
    const isCorrect =
      selectedAnswer === questionss[currentQuestion].correctAnswer;

    if (isCorrect) {
      setScore((prev) => prev + 1);
      setCorrectAnswer(selectedAnswer); 
      setWrongAnswer(null);
    }
    else {
      setCorrectAnswer( questionss[currentQuestion].correctAnswer); 
      setWrongAnswer(selectedAnswer); 
    }
    setAnswerSelected(selectedAnswer)
    setTimeout(() => {
      if (currentQuestion < questionss.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
        setAnswerSelected(null); 
        setCorrectAnswer(null);
        setWrongAnswer(null);
      } else {
        setCurrentPractice("line");
        setAnswerSelected(null); 
        setCorrectAnswer(null);
        setWrongAnswer(null);
      }
    },2000)
    
  };

  const handleNumberLineSelection = (number: number) => {
    if (isAnswering) return;
    const { startNumber, steps } = problems[currentProblemIndex];

    if (currentSelection === null) {
      if (number === startNumber) {
        setCurrentSelection(startNumber);
        // setFeedback("Great! Now count the steps and select the correct answer.");
      } else {
        // setFeedback(`Please start with the number ${startNumber}.`);
      }
    } else {
      const expectedAnswer = startNumber + steps;
      setIsAnswering(true);
      setCurrentSecondSelection(number);
      setCorrectAnswer(expectedAnswer); 
      setSecondSelectionCorrect(number === expectedAnswer); 
      if (number === expectedAnswer) {
        setScore((prev) => prev + 1);
        setFeedback("Correct! Well done.");
      } else {
        setFeedback(`Incorrect. The correct answer is ${expectedAnswer}.`);
      }
      setTimeout(() => {
        moveToNextNumberLineQuestion();
      }, 1500);
    }
  };

  const moveToNextNumberLineQuestion = () => {
    if (currentProblemIndex < problems.length - 1) {
      setCurrentProblemIndex((prev) => prev + 1);
      setCurrentSelection(null);
      setCurrentSecondSelection(null); 
      setCorrectAnswer(null);
      setSecondSelectionCorrect(null); 
      setFeedback("");
      setIsAnswering(false);
    } else {
      setFeedback("You've completed all the questions!");
    }
  };

  if (currentPractice === "addition") {
    const currentQuestionData = questionss[currentQuestion];
    if (!currentQuestionData) {
      return (
        <View style={styles.container}>
          <Text>Loading questions...</Text>
        </View>
      );
    }
    return (
      <ImageBackground source={require('../../../../assets/images/bgyellowcut.png')} style={styles.container}>
        <Text style={styles.question}>{currentQuestionData.question}</Text>
        <View style={styles.optionsContainer}>
          {currentQuestionData.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionButton,
                answerSelected === option && styles.selectedOption,
                correctAnswer === option && styles.correctOption,
                wrongAnswer === option && styles.wrongOption,
              ]}
              onPress={() => handleAdditionAnswer(option)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.score}>Current Score: {score}</Text>
      </ImageBackground>
    );
  }

  const { startNumber, steps } = problems[currentProblemIndex];
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Select the first addend then count the steps for the correct answer.
      </Text>
      <Text style={styles.problem}>
        Solve: {startNumber} + {steps}
      </Text>
      <View style={styles.numberLineContainer}>
        {numberLine.map((num) => (
          <TouchableOpacity
            key={num}
            style={[
              styles.number,
              num === currentSelection ? styles.selectedOption : null,
              num === currentSecondSelection
                ? secondSelectionCorrect
                  ? styles.correctOption 
                  : styles.wrongOption 
                : num === correctAnswer
                ? styles.correctOption 
                : null,
            ]}
            onPress={() => handleNumberLineSelection(num)}
            disabled={isAnswering}
          >
            <Text style={styles.numberText}>{num}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {feedback && <Text style={styles.feedback}>{feedback}</Text>}
      <Text style={styles.score}>Current Score: {score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff8e1",
  },
  text: {
    fontSize: 15,
    marginVertical: 5
  },
  question: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
    color: "#5D4037",
    fontWeight: "600",
  },
  optionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  optionButton: {
    backgroundColor: "#FFEB3B",
    width: "48%",
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
    borderColor: "#F57F17",
  },
  optionText: {
    fontSize: 18,
    color: "#212121",
    textAlign: "center",
    fontWeight: "bold",
  },
  score: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    color: "#F57F17",
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
    backgroundColor: "#FFEB3B",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderRadius: 8,
    marginVertical: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    borderWidth: 2,
    borderColor: "#F57F17",
  },
  numberText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  selectedStartingNumber: {
    backgroundColor: "#fbc02d",
  },
  selectedSecondNumberCorrect: {
    backgroundColor: "#388E3C", 
  },
  selectedSecondNumberWrong: {
    backgroundColor: "#D32F2F",
  },
  feedback: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 20,
    textAlign: "center",
  },
  selectedOption:{
    backgroundColor: '#fbc02d'
  },
  correctOption:{
    backgroundColor: 'green'
  },
  wrongOption:{
    backgroundColor: 'red'
  },
});

import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { useUser } from "@/context/UserContext";
import styles from "./styles";

interface Question {
  question: string;
  correctAnswer: number;
  options: number[];
}

export default function PostTest() {
  const { username } = useUser();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const { setPreTestScore } = useUser();

  const generateQuestions = (count: number): Question[] => {
    const questions: Question[] = [];
    for (let i = 0; i < count; i++) {
      let num1 = Math.floor(Math.random() * 90) + 10; 
      let num2 = Math.floor(Math.random() * 90) + 10; 
      const operations = ["+", "-", "*", "/", "*", "/", "/", "/"];
      const operation = operations[Math.floor(Math.random() * operations.length)];
      let correctAnswer: number;

      if (operation === "+") {
        correctAnswer = num1 + num2;
      } else if (operation === "-") {
        correctAnswer = Math.max(num1, num2) - Math.min(num1, num2);
      } else if (operation === "*") {
        const multiplier1 = Math.floor(Math.random() * 15) + 1; 
        const multiplier2 = Math.floor(Math.random() * 15) + 1; 
        correctAnswer = multiplier1 * multiplier2;
        num1 = multiplier1;
        num2 = multiplier2;
      } else {
        let divisor;
        do {
          divisor = Math.floor(Math.random() * (num1 - 1)) + 1;
        } while (num1 % divisor !== 0); 
        correctAnswer = num1 / divisor;
        num2 = divisor; 
      }

      const options = new Set<number>();
      options.add(correctAnswer);
      while (options.size < 4) {
        const randomOption = Math.floor(Math.random() * 101); 
        options.add(randomOption);
      }

      questions.push({
        question: `What is ${num1} ${operation} ${num2}?`,
        correctAnswer,
        options: Array.from(options).sort(() => Math.random() - 0.5),
      });
    }
    return questions;
  };

  const questions = generateQuestions(20);

  const handleAnswer = (selectedAnswer: number): void => {
    const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      Alert.alert(
        "Test Finished",
        `Your final score is ${score + (isCorrect ? 1 : 0)}/${questions.length}`
      );
      setPreTestScore(score + (isCorrect ? 1 : 0));
      resetQuiz();
    }
  };

  const resetQuiz = (): void => {
    setScore(0);
    setCurrentQuestion(0);
  };

  const currentQuestionData = questions[currentQuestion];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Hello, {username}! Let's take the Pre-Test.
      </Text>
      <Text style={styles.question}>{currentQuestionData.question}</Text>
      <View style={styles.optionsContainer}>
        {currentQuestionData.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.optionButton}
            onPress={() => handleAnswer(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.score}>Current Score: {score}</Text>
    </View>
  );
}

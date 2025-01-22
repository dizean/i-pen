import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { useUser } from "@/context/UserContext";
import styles from "./styles";
import { useRouter } from "expo-router";

interface Question {
  question: string;
  correctAnswer: number;
  options: number[];
}

export default function PreTest() {
  const { username } = useUser();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const { setPreTestScore } = useUser();
  const router = useRouter()
  const generateQuestions = (count: number): Question[] => {
    const questions: Question[] = [];
    for (let i = 0; i < count; i++) {
      const num1 = Math.floor(Math.random() * 10) + 1; 
      const num2 = Math.floor(Math.random() * 10) + 1; 
      const operations = ["+", "-", "*"];
      const operation = operations[Math.floor(Math.random() * operations.length)];
      let correctAnswer: number;
      if (operation === "+") {
        correctAnswer = num1 + num2;
      } else if (operation === "-") {
        correctAnswer = num1 - num2;
      } else {
        correctAnswer = num1 * num2;
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
      router.push('/content/content');
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

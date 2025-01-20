import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Alert, ImageBackground } from "react-native";
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
  const router = useRouter();
  const [correctAnswer, setCorrectAnswer] = useState<number | null>(null);
  const [wrongAnswer, setWrongAnswer] = useState<number | null>(null);
  const [answerSelected, setAnswerSelected] = useState<number | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  useEffect(() => {
    const generatedQuestions = generateQuestions(20);
    setQuestions(generatedQuestions);
  }, []);

  const generateQuestions = (count: number): Question[] => {
    const questions: Question[] = [];
    for (let i = 0; i < count; i++) {
      const num1 = Math.floor(Math.random() * 10);
      const num2 = Math.floor(Math.random() * (10 - num1));
      const operation = Math.random() < 0.5 ? "+" : "-";
      let correctAnswer;

      if (operation === "+") {
        correctAnswer = num1 + num2;
      } else {
        correctAnswer = num1 - num2;
      }

      const options = new Set<number>();
      options.add(correctAnswer);

      while (options.size < 4) {
        const randomOption = Math.floor(Math.random() * 10);
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
  const handleAnswer = (selectedAnswer: number): void => {
    if (answerSelected !== null) return;

    const currentQuestionData = questions[currentQuestion];
    const isCorrect = selectedAnswer === currentQuestionData.correctAnswer;

    if (isCorrect) {
      setScore((prev) => prev + 1);
      setCorrectAnswer(selectedAnswer); 
      setWrongAnswer(null);
    } else {
      setCorrectAnswer(currentQuestionData.correctAnswer); 
      setWrongAnswer(selectedAnswer); 
    }

    setAnswerSelected(selectedAnswer); 
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
        setAnswerSelected(null); 
        setCorrectAnswer(null);
        setWrongAnswer(null); 
      } else {
        Alert.alert(
          "Test Finished",
          `Your final score is ${score + (isCorrect ? 1 : 0)}/${questions.length}`
        );
        setPreTestScore(score + (isCorrect ? 1 : 0));
        
        router.push('/grade2/content/content');
      }
    }, 2000);
  };

  if (questions.length === 0) return null; 

  const currentQuestionData = questions[currentQuestion];

  return (
    <ImageBackground source={require('../../../assets/images/bg.png')} style={styles.container}>
      <View style={styles.wrapper}>
      <Text style={styles.title}>
       Pre - Test
      </Text>
      <Text style={styles.title}>
        Hello, {username}!
      </Text>
      <Text style={styles.title}>
       Let us test what you know.
      </Text>
      <Text style={styles.question}>{currentQuestionData.question}</Text>
      <View style={styles.optionsContainer}>
        {currentQuestionData.options.map((option) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.optionButton,
              answerSelected === option && styles.selectedOption,
              correctAnswer === option && styles.correctOption,
              wrongAnswer === option && styles.wrongOption,
            ]}
            onPress={() => handleAnswer(option)}
            disabled={answerSelected !== null} 
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.score}>Current Score: {score}</Text>
      </View>
    </ImageBackground>
  );
}

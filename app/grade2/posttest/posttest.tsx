import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  ImageBackground,
} from "react-native";
import { useUser } from "@/context/UserContext";
import styles from "./styles";
import { useRouter } from "expo-router";
import { Audio } from "expo-av";
import * as Speech from "expo-speech";
import { Image } from "expo-image";

interface Question {
  question: string;
  correctAnswer: number;
  options: number[];
}

export default function PostTest() {
  const { username, setPostTestScore } = useUser();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState<number | null>(null);
  const [wrongAnswer, setWrongAnswer] = useState<number | null>(null);
  const [answerSelected, setAnswerSelected] = useState<number | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [showResultsModal, setShowResultsModal] = useState(false);
  const [timer, setTimer] = useState(15);
  const [isTimerPaused, setIsTimerPaused] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();
  const beepSound = require("../../../assets/audio/beep.mp3");

  useEffect(() => {
    const generatedQuestions = generateQuestions(20);
    setQuestions(generatedQuestions);
  }, []);
  useEffect(() => {
    if (isTimerPaused || timer === 0) {
      if (timer === 0 && !isProcessing) {
        handleTimeout();
      }
      return;
    }

    const countdown = setTimeout(() => {
      setTimer((prev) => prev - 1);
      playBeepSound();
    }, 1000);

    return () => clearTimeout(countdown);
  }, [timer, isTimerPaused, isProcessing]);
  const generateQuestions = (count: number): Question[] => {
    const questions: Question[] = [];
    for (let i = 0; i < count; i++) {
      const num1 = Math.floor(Math.random() * 10);
      const num2 = Math.floor(Math.random() * 10);
      const operation = Math.random() < 0.5 ? "+" : "-";
      let correctAnswer: number;
      let greater = num1;
      let lesser = num2;
      if (operation === "-") {
        if (num2 > num1) {
          greater = num2;
          lesser = num1;
        }
        correctAnswer = greater - lesser;
      } else {
        correctAnswer = num1 + num2;
      }
      const options = new Set<number>();
      options.add(correctAnswer);
      while (options.size < 4) {
        const randomOption = Math.floor(Math.random() * 20);
        options.add(randomOption);
      }
      questions.push({
        question: `What is ${operation === "+" ? num1 : greater} ${operation} ${
          operation === "+" ? num2 : lesser
        }?`,
        correctAnswer,
        options: Array.from(options).sort(() => Math.random() - 0.5),
      });
    }
    return questions;
  };

  const playBeepSound = async () => {
    const { sound } = await Audio.Sound.createAsync(beepSound);
    await sound.playAsync();
  };

  const speak = (message: string) => {
    Speech.speak(message, { pitch: 1.8, rate: 0.7, volume: 0.9 });
  };

  const handleTimeout = () => {
    if (isProcessing) return;
    setIsProcessing(true);

    const currentQuestionData = questions[currentQuestion];
    setCorrectAnswer(currentQuestionData.correctAnswer);
    playWrongSound(String(currentQuestionData.correctAnswer), 0);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
        resetStateForNextQuestion();
      } else {
        setShowResultsModal(true);
        cheer();
      }
      setIsProcessing(false);
    }, 2600);
  };

  const handleAnswer = (selectedAnswer: number) => {
    if (answerSelected !== null || isProcessing) return;
    setIsProcessing(true);
    setAnswerSelected(selectedAnswer);
    setIsTimerPaused(true);
    const currentQuestionData = questions[currentQuestion];
    const isCorrect = selectedAnswer === currentQuestionData.correctAnswer;

    if (isCorrect) {
      setScore((prev) => prev + 1);
      setCorrectAnswer(selectedAnswer);
      playCorrectSound();
    } else {
      setCorrectAnswer(currentQuestionData.correctAnswer);
      setWrongAnswer(selectedAnswer);
      playWrongSound(String(currentQuestionData.correctAnswer), selectedAnswer);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
        resetStateForNextQuestion();
      } else {
        setShowResultsModal(true);
        cheer();
      }
      setIsProcessing(false);
    }, 2600);
  };

  const resetStateForNextQuestion = () => {
    setAnswerSelected(null);
    setCorrectAnswer(null);
    setWrongAnswer(null);
    setTimer(15);
    setIsTimerPaused(false);
  };

  const playCorrectSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../../../assets/audio/correct.mp3")
    );
    await sound.playAsync();
    speak("Correct!");
  };

  const playWrongSound = async (answer: string, selected: any) => {
    const { sound } = await Audio.Sound.createAsync(
      require("../../../assets/audio/wrong.mp3")
    );
    await sound.playAsync();
    const message =
      selected === 0
        ? `Time's up! The correct answer is ${answer}.`
        : `Incorrect! The correct answer is ${answer}.`;
    speak(message);
  };

  const cheer = async () => {
    setIsTimerPaused(true);
    setIsProcessing(true);
    const { sound } = await Audio.Sound.createAsync(
      require("../../../assets/audio/cheer.mp3")
    );
    await sound.playAsync();
    speak(
      `Congratulations for finishing the post test and
      for tackling Lesson 1 Addition and Lesson 2 Subtraction.
       Your final score is ${score} out of ${questions.length}.
      `
    );
  };  

  const handleCloseModal = () => {
    setPostTestScore(score);
    router.push("/content/content");
  };

  if (questions.length === 0) return null;

  const currentQuestionData = questions[currentQuestion];

  return (
    <ImageBackground style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={[styles.title, { fontSize: 50, fontWeight: "900" }]}>
          Post - Test
        </Text>
        <Text style={[styles.title, { fontSize: 20 }]}>
          Let us test what you have learned.
        </Text>
        <Text style={styles.question}>{currentQuestionData.question}</Text>
        <Text style={styles.timer}>Time Remaining: {timer}s</Text>
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
      <Modal visible={showResultsModal} transparent={true} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Congratulations!</Text>
            <Text style={styles.modalText}>
              Your final score is {score}/{questions.length}.
            </Text>
            <View style={styles.images}>
              <Image
                source={require("../../../assets/images/3fr.gif")}
                contentFit="fill"
                transition={1000}
                style={[styles.gif]}
              />
            </View>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleCloseModal}
            >
              <Text style={styles.modalButtonText}>Proceed</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
}
